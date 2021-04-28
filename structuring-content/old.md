# Sectioning Elements


## 📚 Learning Goals 📚
- Can organize content using semantic sectioning tags
- Know why we organize content with semantic sectioning tags

## What are Sectioning Elements
HTML has sectioning elements that allow you to organize your HTML document into logical topical sections.

The pattern of using HTML that describes its content or purpose are called *semantic HTML*. This is opposed to using HTML whose tags or organization do not reflect its content but reflect its presentation. Semantic HTML brings a big advantage for people and programs who need the structure to help them understand the page. These populations include people who use [screen readers](http://webaim.org/techniques/screenreader/) or bots who read through your website.


Below are tags that group elements together.

```html
  <body></body>

  <div></div>

  <section></section>

  <article></article>

  <nav></nav>

  <aside></aside>

  <header></header>

  <footer></footer>

  <main></main>
```
**Think, Pair, Share**
Take some time to research how to use each of the above tags. Then discuss with your neighbor(s). And then high five each other.

## Organize Content with Sectioning Elements
Sectioning elements wrap around the elements we have already been working with. Organizing elements into sectioning elements will also become useful as we start to style the layout of our webpages.

Here are a couple of diagrams of how these sectioning elements might be laid out on a webpage.   
![Sectioned Elements Diagram](imgs/section_elements.gif)
![Sectioned Elements Diagram](imgs/section_elements2.png)


## Element Relationships
When elements become nested inside of each other they start to form relationships.
- An element that is inside of another is a _child_ element
- The element wrapping a child is its _parent_
- Elements on the same level as each other are _sibling_ elements

A visual diagram of elements relationships to each other:
![Element Relationship Diagram](imgs/content-hierarchy-diagram.png)

The relationship tree above is modeled from the following code:
```html
<body>
  <header>
    <h1><a href="index.html">Meowspace</a></h1>
  </header>
  <article>
    <h2>You're Meowsome</h2>
    <p>
      Soft kitty warm kitty little ball of furr but hide when guests come over, for gnaw the corn cob purr for no reason. Lies down knock over christmas tree but kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff or massacre a bird in the living room and then look like the cutest and most innocent animal on the planet, and hide head under blanket so no one can see. Kitty power!
    </p>
  </article>
  <footer>
    <p>&copy; 2016</p>
  </footer>
</body>
```


### Draw a relationship tree for the HTML code below:
```html
  <body>

    <header>
      <h1>Meowspace</h1>
      <nav>
         <ul>
            <li><a href="#">Login</a></li>
            <li><a href="#">Signup</a></li>
         </ul>
      </nav>
    </header>
    <main>
      <section>
        <h2>Articles</h2>
        <article>
          <header>
            <h3>Everybody Wants to be a Cat</h3>
            <p>By: Tiger</p>
          </header>
          <p>
            Leave hair everywhere. Wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again poop in the plant pot all of a sudden cat goes crazy, so pee in the shoe. Cat is love, cat is life eat owner's food human is washing you why halp oh the horror flee scratch hiss bite or paw at your fat belly.
          </p>
          <p>
            This human feeds me, i should be a god love to play with owner's hair tie. Kitty power! see owner, run in terror all of a sudden cat goes crazy. Attack feet russian blue so intently sniff hand. Leave hair everywhere. Wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again poop in the plant pot. Destroy couch as revenge.
          </p>
        </article>
        <article>
          <header>
            <h3>Everybody Wants to be a Cat</h3>
            <p>By: Felix</p>
          </header>
          <p>
            Kitty power! see owner, run in terror all of a sudden cat goes crazy. Attack feet russian blue so intently sniff hand.
          </p>
          <p>
            Cat is love, cat is life eat owner's food human is washing you why halp oh the horror flee scratch hiss bite or paw at your fat belly.
          </p>
        </article>
      </section>
    </main>

    <footer>
      <ul>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Careers</a></li>
      </ul>
    </footer>

 </body>
```

## Vocab ✅
  - Semantic
  - Sectioning
  - Parent
  - Child
  - Sibling

### Additional Resources

- [Treehouse Blog Post](http://blog.teamtreehouse.com/use-html5-sectioning-elements) (freely available)
- [Element Relationships](http://www.littlewebhut.com/css/info_element_relationships/)
- [A Look Into Proper HTML5 Semantics](http://www.hongkiat.com/blog/html-5-semantics/)

# Semantics, Best Practices, and Common HTML Elements

## Learning Goals
- Understand the importance of semantic markup
  - Be able to categorize elements as semantic or non-semantic
  - Know the difference between HTML and HTML5
- Gain basic awareness about web accessibility
- Understand the difference between block-level and inline elements
- Learn basic best practices
  - Overall
  - For specific elements


### A Few Words on Web Accessibility
Web accessibility is quickly garnering awareness among developers, many of whom are hadn't realized the importance, scope, or sheer number of folks who need it. What this means is that many developers don't know how to implement techniques for accessibility well or quickly. This in turn means it's easy to get set aside to do later, and then set aside for financial and time reasons.

However. Approximately 20% of Americans have a disability that could affect their ability to access many websites, and an accessible site benefits everyone.

Accessibility encompasses, but is not limited to:
- Low sight, blind, and color blind people
- Deaf and hard of hearing people
- Users with impaired motor skills
- Users with cognitive delays

### Semantics

Semantics in HTML is the practice of using valid HTML to give meaning to the webpage.
Semantic code describes what type of content is on the page. For example:

```html
<h1>The Best Names for Cats</h1>

<ol>
  <li>Pickles</li>
  <li>Raquel Welch's Grape Jam</li>
  <li>Biscuitina Turner</li>
  <li>Grand Lord Snugglewumps</li>
  <li>Thunderpaw the Destroyer</li>
  <li>Impurrator Curiosa (shamelessly stolen from twitter)</li>
  <li>Kitty Purry</li>
</ol>
```

The `<h1>` describes that the text "The Best Names for Cats" is a heading for this page. This designates it as the most important overall piece of information on the page.

The `<ol>` and `<li>` tags create an _ordered list_. The tags define both the structure and relationship of the content. From the markup alone, we understand that _Grand Lord Snugglewumps_ is a better name for a cat than _Kitty Purry_. More importantly, that distinction can be communicated to all users--sighted, visually impaired, or robotic.

Semantics are like going to Ikea.

#### Question: Why should we care about semantic markup?
- *Accessibility*. Many low sight or blind users rely on a screen reader to read pages to them. These programs cannot interpret pages very well unless they are clearly organized and communicated. Semantic code is critical to accessibility.
- *Search Engine Optimization*. Search engines need to understand what your content is about in order to rank you properly on search engines. Semantic code improves your placement on search engines, as it is easier for the "search engine spiders" to understand.
- *Readability*. Your code will be easier to read by others and future you if you very explicit about the structure and intent of your content.

#### Nesting as Semantics

In the kitty names code example, you may notice that the list item elements are indented. This is called __nesting__, and it communicates that these elements belong to that ordered list. Or, in HTML parlance, the ordered list is the __parent element__ and the list items are its __children__.

Nesting is crucial in denoting the relationship between different parts of your content.

#### HTML5 vs. HTML
They're both HTML, but HTML5 is the latest version of it. There is a working group called w3c (stands for World Wide Web Consortium) which decides on the specifications for HTML and CSS - what elements are supported or deprecated, and what new elements to introduce.

HTML5 adds a number of semantic elements like `<nav>, <aside>, <article>, <footer>, <address>` and a number of elements to better handle multimedia content.


#### Block Level vs. Inline elements
Block-level elements occupy the entire space of its parent element (container), thereby creating a "block."

Inline elements occupy only the space bounded by the tags that define the inline element.

For example:
```html
<p style="background-color:red;">This paragraph is a block-level element; its background has been colored to display the paragraph's parent element. Also, you should never do inline styles like Utah is doing.</p>

<p>This <span style="background-color:red;">span</span> is an inline element. Note the background color only applies to the area contained in the `span`.</p>
```

<p style="background-color:red;">This paragraph is a block-level element; its background has been colored to display the paragraph's parent element.</p>

<p>This <span style="background-color:red;">span</span> is an inline element. Note the background color only applies to the area contained in the `span`.</p>


### Common Elements

#### Headings

Headings are block level elements that communicate the priority and page flow of your site. Headings should be used in order of importance (1-6) to create an accurate outline of your content.

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

There should only be one `<h1>` element, and it should be used for the primary heading on the page.

Don't use headings to just make the text bigger or bold. Use them to add meaning and structure to the page, as you would structure an outline of a paper.

```html
<h1>The Best Marvel Comics Characters</h1>
<h2>Jessica Jones</h2>
<h2>Black Widow</h2>
```

<h1>The Best Marvel Comics Characters</h1>
<h2>Jessica Jones</h2>
<h2>Black Widow</h2>


```html
<h1>The Best Marvel Comics Characters</h1>
<h2>Jessica Jones</h2>
<h3>Got her powers in a chemical spill</h3>
<h3>Doesn't wear fancy outfit</h3>
<h2>Black Widow</h2>
<h3>Trained as a super spy in Russia from a young age</h3>
<h3>No super powers, but she can punch and kick real good
<h4>In mid-air</h4>
<h4>On moving vehicles</h4>
<h3>No super powers
```

<h1>The Best Marvel Comics Characters</h1>
<h2>Jessica Jones</h2>
<h3>Got her powers in a chemical spill</h3>
<h3>Doesn't wear fancy outfit</h3>
<h2>Black Widow</h2>
<h3>Trained as a super spy in Russia from a young age</h3>
<h3>No super powers, but she can punch and kick real good
<h4>In mid-air</h4>
<h4>On moving vehicles</h4>
<h3>No super powers


#### Other Semantic Elements
- `<p>`: Block level paragraph element. Used for chunks of text, often following a header element.
- `<header>`: Used as an element to hold page header information (logo, navigation, heading)
- `<nav>`: Used as a container for navigational links
- `<article>`: Used to distinguish text as self-contained content on some topic. Think the body of a blog post.
- `<aside>`: Used for "side" content such as sidebars, notes, or inserts.
- `<section>`: Used to identify a thematic grouping of content, often including a heading. Also used for trolling Jeremy.
- `<footer>`: Identifies the content at the end of the page
- `<figure>`: Specifies self-contained content, like illustrations, diagrams, photos, code listings, etc.
- `<figcaption>`: Defines a caption for a `<figure>` element.

```html
<figure>
  <img src="nonexistent-img.jpg" alt="Utah is lazy sometimes">
  <figcaption>Fig1. - This is not a picture because Utah, but usually it would be.</figcaption>
</figure>
```

#### A Few Non-Semantic Elements


`div`, and `span` are purely for building the structure of the site, they don't have any semantic meaning. `div` tags are for content that really doesn't have a semantic counterpart. Avoid relying on divs. `span` tags are used to highlight/emphasize or otherwise identify small, inline pieces of content.
```html
<div>I'm a division</div>
<span>I'm a span!</span>
```

#### One Example of Semantic v. Non-Semantic Code


- `<b>`: Inline level element to make text bold.`</b>`
- `<i>`: Inline element to make text italic.`</i>`
- `<strong>`: Inline level element to imply that text is important.`</strong>`
- `<em>`: Inline level element to emphasize text.`</em>`


- <b> Inline level element to make text bold.</b>
- <i> Inline element to make text italic.</i>
- <strong> Inline level element to imply that text is important.</strong>
- <em> Inline level element to emphasize text.</em>

