# godlike.css
CSS for layout standardization and usability of web applications from [1000.tech](http://1000.tech). 
A more modern alternative to reset.css and normalize.css

<a href="https://github.com/1000tech/godlike.css">
<img
  src="http://akimg2.ask.fm/assets2/101/782/341/888/normal/a54ede2d3ed968ea.png" alt="godlike.css"
  width="120" height="120">
</a>

## What is godlike.css ?

* Preserves useful defaults, unlike many CSS resets.
* Normalizes styles for a wide range of elements.
* Corrects bugs and common browser inconsistencies.
* Improves usability with subtle modifications.
* Explains what code does using detailed comments.

## Install

##### Bower:

    $ bower i godlike.css

##### NPM:

    $ npm i --save godlike.css
    
##### Download:

 https://github.com/1000tech/godlike.css/blob/master/godlike.css

## Usage

### Bower

##### HTML:

```html
<link rel="stylesheet" href="bower_components/godlike.css/godlike.css">
```

##### CSS:

```css
@import '../bower_components/godlike.css/godlike.css';
```

##### Sass, Less, Stylus:

```css
@import '../bower_components/godlike.css/godlike';
```

### NPM

PostCSS and [postcss-import](https://github.com/postcss/postcss-import):

```css
@import 'godlike.css/godlike.css';
```

## Demo
Used on [MobiDevices](http://mobidevices.ru)

## Copyright

Vadim Zaretskiy [1000.tech](http://1000.tech)

License: WTFPL