# Classes and IDs

<iframe src="https://adaacademy.hosted.panopto.com/Panopto/Pages/Embed.aspx?pid=35fcdb29-0312-418e-8af1-ad2d003d9395&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

## Learning Goals

- Compare ID and Class

## Introduction

Liberty is a web developer who is creating a blog for her writing. She wrote CSS to select HTML elements and apply a style to them, and has declared all of her paragraphs to be a pleasant blue.

```css
p {
  color: cornflowerblue;
}
```

However, for her introductory paragraph, she wants the text to be a powerful and bold dark blue.

```css
p {
  color: midnightblue;
  font-weight: bold;
}
```

However, if she writes two different CSS rule-sets that select the same HTML elements, only one color will be applied.

Liberty needs CSS selectors that are more specific than the HTML element name.

## Reviewing HTML Attributes

We learned that HTML elements can have attributes, as long as we add them into their HTML tags. For example:

```html
<img
  alt="A mountain. The tops of the mountain are covered in clouds and fog."
  src="https://picsum.photos/300/?image=475"
/>
```

`<img>` elements use the `alt` and `src` attributes. However, a `<p>` element does not use the `alt` or `src` attribute—the browser doesn't know how to use those attributes by default.

However, two attributes that most HTML elements can use are the `class` and `id` tag.

## The `class` and `id` Attributes

In CSS, we can select HTML elements by the value of their `class` attributes or their `id` attributes.

Each section should cover the following:

1. How to define the attribute in HTML
1. How to use the attribute as CSS selectors

## Classes

Classes are ways to categorize multiple HTML elements that will share the same style.

If Liberty wants to give midnight blue text to her introduction paragraph, her page title, and her navigation links, she could group these HTML elements together by giving them all the same class.

### Assigning Classes to HTML Elements

We can give classes to an HTML element by assigning it to their `class` attribute:

```html
<h1 class="page-title">Hello World!</h1>
```

This specific `<h1>` element has a class named `page-title`.

### More Class Examples

```html
<h1 class="highlight">Hello World!</h1>
```

This `<h1>` element has a class named `highlight`.

```html
<h1 class="front-page">Hello World!</h1>
```

This `<h1>` element has a class named `front-page`.

### Assigning Multiple Classes

We can give an element multiple classes by space-separating them within the value string.

```html
<h1 class="page-title highlight front-page">Hello World!</h1>
```

This `<h1>` element has three classes: `page-title`, `highlight`, and `front-page`.

### Class Naming Recommendations

Naming conventions for classes vary wildly between different teams and projects.

Do we assign classes based on how the style looks, like `highlight`? Do we assign classes based on the function of the element, like `page-title`? Or possibly by location, like `front-page`?

All of these questions are valid, and unfortunately the best route to take is to experiment.

Some examples of class names to inspire are: `tag`, `comment`, `toolbar-button`, `warning-message`, `category`, or `email`.

### Selecting By Classes

We can create CSS rule-sets that select HTML elements by a class.

To select by class, we use a period (`.`) before the class name as the selector. For example:

```css
.page-title {
  color: midnight;
  font-size: 2.5rem;
}
```

This code selects _every_ element on the HTML page that has the _class_ `page-title`, and it gives it a text color of gray and a text size of 2.5rem.

### Multiple Rule-Sets for One Element

If an HTML element has multiple classes, different rule-sets that target those classes will both apply.

```html
<h1 class="page-title highlight">Hello World!</h1>
```

Because this `<h1>` element has two classes, `page-title` and `highlight`, both of these rule-sets will apply:

```css
.page-title {
  font-family: helvetica;
  font-size: 5rem;
}

.highlight {
  background-color: yellow;
}
```

Our CSS stylesheets can have rule-sets that use class selectors and element selectors side-by-side:

```css
.highlight {
  background-color: yellow;
}

p {
  color: cornflowerblue;
}
```

### !callout-warning

## Pro Tip: Mind Your Selector Syntax

The `.` is a visually small character, and sometimes we can forget it in our class selectors.

<details style="max-width: 700px; margin: auto;">
  <summary>
    What are the consequences of forgetting the <code>.</code> in our selector?
  </summary>

Read this CSS and determine what this does:

```css
page-title {
  color: gray;
  font-size: 2.5rem;
}
```

It selects very element on the HTML page that **is a `<page-title>` element**, and it gives it a text color of gray and a text size of 2.5rem. However, there is no valid `<page-title>` element... so it's likely that this CSS rule-set doesn't change our web page appearance at all.

</details>

### !end-callout

## IDs

IDs are ways to identify _one_ specific HTML element. To preserver uniqueness, valid HTML follows these rules:

- Each element can have only one ID
- Each page can have only one element with that ID

If Liberty has an introductory paragraph, and she knows there will be only one, she can assign an ID. It will be invalid HTML and CSS if she gives the same ID to another element.

### Assigning IDS to HTML Elements

We assign an ID to an HTML element by giving a value to an `id` attribute.

```html
<h1 id="home-page-title">Hello World!</h1>
```

This `<h1>` element has an ID named `"home-page-title"`.

### !callout-info

## ID Naming Recommendations

Just like classes, naming conventions for IDs will depend on team, project, and individual choices.

### !end-callout

### Selecting By ID

To select HTML elements by ID in CSS, the selector is an octothorpe (`#`) before the ID name. Here's an example:

```css
#home-page-title {
  color: teal;
  font-size: 4rem;
}
```

This CSS rule-set selects the one element that has the `id` of the value `home-page-title`.

## Combining Classes and IDs

A single HTML element can have multiple classes and an ID.

At the same time, CSS rule-sets can possibly target the same HTML element using element, class, and ID selectors!

In these situations, all rule-sets apply to the element.

<!-- Question 1 -->
<!-- prettier-ignore-start -->
### !challenge
* type: checkbox
* id: 9a5da088
* title: Classes and IDs
##### !question

Consider this single HTML element:

```html
<p id="feature-text" class="recipe-description special-promotion">
  Lorem ipsum ...
</p>
```

Which of the following CSS rule-sets apply to this HTML element?

```css
/* This selects all paragraph tags */
p {
  text-align: center;
}

/* This selects all elements with the id feature-text */
#feature-text {
  font-size: 2rem;
}

/* This selects all elements with the class recipe-description */
.recipe-description {
  color: #708090;
}

/* This selects all elements with the class special-promotion */
.special-promotion {
  background-color: #f6f293;
}
```

##### !end-question
##### !options

* The rule-set that selects `p` elements
* The rule-set that selects elements with the ID `feature-text`
* The rule-set that selects elements with the class `feature-text`
* The rule-set that selects elements with the ID `recipe-description`
* The rule-set that selects elements with the class `recipe-description`
* The rule-set that selects elements with the ID `special-promotion`
* The rule-set that selects elements with the class `special-promotion`

##### !end-options
##### !answer

* The rule-set that selects `p` elements
* The rule-set that selects elements with the ID `feature-text`
* The rule-set that selects elements with the class `recipe-description`
* The rule-set that selects elements with the class `special-promotion`

##### !end-answer
### !end-challenge
<!-- prettier-ignore-end -->

## Check for Understanding

<!-- Question 2 -->
<!-- prettier-ignore-start -->
### !challenge
* type: short-answer
* id: 0a1963d8
* title: Classes and IDs
##### !question

Read the CSS below and create the _opening_ HTML tag that will have all styles applied to it.

- List HTML attributes in alphabetical order
- If there are multiple classes, list the classes in alphabetical order

```css
a {
  text-decoration: none;
}

.email-link {
  color: orange;
}

#admin-email {
  transform: rotate(20deg);
}

.info {
  font-family: serif;
}
```

##### !end-question
##### !answer

/(<a class="email-link info" id="admin-email">)|(<a id="admin-email" class="email-link info">)/

##### !end-answer
### !end-challenge
<!-- prettier-ignore-end -->
