# Q.1 Are the HTML tags and elements the same thing?

## Ans:

HTML tags and elements are not same. HTML tags are used to hold the HTML element. HTML element holds the content. HTML attributes are used to describe the characteristic of an HTML element in detail. Whatever written within a HTML tag are HTML elements.

# Q.2 What are tags and attributes in HTML?

## Ans:

While the elements tell the browser what to display, the attributes define how they will behave. The tags mark the beginning and the end of an element. They may not be necessary for some elements, especially the closing tags. Equally important, the attributes are only within the opening tags.

# Q.3 What are void elements in HTML? With Example.

## Ans:

A void element is an element whose content model never allows it to have contents under any circumstances. Void elements can have attributes. The following is a complete list of the void elements in HTML : area, br , hr , img , input , link
Example:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nesciunt voluptate facilis illum <br/> tempore deleniti quod debitis perferendis amet sed cupiditate, quas saepe a libero natus<hr/> exercitationem sapiente minima!</p>
</body>
</html>
```

# Q.4 What are HTML Entities? With Example

## Ans:

HTML entities are the reserved characters that are used in the HTML document.
example:

```<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>&#164, &#169, &#8482</p>
</body>
</html>
```

# Q.5 What are different types of lists in HTML? With Example.

## Ans:

There are three different types of HTML lists:

##### 1. Ordered List or Numbered List (ol)

example:

```<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <ol>
      <li>apple</li>
      <li>mango</li>
      <li>banana</li>
    </ol>
  </body>
</html>

```

##### 2. Unordered List or Bulleted List (ul)

example:

```<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <ul>
      <li>apple</li>
      <li>mango</li>
      <li>banana</li>
    </ul>
  </body>
</html>
```

##### 3. Description List or Definition List (dl)

example:

```<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <dl>
      <dt>maths</dt>
      <dd>maths is the subject that, i like the most.</dd>
    </dl>
  </body>
</html>
```

# Q.6 What is the ‘class’ attribute in HTML? With Example.

## Ans:

The class attribute specifies one or more class names for an element. The class attribute is mostly used to point to a class in a style sheet. However, it can also be used by a JavaScript to make changes to HTML elements with a specified class.
Example:

```<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div class="parent">
      parent
      <div class="child">child</div>
    </div>
  </body>
</html>
```

# Q.7 What is the difference between the ‘id’ attribute and the ‘class’ attribute of HTML elements? With Example.

## Ans:

The basic difference between ID attribute and Class attribute is that the ID attribute is applied only to one element in a page, whereas the class attribute can be applied to several elements on a single page.
Example:

```<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      #head {
        color: blue;
      }
      .first {
        color: chartreuse;
      }
    </style>
  </head>
  <body>
    <div class="parent">
      <h1 class="first" id="head">I"M PRAGATI BALA</h1>
      <p class="first" id="data">
        Organized and dependable candidate at managing multiple priorities with
        a positive attitude. Willingness to take on added responsibilities to
        meet team goals.
      </p>
    </div>
  </body>
</html>
```

# Q.8 What are the various formatting tags in HTML?

## Ans:

HTML Formatting is a process that allows us to format text to increase its visual appeal. Various HTML tags can change how text appears on a web page and make the text attractive.
Bold text: b or strong
Italicized text: i or em
Underlined text: u
Strike-through text: del or s
Superscript and subscript text: sup or sub.

# Q.9 How is Cell Padding different from Cell Spacing? With Example.

## ans:

Cell padding is used to create a border around the content area of a web page, whereas cell spacing is used for positioning elements (such as images or text) within that content area. Cell padding can be set through CSS, while cell spacing can only be controlled using HTML5.
example:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Example</title>
  </head>
  <body>
    <h4>Using cellpadding</h4>
    <table border="1px" cellpadding="20px">
      <tr>
        <td>Monday</td>
        <td>Tuesday</td>
      </tr>
      <tr>
        <td>Wednesday</td>
        <td>Thursday</td>
      </tr>
    </table>
    <h4>Using cellspacing</h4>
    <table border="1px" cellspacing="10px">
      <tr>
        <td>Monday</td>
        <td>Tuesday</td>
      </tr>
      <tr>
        <td>Wednesday</td>
        <td>Thursday</td>
      </tr>
    </table>
  </body>
</html>
```

# Q.10 How can we club two or more rows or columns into a single row or column in an HTML table? With Example.

## ans:

You can merge two or more table cells in a column using the colspan attribute in a td HTML tag (table data). To merge two or more row cells, use the rowspan attribute.
example:

```<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <table border="1">
      <tr>
        <th rowspan="2">Home</th>
        <th colspan="2">about</th>
      </tr>
      <tr>
        <td>Help</td>
        <td>store</td>
      </tr>
    </table>
  </body>
</html>
```

# Q.11 What is the difference between a block-level element and an inline element?

## Ans:

#### Block-Level Element:

A Block-level element occupies the entire space of the container such as div and p in the example . both div and p start from a new line each time, forming a block-like structure.
Common block-level elements are `<div>,<p>,<article>,<section>,<figure>,<footer>` etc.

#### Inline Element:

Inline as the name says “included as a part of the main text and not as a separate section”. Inline elements occupy the space as needed within the space defined by the main element. Unlike block-level elements, they do not begin on new lines.
Some of the inline elements are `<a>,<span>,<img>,<code>,<cite>,<button>,<input>` etc.

# Q.12 How to create a Hyperlink in HTML? With Example.

## Ans:

To make a hyperlink in an HTML page, use the a and /a tags, which are the tags used to define the links. The a tag indicates where the hyperlink starts and the /a tag indicates where it ends. Whatever text gets added inside these tags, will work as a hyperlink. Add the URL for the link in the
example:

```<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <a href="https://www.google.com/">google</a>
  </body>
</html>
```

# Q.13 • What is the use of an iframe tag? With Example.

## Ans:

The most common use of an iframe is to load content from another site within the page. The child site can load its own content and cookies, so sites may allow it where they don't allow direct hotlinking content. Using an iframe is the accepted way to embed a YouTube video or Google Maps content.
Example:

```<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.679931494264!2d70.77238027347968!3d22.290111043268144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca248c77c099%3A0xdf5ac10af64ac8ee!2sTOPS%20Technologies!5e0!3m2!1sen!2sin!4v1707503311344!5m2!1sen!2sin"
    width="560"
    height="315"
    style="border: 0"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
  ></iframe>
  </body>
</html>
```

# Q.14 What is the use of a span tag? Explain with example?

## Ans:

In HTML, the span tag is a generic inline container element. You use this element to wrap sections of text for styling purposes or to add attributes to a section of text without creating a new line of content. It is similar — but not the same as — the div tag.
Example:

```<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      span {
        color: blueviolet;
      }
    </style>
  </head>
  <body>
    <p>
      Lorem ipsum
      <span> sit amet consectetur adipisicing elit. Amet,</span> voluptatem. Id
      mollitia facilis laborum magnam voluptatum at pariatur, facere iusto.
    </p>
  </body>
</html>
```

# Q.15 How to insert a picture into a background image of a web page? With Example.

## Ans:

We can use the background attribute in the body tag to set an image as the background of the webpage. We will need to specify the URL or the location of the image which we want to set to the background attribute of the body tag. If the background image is smaller than the element, the image will repeat itself, horizontally and vertically, until it reaches the end of the element.
Example:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body
    background="https://static-cse.canva.com/blob/1145215/1.magebyRodionKutsaevviaUnsplash.jpg"
  >
    <table border="1">
      <tr>
        <th rowspan="3">Day</th>
        <th colspan="3">schedul</th>
      </tr>
      <tr>
        <th colspan="2">schedul</th>
        <th rowspan="2">topic</th>
      </tr>
    </table>
  </body>
</html>
```

# Q.16 How are active links different from normal links?

## Ans:

Active links are typically links that are currently functional and lead to live web pages, while normal links can refer to any link, whether functional or broken. Active links are actively used and accessible, while normal links may or may not be functional at a given time.

# Q.17 What are the different tags to separate sections of text?

## Ans:

We separate a section of texts in HTML using the below tags:
br tag – It is used to separate the line of text. It breaks the current line and shifts the flow of the text to a new line.

p tag–This tag is used to write a paragraph of text
`<blockquote>` tag–This tag is used to define large quoted sections.

# Q.18 What is SVG?

## Ans:

SVG is Scalable Vector Graphics, SVG is used to define graphics for the Web.Scalable Vector Graphics is an XML-based vector image format for defining two-dimensional graphics, having support for interactivity and animation. The SVG specification is an open standard developed by the World Wide Web Consortium since 1999.
example:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <svg width="400" height="100">
      <rect
        width="400"
        height="100"
        style="fill: rgb(0, 0, 255); stroke-width: 10; stroke: rgb(0, 0, 0)"
      />
    </svg>
  </body>
</html>
```

# Q.19 What is difference between HTML and XHTML?

## Ans: HTML

(HypertextMarkup Language) and XHTML (ExtensibleHypertext Markup Language) are
both markup languages used for creating and displaying web pages. The main
difference between them is the syntax and structure; HTML is more lenient in its
syntax, while XHTML has a more strict syntax and follows XML rules.

# Q.20 What are logical and physical tags in HTML?

## Ans: Physical and Logical tags are used

in HTML for better visibility and understanding of the text by the user on the
web page. However, both tags differ from each other as suggested by their names.
In HTML the formatting tags are divided into two categories:

**Physical tag:**
These tags are used to provide the visual appearance to the text.
exaple:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    Lorem ipsum dolor, <b>sit amet consectetur</b>
    <big>adipisicing elit.</big> Ipsam nisi, cum facere,
    <i>voluptatum amet</i> dolores quo at optio pariatur itaque mollitia
    repudiandae <u>harum dolore id recusandae porro,</u> a labore perspiciatis.
  </body>
</html>
```

**Logical tag:**
These tags are used to add some logical or semantic value
to the text.
example:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <abbr title="HyperTextMarkupLanguage">HTML</abbr><br />
    <code
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis,
      mollitia?</code
    ><br />
    <blockquote>
      the price of discipline is always less than the pain of regret
    </blockquote>
  </body>
</html>
```
