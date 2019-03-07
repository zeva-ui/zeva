<p align="center">
  <img src="https://imfunniee.github.io/zeva/image/zeva.png" width="30%">
</p>

# zeva
Yet another minimalist UI framework

# Getting Started

You have the following options to get zeva:
* Download the zip file, or clone it from [here](https://github.com/zeva-ui/zeva.git)
* You can link directly with the following links
    - [https://cdn.jsdelivr.net/gh/zeva-ui/zeva/dist/css/zeva.css](https://cdn.jsdelivr.net/gh/zeva-ui/zeva/dist/css/zeva.css) 
    - [https://cdn.jsdelivr.net/gh/zeva-ui/zeva/dist/css/zeva.min.css](https://cdn.jsdelivr.net/gh/zeva-ui/zeva/dist/css/zeva.min.css)
* For light version
    - [https://cdn.jsdelivr.net/gh/zeva-ui/zeva/dist/css/zeva-inverse.css](https://cdn.jsdelivr.net/gh/zeva-ui/zeva/dist/css/zeva-inverse.css) 
    - [https://cdn.jsdelivr.net/gh/zeva-ui/zeva/dist/css/zeva-inverse.min.css](https://cdn.jsdelivr.net/gh/zeva-ui/zeva/dist/css/zeva-inverse.min.css)

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

