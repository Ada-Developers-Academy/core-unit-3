# Browsers and Dev Tools

## Vocabulary and Synonyms

| Vocab     | Definition                              | Synonyms | How to Use in a Sentence                                                                                                                   |
| --------- | --------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Rendering | Displaying something visual to the user | Showing  | "How the Firefox browser renders that web page may be different compared to how Google Chrome renders it. That's why they look different." |

## The Browser Platform

The _browser_ is the platform that runs web apps in front of an end user.

When we develop the front-end layer for our web apps in code, the _browser_ is the platform that _renders_ it for the user. **Rendering** is the process of displaying it to the user.

As web developers, familiarity with the browser will help us understand its abilities and limitations. Understanding what the browser can and can't do will help us make usable, exciting, consistent web apps!

## Developing for Web

As web developers, we will write code for our browser to render or run.

There are three separate responsibilities to consider when making a website:

1. Content
1. Presentation
1. Behavior

### Content

The _content_ of a website is all of its text, paragraphs, links, sections, headers, images, videos, etc.

Imagine a recipe blog. The contents of a recipe blog include:

- The paragraphs of story before the recipe
- The list of ingredients
- The directions and steps to talk
- All images and photos related to the recipe
- Navigational links
- The logo of the recipe website and a link to go home
- The footer content that lists contact information about the author

### Presentation

The _presentation_ of a website is how the content looks on the page. This includes colors, fonts, layout, background images, and more.

In our fictional recipe blog, the presentation of the blog determines:

- The typeface, font size, and text color of the recipe
- If the list of ingredients is displayed vertically or horizontally
- The border and sizing of all images and photos
- If the navigational links are on the side of the website, on top, or on bottom
- If the logo changes colors when the cursor moves over it

#### Browser Default Styles

It's part of our job to decide how content is presented.

However, all browsers have _default styles_ which will affect our web app presentation. Over time, we'll become familiar with which styles are browser defaults.

### Behavior

The _behavior_ of a website is how the website acts, usually as a result of user interaction.

This includes what to do when forms are submitted, how to present and close any pop-up modals, moving or re-arranging content, changing presentation, and more.

It also includes making API calls!

Our fictional recipe blog might have the following behavior:

- Listing ingredients that are needed based on the user inputting what's in their fridge
- Scrolling to the top of the page slowly after the user clicks "Scroll to Top"
- Rearranging recipes so that favorite recipes are listed first

#### Possible Behaviors and the Web API

A web browser keeps track of many things beyond rendering our websites. Browsers know where the mouse position is, keep track of any [cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)

## Developer Tools

Modern browsers provide a set of tools called Developer Tools, or Dev Tools.

Dev tools are a set of web authoring and debugging tools. They can show us details as to how a specific website is _rendered_. With these tools, we'll be able to see the content and presentation of the site, and possibly the behavior.

### Accessing Dev Tools

When we want to inspect the details of a website, we can open our Dev Tools using any of the following methods:

- Right-click on a page and click on "Inspect" from the menu
- Use the keyboard shortcut `cmd + opt + i`
- Using the browser menu
  - In Mozilla Firefox, we use Tools > Browser Tools > Web Developer Tools
  - In Google Chrome, we use View > Developer > Developer Tools

![Elements Tab in Dev Tools](imgs/dev_tools_elements_tab.png)
To start, click on the _Elements_ tab. You should get something that looks like this:
![dev tools](imgs/dev_tools.png)

### Anatomy of the Dev Tools Window

| Tab Name    | Description                                                                         |
| ----------- | ----------------------------------------------------------------------------------- |
| Elements    | Contains details on the rendered HTML elements                                      |
| Console     | Has a JavaScript console that the current page has access to                        |
| Sources     | Contains details on static resources (HTML, CSS, and JS) loaded by the current page |
| Network     | Contains details on HTTP requests and responses that occur, in real-time            |
| Performance | Contains tools for recording and testing the performance of rendering               |
| Memory      | Contains details on memory usage and allocation, and tracking memory leaks          |
| Application | Contains details on things like local storage, cookies, cache, etc.                 |

When developing HTML and CSS, the most relevant tab is the Elements tab.
