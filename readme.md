# Welcome to Telehealth Kit

This is the prototype for the Welcome to Telehealth Kit. It’s built with [Middleman](https://middlemanapp.com/) but can and should be built and used with a content management system. You can view the latest build on staging via anatecture. 

## Development

### Running it locally

1. First, ensure you have a [Ruby](https://www.ruby-lang.org/en/) environment with [Bundler](http://bundler.io/) on your computer.
1. In your terminal, `cd` into this directory and run `bundle install`.
1. Run `bundle exec middleman` and go to [localhost:4567](http://localhost:4567/) in your browser.

### Building

After you have successfully run the app locally, use `bundle exec middleman build` to create a new build. It will be in the `/build/` directory.

### Where things are

The HTML is primarily split between `/source/index.html.erb` for the content and `/source/layouts/layout.erb` for everything else. The VA seal can be found in `/source/partials/_va-seal.html.erb` as an SVG.

Stylesheets are written in [Sass](https://sass-lang.com/) and can be found at `/source/stylesheets/style.css.scss`.

Scripts are in `/source/javascripts/script.js`.

## Content

### URL features

This Welcome to Telehealth Kit can contain an array of content modules, not all of which are visible by default. To see a list of all content modules add `/?edit` to the URL and you can see all modules and customize the URL for the user.

### HTML Structure and special features

The main content file is `/source/index.html.erb` and it contains a series of `<article>` elements. Each of these elements denotes a page of content and should have a unique ID. By default all modules are visible, but to make a section optional add the class `class="sectionName hidden"` and modify the Name part of sectionName to be a capitalized variation of the unique ID.

Within each `<article>` there is a `<header>` containing a headline `<h1>` and optional opening paragraph `<p>`.

Below the `<header>` is a `<section>` where all content can be placed.

To make a `<ul>` a checklist add the class `checklist`

Editable sections are spans withe the class `editable` like so: `<span class="editable"></span>` and adding a title attribute will add text explaining what the field is for `<span class="editable" title="Date of appointment"></span>`.

If you want the section to print out as a card, add the class `card` to the `<article>`. Cards are formatted with the `<section>` first and an `<aside>` after like so:

```HTML
<section class="card-content">
</section>
<aside class="card-aside">
</aside>
```
