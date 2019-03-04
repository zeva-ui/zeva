<p align="center">
  <img src="https://imfunniee.github.io/zeva/image/zeva.png" width="30%">
</p>

# zeva
Yet another minimalist UI framework

# Getting Started

Download the zip file, or clone it from 
```
https://github.com/imfunniee/zeva.git
```  

In your project link to the index.css or index.min.css file, or you can use the following link 
```
https://cdn.jsdelivr.net/gh/zeva-ui/zeva/dist/css/index.css
```
```
https://cdn.jsdelivr.net/gh/zeva-ui/zeva/dist/css/index.min.css
```

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

