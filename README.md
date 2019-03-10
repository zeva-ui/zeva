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

# Table of contents

- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [Styling Guide](#styling-guide)
- [Versioning](#versioning)
- [Core Team](#core-team)
- [Thanks](#thanks)

# Getting Started

You have the following options to get zeva:

1. Download a zip file, or clone it from [here](https://github.com/zeva-ui/zeva.git);
2. Use one of our two CDN links:
    - [Zeva's regular CSS file](https://cdn.jsdelivr.net/gh/zeva-ui/zeva/dist/css/index.css) 
    - [Zeva's minified CSS file](https://cdn.jsdelivr.net/gh/zeva-ui/zeva/dist/css/index.min.css).

## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```text
zeva/
└── dist/
    └── css/
        ├── zeva-inverse.css
        ├── zeva-inverse.css.map
        ├── zeva-inverse.min.css
        ├── zeva-inverse.min.css.map
        ├── zeva.css
        ├── zeva.css.map
        ├── zeva.min.css
        └── zeva.min.css.map
```

## CDN Usage:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/zeva-ui/zeva/dist/css/index.css">

<!-- Or you could try to use the minified version -->

<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/zeva-ui/zeva/dist/css/index.min.css">
```

## Zip Usage: CSS files

1. Unzip the file wherever you want;
2. Go to `dist/css/`;
2. Import/Copy either the regular or minified CSS file.

```html
<link rel="stylesheet" href="./dist/css/zeva.css">

<!-- Or you could try to use the minified version -->

<link rel="stylesheet" href="./dist/css/zeva.min.css">
```


## Zip Usage: Sass files

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

# Bugs and feature requests

Have a bug or a feature request? Please first read the [issue guidelines](https://github.com/zeva-ui/zeva/wiki/Contributing-Guidelines#using-the-issue-tracker) and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/zeva-ui/zeva/issues/new).

# Contributing

Please read through our [contributing guidelines](https://github.com/zeva-ui/zeva/wiki/Contributing-Guidelines). Included are directions for opening issues, coding standards, and notes on development.

All HTML and CSS should conform to the [Code Guide](https://github.com/mdo/code-guide), maintained by [Mark Otto](https://github.com/mdo).

Editor preferences are available in the [editor config](https://github.com/zeva-ui/zeva/blob/master/.editorconfig) for easy use in common text editors. Read more and download plugins at <https://editorconfig.org/>.

# Styling Guide

## Basic stuff

```sass
$main-color:#fff;
$danger: rgb(236, 47, 79);
$font: 'Poppins', sans-serif;
$background:#000;
```

## Font size

```sass
$font-size: 1rem; /* normal font */
$font-size-small: 0.8rem; /* smaller font */
$font-size-big: 1.2rem;  /* bigger font */
```

## Basic Styling

```sass
yourcomponent {
    font-family:$font;
    background:$background;
    color:$main-color;
    padding:0px;
    margin:0px;
    border-radius: 50% !important; /* for rounded corners*/
    font-weight: bold; /* for bold text */
}
```

## Basic Styling for Input Tags

```sass
yourInputComponent {
    outline: none;
    padding: 14px 35px;
    margin:10px 15px;
}
```

# Community

Get updates on Zeva's development and chat with the project maintainers and community members.

[![Discord](https://img.shields.io/badge/chat-on%20discord-7289da.svg)](https://discord.gg/hgJ8RHu)

# Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/zeva-ui/zeva/tags). 

# Core Team

* **[imfunny](https://github.com/imfunniee)** - *founder*
* **[jlammer](https://github.com/JLammeer)** - *project developer*
* **[Kvanrooyen](https://github.com/Kvanrooyen)** - *project developer*

# Thanks

* A special thanks for [Billie Thompson](https://gist.github.com/PurpleBooth), for providing a [`README.md` template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2);
* Repository management inspired by the good ol' boy [Bootstrap](https://github.com/twbs/bootstrap).

# License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
