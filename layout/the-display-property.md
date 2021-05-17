# The Display Property

## Introduction

When we want to create a _layout_ for our site, we should write CSS, as CSS is responsible for the visual presentation of the site.

This lesson focuses on understanding the `display` property, which is a valid property for all HTML elements that would go inside a `<body>`.

The `display` property has the values `block`, `inline`, and `inline-block`. An introduction to these values will enable smoother learning for other display types.

## Display

The `display` property determines how an element _flows_ on a page. Browsers render HTML elements and position them, flowing from top-to-bottom and left-to-right.

The `display` property is set in CSS in the usual syntax:

```css
#any-element {
  display: block;
}

#another-element {
  display: inline;
}

#yet-another-element {
  display: inline-block;
}
```

Here's a description of three `display` values:

| Value          | Description                                                                                                                |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `block`        | Block-level elements start on a new line and take up the full width available (usually determined by the parent element)   |
| `inline`       | Inline elements _do not_ start on a new line. They only take up as much width as necessary to fit the content              |
| `inline-block` | Inline-block elements flow on the page like inline elements, and respect width and height adjustments like block elements. |

## Default Values of Display

Each HTML element has a default display value of block or inline. There are few exceptional elements with a default display value of inline-block.

#### Default Block Elements

Some examples of elements that are block-level elements by default:

- `<h1>` through `<h6>`
- `<p>`
- `<ul>`
- `<div>`

#### Default Inline Elements

Some examples on inline elements include:

- `<span>`
- `<a>`
- `<img>`
