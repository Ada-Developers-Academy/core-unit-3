# Sectioning Elements

## Introduction

HTML elements can usually be categorized in one of two ways:

- Content element, whose responsibility is to describe literal website content
- Sectioning element, whose responsibility is to contain and group other HTML elements

When we become familiar with different sectioning elements, we'll be able to make better choices when grouping different pieces of content together.

## Format

This lesson can serve as an introduction to common sectioning elements, and as a reference.

However, there are dozens of sectioning elements not mentioned in this document. [Here is a resource listing all valid HTML elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).

### Common Sectioning Elements

Here are examples of HTML elements that will describe sectioning/organizing/grouping website content:

| Tags                                  | Name             | Notes                                                                                                  |
| ------------------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------ |
| `<section>Content Elements</section>` | Section          | Describes a distinct section of content                                                                |
| `<header>Content Elements</header>`   | Header           | Contains introductory content, such as content with headers, titles, author names, etc.                |
| `<nav>Content Elements</nav>`         | Nav (Navigation) | Provides navigation links to other documents. Usually contains menus, tables of contents, and indexes. |
| `<footer>Content Elements</footer>`   | Footer           | Contains information about the author of the section, copyright data, or links to related documents.   |

## The `div` Tag

| Tags                          | Name |
| ----------------------------- | ---- |
| `<div>Content Elements</div>` | Div  |

In early web development history, there were limited numbers of sectioning elements. The `<div>` tag was used as a generic sectioning element.

Typically, the `<div>` tag itself isn't descriptive about the content, and therefore doesn't follow semantic HTML principles. When possible, we should prefer other HTML tags compared to `<div>`.

The `<div>` tag is frequently used all over the Internet, such as in tutorials or web development guides, so your mileage may vary!

## Tips

There aren't widely accepted guidelines about how to group elements together, because each website and its content is so unique.

Some tips for using sectioning elements are:

- Group elements that shouldn't be separated from each other
- Tailor your HTML based on the content
- Experiment!
