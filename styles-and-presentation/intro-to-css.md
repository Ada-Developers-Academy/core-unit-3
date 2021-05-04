# Intro to CSS

## Learning Goals

- Identify parts of CSS Syntax
- Apply CSS styles to HTML
- Use selectors to target specific elements to add custom style

## Introduction

**CSS** stands for **Cascading Style Sheets**. It is the language for specifying how documents (such as HTML) are presented to users. We will use CSS to define styles for our documents, including the design, layout and variations in display for different devices and screen sizes.

### !callout-info

## Styling to CSS Mentality

As designers and developers, we usually think about our design by thinking, "I want this part of the website to look like this."

<br/>

CSS will force us to shift those thoughts into, "I want _these specific HTML elements_ to look like _this specific style_."

### !end-callout

## CSS Files

All CSS is defined as a series of CSS rule-sets in files with the `.css` extension.

We will keep our CSS files in the same project directory as our HTML files!

### !callout-info

## `style.css`

A great generic file name for CSS is `style.css`. We can change this filename to anything else if we feel like it, like `index.css` or `styles.css` or `my-cool-webpage.css`.

### !end-callout

## Syntax to Define a Rule-Set

**CSS rule-sets** are blocks of code that _select_ specific HTML elements, and contain _declarations_. **Declarations** are pairs of properties and values which describe how to style the selected HTML elements.

```css
selected-elements {
  property: value;
}
```

| <div style="min-width:200px;"> Piece of Code </div> | Notes                                                                                                                       |
| --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `selected-elements`                                 | **Replace this** with any _selector_. A **selector** is a code that describes which HTML elements this rule-set applies to. |
| `{`                                                 | CSS rule-sets begin with open curly braces                                                                                  |
| `property`                                          | **Replace this** with a CSS property that should be modified                                                                |
| `:`                                                 | Properties and values inside rule-sets are separated with a colon                                                           |
| `value`                                             | **Replace this** with a CSS value to assign to the CSS property                                                             |
| `;`                                                 | Every declaration ends with a semi-colon                                                                                    |
| `}`                                                 | CSS rule-sets end with ending curly braces                                                                                  |

CSS rule-sets can hold more than one declaration (property-value pair), too!

```css
selected-elements {
  height: 10px;
  width: 600px;
}
```

### Selectors

CSS rule-sets can apply to all elements of a specific type when we use _element selectors_.

Element selectors are always the name of the element itself.

| Example Selector | Selected Elements                                                                               |
| ---------------- | ----------------------------------------------------------------------------------------------- |
| `p`              | Selects all paragraph elements. A CSS rule-set with this selector will apply to all paragraphs. |
| `h1`             | Selects all h1 elements                                                                         |
| `li`             | Selects all list item elements                                                                  |

### Properties and Values

**Properties** are attributes that can be changed with CSS.

There are [many valid CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference)! Many CSS properties only apply to specific elements. It's best to look up the valid CSS properties for each HTML element while developing HTML.

| Example Property   | Notes                                                                         |
| ------------------ | ----------------------------------------------------------------------------- |
| `color`            | Specifies text color of the text in this element                              |
| `background-color` | Specifies background color of this element                                    |
| `text-align`       | Specifies the horizontal alignment of text in this element                    |
| `font-size`        | Specifies the size of the text in this element                                |
| `font-family`      | Specifies a list of one or more font family names of the text in this element |

Each property has a list of valid **values**. The syntax for how to declare them is different based on each property, too.

| Property      | Sample of expected values                                                                                                                                                            |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `color`       | A color defined by hexadecimal, rgb, hsl (hue, saturation, lightness), or a [pre-defined color keyword](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#color_keywords) |
| `text-align`  | `left`, `right`, `center`, `justify`                                                                                                                                                 |
| `font-size`   | `16px`, `2em`, `80%`, `large`, `larger`                                                                                                                                              |
| `font-family` | `serif`, `sans-serif`, `cursive`, `"Gill Sans"`                                                                                                                                      |

### !callout-info

## Whoa! Huge Variation of CSS Values

CSS values for properties can range anywhere from a color defined in hexadecimal, a size using the `px` unit, or way more! The **best** way to understand the valid CSS values for every property is to [look it up](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)! Constantly looking up things while working on CSS is expected!

### !end-callout

## Reading CSS Examples

Let's look at an example:

```css
h1 {
  color: orange;
  font-family: helvetica, sans-serif;
}

p {
  color: gray;
  text-align: justify;
}
```

<details>

<summary>
  What does the above CSS example do?
</summary>

1. The first rule-set selects all `h1` elements on the page. It says that their color (text color) should be orange. It says that their typeface is Helvetica, or a sans-serif typeface if Helvetica is not available. (Details for this are determined by the `font-family` property)

2. The second rule-set selects all `p` elements on the page. It says that their text color should be gray. It says that all the text inside these elements should be justify-aligned.

</details>

### Code Style

- Each **rule-set** is separated by a line break
- Each **declaration** is indented
- There is a space after the **selector** before the curly brace `{`
- Each closing curly brace `}` is on its own line

## Adding CSS to a Website

There are a few different ways to include CSS in your website. One is to put the rule-sets directly into your HTML, also known as _inline styles_. The best way is to reference external style sheet(s). We are only going to use external style sheets to maintain an organized code base.

When we introduce external style sheets into our project, we need to adjust our HTML files to load that CSS file.

In the `head` tag of our HTML document, use a [`link`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link) tag.

```html
<head>
  <meta charset="UTF-8" />
  <title>Some Title</title>
  <!-- Link to Style Sheet -->
  <link href="styles/style.css" rel="stylesheet" />
</head>
```

| <div style="min-width:200px;"> Piece of Code </div> | Notes                                                                                           |
| --------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `<link`                                             | This begins a [`link`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link) tag      |
| `href`                                              | This HTML element has an _attribute_ named `href`                                               |
| `=`                                                 | In HTML, we assign values to attributes using `=`                                               |
| `"styles/style.css"`                                | **Replace this** with the path to find the CSS file _relative to the location of the HTML file_ |
| `rel="stylesheet"`                                  | An attribute-value pair that states that this file is a stylesheet                              |

## "Debugging" CSS

After coming from programming that can throw runtime errors, CSS can be difficult as it never throws errors, even if there is a syntax error. Instead, the browser just won't do what we want it to do.

However, we can take these approaches to debug CSS:

1. Check syntax. Does each declaration end in `;`? Does each rule-set end in `}`?
1. Check our selectors. Does our selector match the HTML elements we're targeting?
1. Use Dev Tools to see what CSS declarations are applied to each HTML element

### !callout-info

## Exploring Styles

CSS has _a lot_ of properties, and even more values! It is not practical to memorize them all. Instead, looking up a kind of style you want to achieve will yield some code examples with properties and values to try. For example, if we need to learn how to make our text bigger, we could use a search engine to look up "css change font size."

### !end-callout
