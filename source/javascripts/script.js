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

var checklist = document.querySelectorAll('.checklist li');
for (var i = 0; i < checklist.length; i++) {
  checklist[i].innerHTML = '<input type="checkbox"/> ' + checklist[i].innerHTML;
}

// URL

function queryURL() {
  var URL = window.location.search;

  // Split by modules
  URL = URL.split('?');
  // Loop through modules
  for (var i = 1; i < URL.length; i++) {
    var module = URL[i].charAt(0).toUpperCase() + URL[i].slice(1); // capitalize first letter
    var modules = document.querySelectorAll('.section' + module);
    for (var i = 0; i < modules.length; i++) {
      modules[i].classList.remove('hidden');
    }
  }
} queryURL();
