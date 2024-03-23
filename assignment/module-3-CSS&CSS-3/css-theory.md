# Q.1: What are the benefits of using CSS?

## Ans:

CSS is Cascading Style Sheet, It is a language that is used to describe the style of a document. the benefits of using CSS is Separation of Content and Style. One of the most significant advantages of CSS is its ability to separate content from presentation.CSS is a design language that makes a website look more appealing than just plain or uninspiring pieces of text.

**1) Faster Page Speed**
More code means slower page speed. And CSS enables you to use less code. CSS allows you to use one CSS rule and apply it to all occurrences of a certain tag within an HTML document.

**2) Better User Experience**
CSS not only makes web pages easy on the eye, it also allows for user-friendly formatting. When buttons and text are in logical places and well organized, user experience improves

**3) Quicker Development Time**
With CSS, you can apply specific formatting rules and styles to multiple pages with one string of code. One cascading style sheet can be replicated across several website pages. If, for instance, you have product pages that should all have the same formatting, look, and feel, writing CSS rules for one page will suffice for all pages of that same type.

**4) Easy Formatting Changes**
If you need to change the format of a specific set of pages, it’s easy to do so with CSS. There’s no need to fix every individual page. Just edit the corresponding CSS stylesheet and you’ll see changes applied to all the pages that are using that style sheet.

**5) Compatibility Across Devices**
Responsive web design matters. In today’s day and age, web pages must be fully visible and easily navigable on all devices. Whether mobile or tablet, desktop, or even smart TV, CSS combines with HTML to make responsive design possible.

# Q.2: What are the disadvantages of CSS?

## Ans:

Some disadvantages of CSS, CSS 1 up to CSS3, result in creating of confusion among web browsers. with CSS, what works with one browser might not always work with another. The web developers need to test for compatibility, running the program across multiple browsers.There exists a scarcity of security.
After making the changes we need to confirm the compatibility if they appear. The similar change affects on all the browsers. The programming language world is complicated for non-developers and beginners. Different levels of CSS i.e. CSS, CSS 2, CSS 3 are often quite confusing. Browser compatibility (some styles sheet are supported and some are not). CSS works differently on different browsers. IE and Opera supports CSS as different logic. There might be cross-browser issues while using CSS. There are multiple levels which creates confusion for non-developers and beginners

# Q.3: What is the difference between CSS2 and CSS3?

## ans:

The biggest difference between CSS2 and CSS3 is that CSS3 has been split into different sections, called modules. Each of these modules is making its way through the W3C in various stages of the recommendation process
New features: CSS3 adds a number of new features to CSS2, including
CSS3
Flexbox: Flexbox is a layout module that makes it easier to create responsive layouts.
Grid: Grid is a layout module that provides more control over the layout of elements on a web page.
Animations: CSS3 adds support for animations, which can be used to create more dynamic web pages.
Transitions: CSS3 adds support for transitions, which can be used to create smooth transitions between states of an element.
Responsive design (media query) is supportable.
border-box property does support.
animation & transform property supported.
used google fonts & special fonts.
good collection colors, HSL, RGBA, HSLA & gradient colors.
pseudo element (::) & pseudo class (:) are working.
CSS2
Responsive design (media query) is not supportable.
border-box property doesn't support.
animation & transform property not supported.
used some selected fonts used.
set of standard color & used color schemes only.
pseudo element & pseudo class are not working.

# Q.4: Name a few CSS style components

## ans:

CSS consists of two components: Properties: These are human-readable identifiers that indicate which stylistic features you want to modify. For example, font-size , width , background-color . Values: Each property is assigned a value.
CSS style components used to a interactive web page design.
syntax: property-name: value;
example : color, background-color, background-image, font-size, font-family, border, border-radius...etc

p{
color: blue;
font-size: 16px;
padding: 10px 10px;
border: 1px solid black;
}

# Q.5: What do you understand by CSS opacity?

## ans:

The opacity CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparenc
Text Opacity value: 0.0 to 1.0 or 0% to 100%.
lower value is 0.0 or 0%
higher value is 1.0 or 100%
background color opacity value 0% to 100%
background color opacity down then text opacity also down.
background color opacity high then text opacity also high.
img {
opacity: 0.5; (50% opacity)
}
background: rgba(76, 175, 80, 0.3) (30% opacity)

# Q.6: How can the background color of an element be changed?

## ans:

To add background color in HTML, use the CSS background-color property. Set it to the color name or code you want and place it inside a style attribute. Then add this style attribute to an HTML element, like a table, heading, div, or span tag.
We can set background color by selecting the element by its class name of id name and then apply the background-color property on it to set the background color.
Syntax: background-color: color_name;
background-color: red;
3 types of color used in background-color: RGB, HSL, HSLA
RGB color used 3 colors (red, green, blue) value
background-color: rgb(163, 158, 158);
HSL color used (hue, saturation, lightness)
background-color:hsl(147, 50%, 47%);
HSLA color used (hue, saturation, lightness, alpha)
background-color:hsla(120,100%,25%,0.3);

# Q.7: How can image repetition of the backup be controlled?

## ans:

image repetition of the backup be controlled by using the background-repeat property that will help us to control the repetition of the image. The background-repeat property in CSS is used to repeat the background image both horizontally and vertically. It also decides whether the background image will be repeated or not.
background-repeat: repeat;
background-repeat: repeat-x;
background-repeat: repeat-y;
background-repeat property in CSS is used to not repeat the background image.
background-repeat: no-repeat;

# Q.8: What is the use of the background-position property?

## ans:

The background-position CSS property sets the initial position for each background image. The position is relative to the position layer set by background-origin
example: background-position: value;
value used in px, %
horizontal or vertical position also used.
top | bottom | left | right | center position mainly used.
background-position: top;
background-position: 20% 50%;
background-position: top center;
background-position: bottom 20px left 10px;

# Q.9: Which property controls the image scroll in the background?

## ans:

The background-attachment property sets whether a background image scrolls with the rest of the page, or is fixed.To keep your background fixed, scroll, or local in CSS, we have to use the background-attachment property. Background-attachment: This property is used in CSS to set a background image as fixed or scroll. The default value of this property is scroll.
example: background-attachment:scroll
background image's position is fixed within the viewport, or scrolls with its containing block.
The image will remain fixed in its position until the block scrolls.. and then when the block scrolls, the image will also move with it.

# Q.10: Why should background and color be used as separate properties?

## ans:

Why background and color are the separate properties if they should always be set together? There are two reasons behind this:
It enhances the legibility of style sheets. The background property is a complex property in CSS, and if it is combined with color, the complexity will further increase
background color property used to specify color of an element.
background-image property used to one or more images of an element.
gradient color value used in background-image property.
example:
background-color: red;

background-image: linear-gradient(45deg, red, orange);
background-image: url('image.png');

# Q.11: How to center block elements using CSS1?

## ans:

Center block elements using margin property: We need to specify the margin from left and right such that it looks centered. We do not need to do this manually, we have one property value “auto” which will automatically set the margin such that our block element is placed in the center.
margin value 'auto' then block elements are center.
Another way to <center> tag used to block element center.
now not working <center> tag because it's new version (CSS3) is available.

# Q.12: How to maintain the CSS specifications?

## ans:

The CSS specifications are maintained by the World Wide Web Consortium (W3C). Even though every browser supports CSS, there are many inconsistencies in the supported specification version. Some browsers even have their own implementation of the specification and have proprietary (vendor) prefixes.The developer's work is to write the code, the browser's work is to run the code. And the work of maintaining that browser is w3c.
The Specification defines how CSS properties should be implemented by browser vendors along with detailed algorithms, code samples and tabular information. The Specification also include: The syntax and data types of the language. Detailed explanation on CSS Selectors

# Q.13: What are the ways to integrate CSS as a web page?

## ans:

CSS may be added to HTML in three different ways. To style a single HTML element on the page, use Inline CSS in a style attribute. By adding CSS to the head section of our HTML document, we can embed an internal stylesheet. We can also connect to an external stylesheet that separates our CSS from our HTML.
CSS integrated in 3 ways :
Internal CSS: By adding CSS to the head section of our HTML document, we can embed an internal stylesheet,It is used any css style <style> </style> tag in <head> </head> part of an HTML file.
Inline CSS: To style a single HTML element on the page, use Inline CSS in a style attribute.It is used any css style in a single line in a <body> </body> part of an HTML file.
External CSS: We can also connect to an external stylesheet that separates our CSS from our HTML.It is used any css style then make some css file & attach it's css file link in <head> </head> part of an HTML file.

# Q.14: What is embedded style sheets?

## ans:

Embedded style means Internal style.
An embedded style sheet is declared within the <head> element of an HTML document. It applies to the whole document, rather than just one element. Each style declaration (or CSS rule) gets applied to everything in the document that matches that rule.
It is declared style in <head> </head> element of an HTML Document.
The benefit of embedded style sheets is that they load immediately with the page itself.
this style can be benefit from good download speed & it's performance.

# Q.15: What are the external style sheets?

## ans:

An external style sheet is a separate CSS file that can be accessed by creating a link within the head section of the webpage. Multiple webpages can use the same link to access the stylesheet. The link to an external style sheet is placed within the head section of the page. create separate css file & then create css file link attach in the head section of the HTML document.
Multiple web page design the same css file link access the stylesheet.. it is external style sheet benefit.
External files occupy less space and code runs faster.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>Team Flow</title>

    <link rel="stylesheet" href="Assignment.css">

</head>

# Q.16: What are the advantages and disadvantages of using external style sheets?

## ans:

External style sheet : create separate css file & then create css file link attach in the head section of the HTML document.
Advantages:
With the help of External Style Sheets, the styles of numerous documents can be organized from one single file.
In External Style Sheets, Classes can be made for use on numerous HTML element types in many forms of the site.
In complex contexts, Methods like selector and grouping can be implemented to apply styles.
Apply same style in multiple web pages (Global styling).
Less consuming Time & fast run program of web pages.
Responsive web page design for different devices.
Reduce risk of Inconsistency.
Disadvantages :
An extra download is essential to import style information for each file.
The execution of the file may be deferred till the external style sheet is loaded.
While implementing style sheets, we need to test Web pages with multiple browsers in order to check compatibility issues.
some times global styling used then override style in elements & tags of HTML.
same class or id used then also override stle is autometically apply that is the limited control.
Sometimes when we load a webpage, the html page comes but the style given to it doesn't come immediately...that is, external css takes time to load.

# Q.17: What is the meaning of the CSS selector?

## ans:

A CSS selector is the first part of a CSS Rule. It is a pattern of elements and other terms that tell the browser which HTML elements should be selected to have the CSS property values inside the rule applied to them.
Selector is used to style global, specific attribute, specific element & specific tag & particular any class or id.
many selectors are used like:
Element Type Selectors.
Descendant Selectors.
Class selectors.
Id Selectors.
Child Selectors.
Adjacent sibling selectors.
Pseudo Selectors.
Universal Selectors.

# Q.18: What are the media types allowed by CSS?

## ans:

The @media CSS at-rule can be used to apply part of a style sheet based on the result of one or more media queries.
@media used to responsive web page design for all device like laptop screen, tablet screen, mobile screen.
mainly 2,3 media types used in css
all (suitable for all device)
screen (for all device & color computer screen)
print (documents viewed on screen in print preview mode)
& other are tv, handheld, aural, braille, embossed, tty, projection.
mead types are case-sensitive.
example:

@media all { div{ background-color: lightblue; font-family: 'poppins', 'serif';
} p{ color: black; text-align: center; } }

# Q.19: What is the rule set?

## ans:

A rule set is a collection of one or many rules that are executed together as a single unit against a specific set of records (either from one source or a set of conjoined sources) and generate several levels of statistics. selectors and declaration block are together it's called css rule set.
selector are 2 types used: id selector (#) & class selector (.) multiple
property & it's values used are in a declaration block. syntax: selector{
declaration block ( property : value ); } .parent, .child{ background-color:
red; font-size: 16px; }
