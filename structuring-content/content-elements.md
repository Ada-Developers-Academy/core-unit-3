# Content Elements

<iframe src="https://adaacademy.hosted.panopto.com/Panopto/Pages/Embed.aspx?pid=7ee51f0d-1bc0-4cb7-ad19-ad3a01747596&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

## Introduction

HTML elements can usually be categorized in one of two ways:

- Content element, whose responsibility is to describe literal website content
- Sectioning element, whose responsibility is to contain and group other HTML elements together

Familiarizing ourselves with content elements can help us decide which HTML element is best suited for the content we want to show!

## Format

This lesson can serve as an introduction to common content elements, and as a reference.

However, there are dozens of content elements not mentioned in this document. [Here is a resource listing all valid HTML elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).

## Common HTML Elements

Here are examples of HTML elements that describe different types of website content:

| Tags                               | Name               | Notes                                                      |
| ---------------------------------- | ------------------ | ---------------------------------------------------------- |
| `<p>Content</p>`                   | Paragraph          |
| `<h1>Content</h1>`                 | Heading 1           | The most important heading on the page                      |
| `<h2>Content</h2>`                 | Heading 2           | The second-most important heading                           |
| `<h3>Content</h3>`                 | Heading 3           | The third-most important heading                            |
| `<h4>Content</h4>`                 | Heading 4           |
| `<a href="">Content</a>`           | Link (Anchor)      | Uses the `href` attribute to define the link's destination |
| `<blockquote>Content</blockquote>` | Blockquote         |
| `<code>Content</code>`             | Code               | Displays computer code, like Python or HTML!               |
| `<em>Content</em>`                 | Emphasized Content | Used to stress emphasis                                    |

## Lists

When our web content is a list, we can make ordered lists and unordered lists.

Both ordered and unordered lists require a sectioning element, and then content elements nested within it.

### Ordered Lists

Ordered lists contain list items where order matters given the content material. They're great for things like:

- directions
- steps
- ranked items, where the most important item is first

By default, browsers style the list items inside ordered lists with numbers.

```html
<ol>
  <li>Content</li>
  <li>Content</li>
  <li>Content</li>
</ol>
```

| Tags                            | Name         | Notes |
| ------------------------------- | ------------ | ----- |
| `<ol> List items here... </ol>` | Ordered List |
| `<li>Content</li>`              | List Item    |

### Unordered Lists

Unordered lists contain list items where order doesn't matter contextually. They're great for:

- describing equally important items
- listing examples in no specific order

By default, browsers style these list items with bullet points.

```html
<ul>
  <li>Content</li>
  <li>Content</li>
  <li>Content</li>
</ul>
```

| Tags                            | Name           | Notes |
| ------------------------------- | -------------- | ----- |
| `<ul> List items here... </ul>` | Unordered List |
| `<li>Content</li>`              | List Item      |

## Images

Images use two attributes: `alt` and `src`.

### Alt Text

Alt text is used in the following ways:

- When the image cannot load (such as being offline, or the image isn't found), alt text will display instead
- When a user uses a screen reader and is not looking at the image, alt text will be read to the user
- When a cursor hovers over an image for several seconds, a caption appears containing the alt text

### Source

The source of an image is a path to an image.

This might be an absolute path, where the image is hosted on a web server that we can access through the Internet. [https://placekitten.com/500/500](https://placekitten.com/500/500) is an example of an absolute path.

This source may also be a relative path, where the image is found relative to the current HTML file. This may require effort around image hosting, but allows us to include image files in our projects, which may be more reliable.
