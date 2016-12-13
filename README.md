# godlike.css
CSS for layout standardization and usability of web applications from [1000.tech](http://1000.tech). 
A more modern alternative to reset.css and normalize.css

<a href="https://github.com/1000tech/godlike.css">
<img
  src="http://1000.tech/img/pages/godlike.png" alt="godlike.css"
  width="120" height="120">
</a>

## What is godlike.css ?

* Preserves useful defaults, unlike many CSS resets.
* Normalizes styles for a wide range of elements.
* Corrects bugs and common browser inconsistencies.
* Improves usability with subtle modifications.
* Explains what code does using detailed comments.

## Install

##### NPM:

    $ npm i godlike.css

##### Bower:

    $ bower i godlike.css
    
##### CDN:

 https://cdnjs.com/libraries/godlike.css
    
##### Download:

 https://raw.githubusercontent.com/1000tech/godlike.css/master/godlike.css

## Usage

### NPM

PostCSS and [postcss-import](https://github.com/postcss/postcss-import):

```css
@import 'godlike.css/godlike.min.css';
```

### Bower

**HTML:**

```html
<link rel="stylesheet" href="bower_components/godlike.css/godlike.min.css">
```

**CSS:**

```css
@import '../bower_components/godlike.css/godlike.min.css';
```

**Sass, Less, Stylus:**

```css
@import '../bower_components/godlike.css/godlike';
```

## Demo
Used on [MobiDevices](https://mobidevices.ru)