# More Selectors

## Goals

- Become familiar with selecting by:
  - relationships
  - attribute
  - pseudo-class
  - pseudo-element
- Become familiar with creating rule-sets that use multiple selectors

## Selectors

So far we have been targeting specific HTML elements with:

- Tag Selectors (the name of the tag)
- ID Selectors (an octothorpe with the given ID name)
- Class Selectors (a period with given class name)

Over this lesson, we should also cover:

- Selecting based on relationship
- Writing CSS rule-sets that apply to multiple selectors
- Selecting by matching attribute-value pairs
- Selecting by pseudo-classes
- Selecting by pseudo-elements

## Selectors Based on Relationships

We can write CSS selectors that select elements based on their relationship to other elements in HTML.

For example, we can write a CSS selector that says, "Please select and apply these styles to every `li` element that is nested inside a `ul` element. These styles should _not_ be applied if the `li` element is _not_ inside of a `ul` element."

The syntax for writing this is:

```css
ul li {
  color: blue;
}
```

Here are common selectors based on relationships. In general, the element that is "targeted" is the one on the most right.

| Selector        | Selects                                                                                                 |
| --------------- | ------------------------------------------------------------------------------------------------------- |
| `A E`           | Any E element that is a descendant of an A element (that is: a child, or a child of a child, etc.)      |
| `A > E`         | Any E element that is a child (i.e. direct descendant) of an A element                                  |
| `E:first-child` | Any E element that is also the first child of its parent                                                |
| `B + E`         | Any E element that is also the next sibling of a B element (that is: the next child of the same parent) |

### !callout-info

## Relationships and the DOM

The relationships here are the same as the relationships in the DOM! An element who is a child or a child of a child of a node in the DOM is a descendant in HTML and CSS relationships. Two elements that are siblings in the DOM are regarded as siblings in CSS selectors.

### !end-callout

### Example on Descendant Selectors

Of these, the first (`A E`) is by far the most common.

Given this HTML and CSS, these styles will apply an orange highlight to any emphasized text (`<em>`) that appears inside a `h1` tag.

```html
<h1>The <em>Cat</em> in the <em>Hat</em></h1>

<p>By <em>Dr. Seuss</em></p>
```

```css
h1 em {
  background-color: orange;
}
```

`Cat` and `Hat` will be backed with orange, but `Dr. Seuss` will not.

#### Exercise

Given this HTML, write a CSS rule-set that will give an orange highlight to the ONLY text `Social media in 2019 is a garbage fire.` using only descendant selectors.

```html
<article>
  <h2><em>Into The Personal Website Verse Wide</em> by Matthias Ott</h2>

  <em><a href="twitter.com">Share on Twitter</a></em>

  <p>
    <em>Social media in 2019 is a garbage fire.</em> What started out as the
    most promising development in the history of the Web – the participation of
    users in the creation of content and online dialogue at scale – has turned
    into a swamp of sensation, lies, hate speech, harassment, and noise.
  </p>
</article>
```

<details>

<summary>Check your answer here</summary>

Your code should look like either of the following:

```css
article p em {
  background-color: orange;
}
```

```css
p em {
  background-color: orange;
}
```

If we apply knowledge about cascading, a future topic, we could probably be extra and do even more variations.

</details>

## Multiple Selectors

The same CSS rule-set can be applied to two different selectors by putting a comma in between selectors. Doing so can help keep our CSS stay DRY.

Examples:

```css
h1,
h2,
h3 {
  color: teal;
  font-family: helvetica;
}
```

_Any_ combination of selectors can be used! For example, to add an orange highlight to italic text inside a `h1`, all links, and anything with the `highlight` class:

```css
h1 em,
a,
.highlight {
  background-color: orange;
}
```

## Attribute Selectors

Class and ID are two examples of attribute selectors. They have their own unique selector syntax. Other attributes can be used as selectors using the syntax below.

There are many other attributes we haven't covered that can be used as selectors in our CSS, but for now we'll use one we are familiar with in the example below:

```html
<a href="http://www.github.com">Github</a>
```

```css
[href="http://www.github.com"]
{
  color: olive;
}
```

Another snazzy way of using this selector is with an asterisk before the equal sign. This selects any elements that have at least part of content in the quotes.

In this example, any a tag that has "github" somewhere in it's `href` will be modified by this rule-set

```css
[href*="github"] {
  color: teal;
}
```

Attribute selectors can get even more specific, so follow your curiosity!

## Pseudo-classes & Pseudo-elements

### Pseudo-classes

A CSS pseudo-class is a keyword added to selectors that specifies a special state of the element to be selected.

[MDN maintains an index of pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes).

A popular one is `:hover`. Test it out in [this Codepen](https://codepen.io/adadev/pen/rNBKRWj?editors=1100) to see how it works!

```css
h1:hover {
  color: teal;
}
```

### Pseudo-elements

Pseudo-elements allow you to style certain parts of a document. A few common pseudo-elements are `::after`, `::before` and `::first-letter`. [MDN also maintains an index of pseudo-elements](https://developer.mozilla.org/en-US/docs/Web/CSS/pseudo-elements).

- Note: Pseudo-elements use two colons, pseudo-classes use only one colon.

Try this out in [this Codepen:](https://codepen.io/adadev/pen/rNBKRWj?editors=1100)

```css
p::selection {
  color: yellow;
  background-color: black;
}
```

## Summary

In order for our CSS styles to apply accurately, we can utilize different forms of CSS selectors.

We can summarize some of our knowledge of CSS selectors:

- Use CSS selectors that select by element, class, and ID the most often
- Use CSS selectors that select by relationship, attributes, and pseudo-classes and pseudo-elements when appropriate
- Use multiple selectors for one rule-set when appropriate to help keep our CSS DRY

### Additional Resources

- [MDN CSS Introduction Selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Selectors)
- [MDN Selectors](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/Selectors) _(more in depth)_
- [Smashing Magazine's Ultimate Guide to CSS Pseudo-Classes And Pseudo-Elements](https://www.smashingmagazine.com/2016/05/an-ultimate-guide-to-css-pseudo-classes-and-pseudo-elements/)
