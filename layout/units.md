# Units

<iframe src="https://adaacademy.hosted.panopto.com/Panopto/Pages/Embed.aspx?pid=35fdc75a-22ba-4fd4-9abf-ad2d0149ad4d&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

## Introduction

Our site may be viewed on a wide range of devices, from mobile phones to 50" smart TVs. Creating appropriate measurements is one way to ensure that our websites will be usable on many different devices.

## Format

This lesson is an introduction and reference guide to some units of measurement in CSS. For more reference material, we recommend starting with [the MDN docs on CSS values and units](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Values_and_Units).

### Absolute Measurements

One way to specify measurements is by using the screen pixels. This is done by adding `px` to the end of the value.  In CSS a 'pixel' is about the minimum size a single dot that can be seen with the human eye comfortably.  In practice a pixel is _approximately_ 1/96th of an inch or 0.22 mm.

There are several other absolute measurements&mdash;`pt`, `pc`, `in`&mdash;that are supported by CSS, but we won't discuss them here. Follow your curiosity and research more about these units if you wish!

### Relative Measurements

Relative measurements are based on the viewport or a parent element's values, which cascades down to its child elements. Below are a list of common units.

Again, these units are _relative_ to a parent element or a viewport size, so we'll use the example below to contextualize each unit!

```html
<html>  <!-- the root element -->
  <body>

    <style>
      html {
        font-size: 16px; <!-- default font size for most web browsers -->
      }
    </style>

    <header> <!-- parent element -->
      <h1>Hello world!</h1>
    </header>

  </body>
</html>
```

### Percentages

Percentages can be used in measurements that will be a percentage relative to another value. This is done by adding `%` to the end of the value of a CSS property.

What `110%` means depends on the given HTML and context.  If our `h1` tag above had the styling `font-size: 110%`, the font size would be 110% larger than its `parent element`.

### `em` or `rem`

`em` and `rem` are relative measurements based on the height of a font.

One `em` unit (`1em`) is equivalent to the size of the font in the parent element. If our `h1` tag above had the styling `font-size: 1.2em`, the font would be **1.2 times** the size of its `parent element`.

One `rem` unit (`1rem`) is equivalent to the size of the font defined in the root element of the DOM, meaning the `html` element. If our `h1` tag above had the styling `font-size: 2rem`, the font would be **twice** the size of its `root element`.

### `vw` and `vh`

The _viewport_ is the area of screen that is displaying the web page. It's the literal area of a web page visible at a given moment, which excludes overflowing sections of the HTML that are "off-screen."

This is distinct but similar to the device screen or browser window, as both affect the viewport.

One `vw` (`1vw`) is equal to 1% of the viewport width, and `100vw` is 100% of the viewport width. If our `h1` tag above had the styling `width: 25vw`, the _element_ would take up 25% of the viewport's width.

`vh` is relative to the viewport's height. One `1vh` (`1vh`) is equsl to 1% of the viewport height, and `100vh` is 100% of the viewport height. If our `h1` tag above had the styling `font-size: 100vh`, the _font size_ would take up the entire height of the viewport.

### Live Preview

Here is an [interactive example](https://codepen.io/adadev/pen/yLovVXz) using _Codepen_ to play around with! Try out different units and values to see what happens!