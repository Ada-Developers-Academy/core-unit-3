# Cascade & Inheritance

<iframe src="https://adaacademy.hosted.panopto.com/Panopto/Pages/Embed.aspx?pid=1ffa8c8f-6c15-45b4-b68d-ad2e003e2723&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

## Goals

- Describe how styles cascade based on nesting within the DOM
- Describe the specificity hierarchy of selectors

## Introduction

What happens when more than one CSS rule-set applies to an element? Observe the following HTML and CSS, and predict what the resulting webpage looks like.

```html
<article>
  <h2>
    <em>Why My Cats are the Most Charming</em>
    <span id="article-author" class="featured-author">by Alyx Navarro</span>
  </h2>
</article>
```

```css
article {
  border: 2px groove blue;
}

article h2 {
  font-size: 3rem;
}

span {
  font-size: 0.5rem;
}

#article-author {
  font-size: 1rem;
  color: red;
}

.featured-author {
  font-size: 2rem;
  color: orange;
}
```

What will the text `by Alyx Navarro` look like?

How does this get determined? Do styles override one another? Do styles get ignored? Which ones? When?

In CSS, the combination of **cascading**, **inheritance**, and **specificity** determines the _final_ answer of what styles get applied.

## Cascading

Other than being the C in the acronym CSS, the fact that style sheets are described as "cascading" is important! "Cascading" describes the way that styles are applied to the elements in a document. It's called the CSS cascade, because style declarations cascade down to elements from many origins.

This is especially important as our stylesheets become longer and more complex and split between multiple stylesheets.

The general rule is that **styles and rule-sets that are defined "later" in the cascade _override_ styles and rule-sets that are defined "earlier" in the cascade.**

## Sources of Cascading

There are three main sources of style information form a cascade. These are the following sources, ordered in the same order of "cascade":

1. The **browser's default styles** for the HTML elements.
2. The styles **linked** to the document, like the `style.css` file we've been working in so far. We have the most control here, so we will focus on this section the most. These styles can be specified in three places:
   - In an external file: our primary method of associating styles.
   - In a definition at the beginning of the document: we generally try not to do this.
   - On a specific element in the body of the document: we generally try not to do this.
3. Styles specified by a **user** who is reading the document.
   - This can come in a variety of ways, like browser extensions, or system-wide preferences on a user's machine or device.

### Observing Cascading

[Consider this example on Cascading in Codepen](https://codepen.io/adadev/pen/mdbKNPy?editors=1100).

Observe:

1. The `strong` elements are bolder than the rest of the text. This comes from the browser's default style for HTML.
1. Based on the CSS linked to this HTML, the `strong` elements are also red.

## Inherited Properties

[Continuing with the example above,](https://codepen.io/adadev/pen/mdbKNPy?editors=1100) why is the text "MOE" also in the font-face Helvetica?

The strong elements also **inherit** much of the `p` element's style, because they are its children. In the same way, the `p` element inherits much of the `body` element's (default) style.

Some styles applied on elements will also apply to their nested child elements. We say that nested elements **inherit** their parent's styles.

Not every property gets inherited. For example, border styles don't get inherited. To find out if a CSS property gets inherited, we'll need to check the CSS documentation for that property, and [read more on MDN on inheritance.](https://developer.mozilla.org/en-US/docs/Web/CSS/inheritance)

## Specificity

Multiple rules may have selectors that each match the same element. If a property is given in only one rule, there is no conflict and the property is set on the element.

If more than one rule applies to an element and sets the same property, then **CSS gives priority to the rule that has the more specific selector**.

Some selectors are more specific than others. For example, the class and ID selectors are more specific than simple HTML element selectors. When two rules select the same element and the properties contradict one another, the rule with the more specific selector takes precedence.

### Specificity Hierarchy

Every selector has its place in the specificity hierarchy. There are four distinct categories which define the specificity level of a given selector:

1. **Inline styles**. An inline style lives within the HTML document. It is attached directly to the element to be styled. We have seen that we generally do not do this. This has the highest specificity.
1. **IDs**. ID is a unique identifier for HTML elements, such as `#home-section`. This has the second highest specificity.
1. **Classes, attributes and pseudo-classes**. This group includes classes, attributes, and pseudo-classes such as `:hover`, `:focus` etc.
1. **Elements and pseudo-elements**. This includes selecting by HTML tag and pseudo-elements like `::before` and `::after`.

There _is_ a specificity calculator which evaluates the "points of specificity" given a set of selectors. The selectors with the higher number of specificity wins over others. In practicality, it is less valuable to remember the actual point values. Instead, it's more valuable to focus our knowledge on remembering the general order of specificity. However, the specificity point system is good knowledge to reference and practice while we grow that skill.

## Continue Learning

Understanding CSS selector's specificity can be one of the most difficult parts of utilizing CSS. It is something that will take practice! Fortunately for us, there are great articles that break down this complex topic, such as Smashing Magazine's [_CSS Specificity: Things You Should Know_](https://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/) Article.

## Check for Understanding

<!-- Question Takeaway -->
<!-- prettier-ignore-start -->
### !challenge
* type: paragraph
* id: c2ba24f4
* title: Cascade & Inheritance
##### !question

What was your biggest takeaway from this lesson? Feel free to answer in 1-2 sentences, draw a picture and describe it, or write a poem, an analogy, or a story.

##### !end-question
##### !placeholder

My biggest takeaway from this lesson is...

##### !end-placeholder
### !end-challenge
<!-- prettier-ignore-end -->
