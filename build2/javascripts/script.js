// Mobile?

if( /Android|iOS|Opera Mini/i.test(navigator.userAgent) ) {
 document.body.classList.add('mobile');
}

// Editable bits

var editable = document.querySelectorAll('.editable');
for (var i = 0; i < editable.length; i++) {
  editable[i].setAttribute('contenteditable',true);
}

// Checklist

var checklist = document.querySelectorAll('.checklist > li');
for (var i = 0; i < checklist.length; i++) {
  checklist[i].innerHTML = '<input type="checkbox"/> ' + checklist[i].innerHTML;
}

// edit interface

function settings() {
  var sections = document.querySelectorAll('article.hidden');
  var wrapper = document.getElementById('editModules');
  for (var i = 0; i < sections.length; i++) {
    var section = sections[i];
    var id = section.getAttribute('id');
    var title = section.querySelector('h1').innerHTML;
    if(id != 'edit') {
      var label = document.createElement('label');
      var input = document.createElement('input');
      input.classList.add('settingsCheckbox');
      input.type = 'checkbox';
      input.setAttribute('onchange', 'editSelect(this,' + id + ')');
      input.setAttribute('data-id', id);
      var span = document.createElement('span');
      span.innerHTML = title;

      label.appendChild(input);
      label.appendChild(span);
      wrapper.appendChild(label);
    }
  }
} settings();

function editSelect(t,name) {
  var checkboxes = document.querySelectorAll('.settingsCheckbox');
  var url = '';
  for (var i = 0; i < checkboxes.length; i++) {
    if(checkboxes[i].checked) {
      url = url + '?' + checkboxes[i].dataset['id'];
    }
  }
  var location = window.location.href.split('?')[0];

  url = location + url;
  document.getElementById('editURL').innerHTML = '<a href="' + url + '">' + url + '</a>';
}

// URL

var edit = false;

function queryURL() {
  var URL = window.location.search;

  // Split by modules
  URL = URL.split('?');
  // Loop through modules
  for (var i = 1; i < URL.length; i++) {
    var module = URL[i].charAt(0).toUpperCase() + URL[i].slice(1); // capitalize first letter
    if(module === 'Edit') {
      edit = true;
      document.body.classList.add('edit');
    }
    var e = document.querySelector('.section' + module);
    if(e) {
      e.classList.remove('hidden');
    }
  }
} queryURL();

// build ToC

function toc() {
  var sections = document.querySelectorAll('article:not(.hidden)');
  if(edit) {
    var sections = document.querySelectorAll('article');
  }
  var ihtml = '';
  for (var i = 0; i < sections.length; i++) {
    var section = sections[i];
    var id = section.getAttribute('id');
    var title = section.querySelector('h2').innerHTML;
    ihtml = ihtml + '<a href="#' + id + '">' + title + '</a>';
  }
  document.getElementById('nav').innerHTML = ihtml;
} toc();
