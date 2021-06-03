# Intro to HTML

<iframe src="https://adaacademy.hosted.panopto.com/Panopto/Pages/Embed.aspx?pid=7ee51f0d-1bc0-4cb7-ad19-ad3a01747596&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

## Vocabulary and Synonyms

| Vocab         | Definition                                                                                          | Synonyms | How to Use in a Sentence                                                                                                                                                                             |
| ------------- | --------------------------------------------------------------------------------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HTML Element  | A unit of content on an HTML page. One element is represented as one node in the DOM.               | Element  | "When I want to add paragraph text into my website, I put each paragraph in a separate paragraph HTML element," "That `<section>` element contains three other HTML elements."                       |
| HTML Tag      | A piece of syntax that defines an HTML element. Most HTML elements have an opening and closing tag. | Tag      | "I forgot to put the closing tag to my `<ul>` element, so the list kept going and my site was broken."                                                                                               |
| Semantic HTML | The practice of intentionally using HTML tags that are descriptive to the content itself            | -        | "The `<section>` tag follows semantic HTML principles, because the tag describes the content. The `<div>` tag doesn't follow semantic HTML principles, because `div` does not describe the content." |
| Attributes    | Additional pieces of information attached to an HTML element. Comes in attribute-value pairs.       | Property | All `<img>` tags should have an `alt` attribute an a `src` attribute."                                                                                                                               |

## Introduction

In order to create a web app full of content, we'll need to write that content in HTML!

For each _document_ (web page), we will likely have an HTML file.

What goes inside the HTML files?

- HTML files will have _HTML elements_ that define the structure of the website content
- HTML elements typically (though not always) do one of the following:
  - Contain the details of a single piece of content
  - Contain other HTML elements to organize and group those elements

## HTML Files

Before we write HTML, let's get on the same page about the files we'll use!

We write HTML in files with a `.html` extension.

HTML files don't have a required or standard naming convention! This curriculum recommends using kebab-case.

### !callout-info

## `index.html`

The conventional file name for a website's main page is `index.html`!

### !end-callout

## Syntax to Define an Element

Elements are defined using **tags**.

To define an element, observe the following syntax:

<!-- prettier-ignore-start -->
```html
<example>Content Details</example>
```
<!-- prettier-ignore-end -->

| <div style="min-width:200px;"> Piece of Code </div> | Notes                                                                                                                                                |
| --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<example>`                                         | This is an _opening_ tag, which begins to define an HTML element of type `example`. This opening tag declares that this element is beginning.        |
| `Content Details`                                   | **Replace this** with text, other HTML elements, or some other form of content. Everything here is considered as part of the `example` HTML element. |
| `</example>`                                        | This is a _closing_ tag, which concludes the `example` HTML element. Anything after the closing tag is not part of this `example` element.           |

### Valid HTML Elements

By default, browsers can only successfully render elements that are [defined by W3C](https://www.w3.org/standards/).

Here are some example HTML elements and their tags that can be used to describe different content.

| Element    | Opening Tag | Closing Tag  | Description                                                       |
| ---------- | ----------- | ------------ | ----------------------------------------------------------------- |
| Paragraph  | `<p>`       | `</p>`       | Content is a paragraph of text.                                   |
| Link       | `<a>`       | `</a>`       | Content is the text of a link, such as "Click here to read more." |
| Section    | `<section>` | `</section>` | Content is usually other HTML elements.                           |
| Navigation | `<nav>`     | `</nav>`     | Content is usually other HTML elements relevant to navigation.    |
| Header 1   | `<h1>`      | `</h1>`      | Content is text that is the most important header on the page.    |

[Here is a list of all valid HTML Elements.](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

### !callout-info

## Self-Closing Tags

Some tags are "self-closing," and do not require a separate closing tag. For example, the image tag which displays images is self-closing: `<img />`. These tags are less common, and there isn't any harm from using a full closing tag (such as `<img></img>`). While doing research on different HTML tags, it will be wise to determine if it's self-closing or not!

### !end-callout

## Use Meaningful HTML Elements

What happens if we put a paragraph inside a `<nav>` tag? What happens if we put text inside a `<section>` tag?

Our browsers will still do their best to render the content. Browsers don't throw runtime errors, nor do they validate HTML for correct use or syntax.

However, we should be using the most appropriate HTML tags for each piece of content. Using appropriate HTML tags helps users, developers, and browsers navigate your website better.

The practice of intentionally using descriptive HTML tags is called **semantic HTML**.

## Attributes

HTML elements can have _attributes_. **Attributes** are additional pieces of information used to describe the element itself.

Attributes come in attribute-value pairs. Observe this example:

<!-- prettier-ignore-start -->
```html
<example attribute-1="string value" attribute-2="a different string value">Content Details<example>
```
<!-- prettier-ignore-end -->

| Attribute Name | Value                        |
| -------------- | ---------------------------- |
| `attribute-1`  | `"string value"`             |
| `attribute-2`  | `"a different string value"` |

- An element can have zero, one, or many attributes
- Multiple attributes are separated by a space

There are many attributes that exist. Many attributes are specific to certain HTML elements.

### Examples

The `<a>` tag (used for links) uses an attribute to determine the link destination.

<!-- prettier-ignore-start -->
```html
<a href="https://adadevelopersacademy.org/">Click here to visit Ada's website!</a>
```
<!-- prettier-ignore-end -->

| Attribute Name | Value                                 |
| -------------- | ------------------------------------- |
| `href`         | `"https://adadevelopersacademy.org/"` |

The `<img>` tag (used for images) uses attributes to determine the alternative text of the image and where the image resource is located.

<!-- prettier-ignore-start -->
```html
<img alt="Grey kitten with large blue eyes and sorrowful look" src="http://placekitten.com/200/300"/>
```
<!-- prettier-ignore-end -->

| Attribute Name | Value                                                   |
| -------------- | ------------------------------------------------------- |
| `alt`          | `"Grey kitten with large blue eyes and sorrowful look"` |
| `src`          | `"http://placekitten.com/200/300"`                      |

## Standard HTML Document Setup

In order to render our websites, browsers get our HTML, parse through it, and create the DOM from it.

As the browser parses through our HTML, it can get a lot of interesting information besides the web page content! It can get information like:

- What is the title of this website, that gets displayed at the top of the browser or in bookmarks?
- What character encoding should this web page use?
- What is the icon of this website that appears at the top of the browser?

Therefore, most web pages begin development with an HTML skeleton that looks like this:

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>The Title of This Website Shown in Browsers</title>
  </head>
  <body>
    Hello, HTML World! All HTML elements that have content and should be
    displayed to the user should go here, inside the body tag.
  </body>
</html>
```

We encourage using this skeleton to create standard web pages that our browser can render more easily.

### The `<html>` Tag

The `<html>` tag describes an HTML document! It is the opening tag for an HTML document, and all other HTML elements should be nested within it.

The `<html>` tag is _technically_ optional. If we didn't put the `<html>` tag in, our browsers would add the tag automatically.

Adding this tag helps us visualize the root node of the DOM.

### The `<head>` Tag

The `<head>` tag is a tag that holds all the metadata of that page.

We usually nest HTML elements in `<head>` that describe this metadata, including:

- `<meta>`
- `<title>`
- `<script>`

`<head>` tags may have few zero nested tags, or a lot, depending on the situation and context! Details on these tags is lower priority for this curriculum, so follow your curiosity!

### The `<body>` Tag

The HTML `<body>` element represents the content of an HTML document. There can be only one `<body>` element in a document.

As a general rule, we nest all website content within the `<body>` element.

Most of our HTML will be written here!

## Nesting Elements

We've seen the syntax for defining elements, and we've alluded to nesting elements. How do we write HTML with nested elements?

Here is an example of the syntax of nesting an `<h1>` element inside a `<nav>` element.

<!-- prettier-ignore-start -->
```html
<nav>
  <h1>Ada's Recipe Blog</h1>
</nav>
```
<!-- prettier-ignore-end -->

In this situation, the `<nav>` element contains the `<h1>` element. The `<nav>` element is a parent element.

The `<h1>` element is a child element to the `<nav>` element, because it's nested inside it!

The DOM would represent this HTML like this:

<!-- TODO -->

We can nest HTML elements several layers deep!

<!-- prettier-ignore-start -->
```html
<section>
  <nav>
    <h1>Ada's Recipe Blog</h1>
  </nav>
</section>
```
<!-- prettier-ignore-end -->

Here, the `<section>` element has one direct child element: `<nav>`. The `<nav>` element has one direct child itself: the `<h1>` element.

### Close Tags in Order

Valid HTML always closes tags in order. Our HTML will break if we forget to close our elements properly. For example, this code is not valid, and would eventually cause problems:

<!-- prettier-ignore-start -->
```html
<nav>
  <h1>Ada's Recipe Blog
</nav>
</h1>
```
<!-- prettier-ignore-end -->

### !callout-info

## Indentation Helps Readability

We can indent a level every time we have another layer of nested elements! Indenting our HTML consistently will:

- Help developers read and write it better
- Help visualize the DOM structure
- Remind us visually when to close a tag
- And way more benefits!

<br/>

As a side note: Some VS Code extensions will recommend not indenting the `<head>` and `<body>` tags. This is for the convenience of the developer and it's intentional!

### !end-callout

## Sibling Elements

Elements can nest multiple elements within itself, and have multiple children elements.

HTML elements who share a parent element are siblings. For example:

<!-- prettier-ignore-start -->
```html
<nav>
  <a href="https://adadevelopersacademy.org/">Visit Ada's Homepage</a>
</nav>
<section>
  <h1>Ada's Recipe Blog</h1>
  <p>
    Coffee, that, froth a wings dark whipped. Grounds, beans whipped, coffee carajillo french press so, half and half robusta siphon and robust.
  </p>
  <p>
    Decaffeinated, sweet, con panna lungo, instant siphon at ut espresso sweet trifecta doppio. Doppio crema, white trifecta redeye aroma single shot grounds saucer. 
  </p>
</section>
```
<!-- prettier-ignore-end -->

In this case:

- The `<h1>`, `<p>`, and second `<p>` elements are siblings. They share the parent element `<section>`.
- The `<nav>` and `<section>` elements are siblings, whose shared parent is the implied `<html>` element.

The DOM would likely represent this HTML like this:

<!-- TODO -->

## Comments in HTML

To comment within HTML, use `<!-- -->`.

```html
<!-- Your comment here -->
<h1>Ada's Recipe Blog</h1>
```

The browser will not render anything inside an HTML comment.

## "Debugging" HTML

Browsers and HTML documents have no way of raising errors.

Instead of raising errors, the browser will instead attempt to render everything. This usually leaves the web page looking broken, without many clues as to why.

Our best strategies for debugging HTML at this moment are:

- Check the nesting of tags, ensuring that there are appropriate opening and closing tags
- Check the spelling of tags
- Using Developer Tools and the "Elements" tab to inspect the rendered HTML
  - Compare the rendered HTML that the browser displays to your own HTML code

## Check for Understanding

<!-- Question 1 -->
<!-- prettier-ignore-start -->
### !challenge
* type: tasklist
* id: 17371044
* title: CSS Walk-through
##### !question

Check off all the topics that we've briefly touched on so far.

##### !end-question
##### !options

* Defining an HTML element
* Defining attributes for an HTML element
* A standard HTML document contains `<html>`, `<head>`, and `<body>` elements
* Nesting elements
* Sibling elements
* Comments in HTML
* "Debugging" HTML

##### !end-options
### !end-challenge
<!-- prettier-ignore-end -->

<!-- Question Takeaway -->
<!-- prettier-ignore-start -->
### !challenge
* type: paragraph
* id: 7875475a
* title: Intro to HTML
##### !question

What was your biggest takeaway from this lesson? Feel free to answer in 1-2 sentences, draw a picture and describe it, or write a poem, an analogy, or a story.

##### !end-question
##### !placeholder

My biggest takeaway from this lesson is...

##### !end-placeholder
### !end-challenge
<!-- prettier-ignore-end -->
