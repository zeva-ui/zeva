<p align="center">
    <a href="https://zeva-ui.github.io/">
        <img src="https://raw.githubusercontent.com/zeva-ui/zeva-ui.github.io/master/assets/image/zeva.png" alt="Zeva logo" width="72" height="72">
    </a>
</p>

<h3 align="center">Zeva</h3>

<p align="center">
    A modern and minimalist framework for building responsive and modern frontend
    <br>
    <a href="https://zeva-ui.github.io/"><strong>Explore Zeva docs »</strong></a>
    <br>
    <br>
    <a href="https://github.com/zeva-ui/zeva/issues/new">Report bug</a>
    ·
    <a href="https://github.com/zeva-ui/zeva/issues/new">Request feature</a>
</p>

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)](https://github.com/zeva-ui/zeva/releases/tag/v1.0.0) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Discord](https://img.shields.io/badge/chat-on%20discord-7289da.svg)](https://discord.gg/BWk5ZUb)

# Table of contents

- [Getting Started](#getting-started)
- [Styling](#styling)
- [Components](#components)
- [Contributing](#contributing)
- [Versioning](#versioning)
- [Core Team](#core-team)
- [Thanks](#thanks)

# Getting Started
## Introduction
Get started with zeva, a modern and minimalist framework for building responsive and modern front ends. Below are different ways of using zeva on your project:

1. Download the zip file from [here](https://github.com/zeva-ui/zeva/archive/v1.0.0.zip)
2. Clone it from [here](https://github.com/zeva-ui/zeva.git)
3. Use one of our two CDN links:
    - [Zeva's regular CSS file](https://cdn.jsdelivr.net/gh/zeva-ui/zeva/dist/css/zeva.css) 
    - [Zeva's minified CSS file](https://cdn.jsdelivr.net/gh/zeva-ui/zeva/dist/css/zeva.min.css).
4. npm i zeva (coming soon)
5. yarn add zeva (coming soon)
6. bower install zeva (coming soon)

## Content

Within the downloaded file you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations:

```text
zeva/
└── dist/
    └── css/
        ├── zeva.css
        ├── zeva.css.map
        ├── zeva.min.css
        └── zeva.min.css.map
    └── js/
        └── index.min.js
```

## Theming:
Zeva Theming helps you Customize Zeva for changing the overall look of your Project.
Light Theme
```html
<body class="body-light">
```
Custom Theme
```html
<body class="body --bg-{your background color here} --text-{your main text color here}">
```

## Responsive
Include this `<meta>` tag inside `<head>` before stylesheet link to ensure proper rendering and touch zooming for all devices.
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
## Usage:
### CDN Usage
Include the stylesheet `<link>` inside `<head>`, same for other cdn links too
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/zeva-ui/zeva/dist/css/zeva.css">

<!-- Or you could try to use the minified version -->

<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/zeva-ui/zeva/dist/css/zeva.min.css">
```

### Zip Usage: CSS files

1. Unzip the file wherever you want;
2. Go to `dist/css/`;
2. Import/Copy either the regular or minified CSS file.

```html
<link rel="stylesheet" href="./dist/css/zeva.css">

<!-- Or you could try to use the minified version -->

<link rel="stylesheet" href="./dist/css/zeva.min.css">
```


### Zip Usage: Sass files

Before anything, you should import our variables. To do so, follow these steps:

1. Unzip the `.zip` wherever you want;
2. Go to `src/scss/`;
3. Import `./abstracts/variables/variables` to the top of your main Sass file. **Always remember to import variables, before anything!**

Now, you're free to import any `.scss` file that you need.

``` scss
// Zeva's required files
@import './abstracts/variables/variables';

// Chosen components
@import './components/button',
        './components/form',
        './components/table';
```

### Zip Usage: JS file
1. Unzip the files
2. Go to dist/js/
3. Import/Copy the minified js file to your working directory
```html
<script type="text/javascript" src="index.min.js"></script>
```

## Theming Usage
Include the `<script>` tag after all the content inside `<body>`
```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/zeva-ui/zeva/dist/js/index.min.js"></script>
```

### Include this for using icons
Icons provided by fontawesome
```html
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
```

# Styling

## Typography
We use Poppins as font-family, made by [ITF](https://github.com/itfoundry) on [Google fonts](https://fonts.google.com/specimen/Poppins)

```html
    <a>link</a>
    <i>italic</i>
    <b>bold</b>
    <u>underline</u>
    <strike>strike</strike>
    <small>small</small>
    <sup>superscript</sup>
    <sub>subscript</sub>

    <h1>This is a heading</h1>
    <h2>This is a heading</h2>
    <h3>This is a heading</h3>
    <h4>This is a heading</h4>
    <h5>This is a heading</h5>
    <h6>This is a heading</h6>
```

## Font size
Zeva uses "rem" unit for font-size, it's relative to font-size of the root element.

```sass
$font-size: 1rem; /* normal font */
$font-size-small: 0.8rem; /* smaller font */
$font-size-big: 1.2rem;  /* bigger font */
```

# Components

## Helpers
Helpers make it easy to customize components as per your needs. Helpers can be used with mostly all components. The 'h' prefix, in the class names of helpers, means 'helper'.

`.h-border-all` - Creates a border around a component
`.h-border-pill` - Used for rounded borders
`.h-border-bottom` - Creates a border but only on bottom
`.h-display-block` - Displays a component as a block element (like `<p>`).
`.h-text-right` - Aligns the text to right
`.h-text-center` - Aligns the text to Center
`.h-width-full` - Sets a component width to 100% of it's parent
`.h-weight-bold` - Changes font weight to bold

## Buttons
### Different button styles
```html
<button class="button">simple button</button>
<button class="button button--filled">filled button</button>
<button class="button h-border-pill">rounded button</button>
<button class="button h-border-pill button--filled">rounded filled button</button>
```

### Button Sizes
```html
<button class="button -size-small">small button</button>
<button class="button">normal button</button>
<button class="button -size-large">large button</button>
```
### Button Theme
```html
<button class="button -theme-danger">danger button</button>
<button class="button -theme-warn h-border-pill">warn button rounded</button>
<button class="button button--filled -theme-success">success button filled</button>
```

### Button with Icons
```html
<button class="button">Search &nbsp; <i class="fas fa-search"></i></button>
<button class="button -h-border-pill button--filled">Download &nbsp; <i class="fas fa-download"></i></button>
<button class="button -theme-danger -h-border-pill"><i class="fas fa-skull-crossbones"></i> &nbsp; Danger </button>
```

## Tables
### Simple Table
```html
<table class="table">
    <thead>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Country</th>
        </tr>
    </thead>
    <tbody>
    <tr>
        <td>Elon</td>
        <td>Musk</td>
        <td>47</td>
        <td>South Africa, Canada, America</td>
    </tr>
    <tr>
        <td>Mark</td>
        <td>Zuckerberg</td>
        <td>34</td>
        <td>America</td>
    </tr>
    </tbody>
</table>
```

### Filled Table with border on bottom of `<td>` tag
```html
<table class="table">
    <thead class="table__head--filled">
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Country</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Elon</td>
            <td>Musk</td>
            <td>47</td>
            <td>South Africa, Canada, America</td>
        </tr>
        <tr>
            <td>Mark</td>
            <td>Zuckerberg</td>
            <td>34</td>
            <td>America</td>
        </tr>
    </tbody>
</table>
```
## Forms
### Input fields
```html
<input type="text" class="input" placeholder="default input field">
<input type="text" class="input" placeholder="another default input field">
```
```html
<input type="text" class="input h-width-full" placeholder="full-width input field">
<input type="text" class="input h-width-full h-border-all" placeholder="full-width bordered input field">
<input type="text" class="input h-width-full h-weight-bold" placeholder="full-width bold input field">
<input type="text" class="input h-width-full h-weight-bold h-border-pill input--filled" placeholder="full-width bold rounded filled input field">
<input type="text" class="input h-weight-bold h-border-pill h-border-all" placeholder="bold rounded bordered input field">
<input type="text" class="input h-border-pill input--filled" placeholder="rounded filled input field">
```
### Textarea
```html
<textarea class="input" placeholder="this is a textarea">
<textarea class="input h-width-full" placeholder="this is another textarea but longer">
```
**Tip: You can apply all the classes on a textarea applied on input field.**

### Radio Buttons
```html
<label class="label">Radio button
    <input type="radio" name="radio">
    <span class="radio"></span>
</label>
<label class="label">another radio button
    <input type="radio" name="radio">
    <span class="radio"></span>
</label>
<label class="label">disabled radio button
    <input type="radio" name="radio" disabled>
    <span class="radio"></span>
</label>
```
### Checkboxes
```html
<label class="label">A checkbox
        <input type="checkbox">
        <span class="checkbox"></span>
    </label>
    <label class="label">Another checkbox but checked
        <input type="checkbox" checked>
        <span class="checkbox"></span>
</label>
<label class="label">Disabled checkbox
        <input type="checkbox" disabled>
        <span class="checkbox"></span>
</label>
```
### Select
```html
<select class="input h-weight-bold">
    <option>option one</option>
    <option>option two</option>
    <option>option three</option>
    <option>option four</option>
</select>

<select class="input h-weight-bold h-width-full">
    <option>option one</option>
    <option>option two</option>
    <option>option three<option>
    <option>option four</option>
</select>
```
more components coming soon...

# Bugs and feature requests

Have a bug or a feature request? Please first read the [issue guidelines](https://github.com/zeva-ui/zeva/wiki/Contributing-Guidelines#using-the-issue-tracker) and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/zeva-ui/zeva/issues/new).

# Contributing

Please read through our [contributing guidelines](https://github.com/zeva-ui/zeva/wiki/Contributing-Guidelines). Included are directions for opening issues, coding standards, and notes on development.

All HTML and CSS should conform to the [Code Guide](https://github.com/mdo/code-guide), maintained by [Mark Otto](https://github.com/mdo).

Editor preferences are available in the [editor config](https://github.com/zeva-ui/zeva/blob/master/.editorconfig) for easy use in common text editors. Read more and download plugins at <https://editorconfig.org/>.


# Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/zeva-ui/zeva/tags). 

# Core Team

| **imfunny** | **jlammer** | **Kvanrooyen** |
| :---: |:---:| :---:|
| [![imfunny](https://avatars0.githubusercontent.com/u/36105478?v=3&s=70)](https://github.com/imfunniee) | [![jlammer](https://avatars0.githubusercontent.com/u/35262827?v=3&s=70)](https://github.com/JLammeer) | [![Kvanrooyen](https://avatars1.githubusercontent.com/u/17731202?v=3&s=70)](https://github.com/Kvanrooyen)  |


# Thanks

* A special thanks for [Billie Thompson](https://gist.github.com/PurpleBooth), for providing a [`README.md` template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2);
* Repository management inspired by the good ol' boy [Bootstrap](https://github.com/twbs/bootstrap).
