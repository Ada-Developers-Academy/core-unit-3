# Units

<iframe src="https://adaacademy.hosted.panopto.com/Panopto/Pages/Embed.aspx?pid=35fdc75a-22ba-4fd4-9abf-ad2d0149ad4d&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

## Introduction

Our site may be viewed on a wide range of devices, from mobile phones to 50" smart TVs. Creating appropriate measurements is one way to ensure that our websites will be usable on many different devices.

## Format

This lesson is an introduction and reference guide to some units of measurement in CSS. For more reference material, we recommend starting with [the MDN docs on CSS values and units](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Values_and_Units).

### Absolute Measurements

One way to specify measurements is by using the screen pixels. This is done by adding `px` to the end of the value.  In CSS a 'pixel' is about the minimum size a single dot that can be seen with the human eye comfortably.  In practice a pixel is _approximately_ 1/96th of an inch or 0.22 mm.

### Relative Measurements

#### Percentages

Percentages can be used in measurements that will be a percentage relative to another value. This is done by adding `%` to the end of the value.

What `100%` means depends on the given HTML and context.  For example the width and height are used to scale content relative to an element's container.

#### `em` or `rem`

`em` and `rem` are relative measurements based on the height of a font.

One `em` unit (`1em`) is equivalent to the size of the font in the element.

One `rem` unit (`1em`) is equivalent to the size of the font defined in the root element of the DOM, meaning the `html` element.

#### `vw` and `vh`

The _viewport_ is the area of screen that is displaying the web page. It's the literal area of a web page visible at a given moment, which excludes overflowing sections of the HTML that are "off-screen."

This is distinct but similar to the device screen or browser window, as both affect the viewport.

One `vw` (`1vw`) is equal to 1% of the viewport width, and `100vw` is 100% of the viewport width.

`vh` is relative to the viewport's height. `1vh` is 1% of the viewport height, and `100vh` is 100%.
