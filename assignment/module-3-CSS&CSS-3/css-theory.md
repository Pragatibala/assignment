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

CSS2
Responsive design (media query) is not supportable.
border-box property doesn't support.
animation & transform property not supported.
used some selected fonts used.
set of standard color & used color schemes only.
pseudo element & pseudo class are not working.
CSS3
Responsive design (media query) is supportable.
border-box property does support.
animation & transform property supported.
used google fonts & special fonts.
good collection colors, HSL, RGBA, HSLA & gradient colors.
pseudo element (::) & pseudo class (:) are working.

# Q.4: Name a few CSS style components

## ans:

CSS style components used to a interactive web page design.
Css style components used property & it's value.
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

Opacity describe the Transparency of the Element.
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

Syntex : background-color: color_name;
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

background-repeat property that will help us to control the repetition of the image.
background-repeat property in CSS is used to repeat the background image both horizontally and vertically.
background-repeat: repeat;
background-repeat: repeat-x;
background-repeat: repeat-y;
background-repeat property in CSS is used to not repeat the background image.
background-repeat: no-repeat;

# Q.8: What is the use of the background-position property?

## ans:

The background-position CSS property sets the initial position for each background image.
multiple position used
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

background-attachment property controls the image scroll in the background.
example: background-attachment:scroll
background image's position is fixed within the viewport, or scrolls with its containing block.
The image will remain fixed in its position until the block scrolls.. and then when the block scrolls, the image will also move with it.

# Q.10: Why should background and color be used as separate properties?

## ans:

background color property used to specify color of an element.
background-image property used to one or more images of an element.
gradient color value used in background-image property.
example:
background-color: red;

background-image: linear-gradient(45deg, red, orange);
background-image: url('image.png');

# Q.11: How to center block elements using CSS1?

## ans:

CSS1 in margin property used to block element automatically center.
margin value 'auto' then block elements are center.
Another way to <center> tag used to block element center.
now not working <center> tag because it's new version (CSS3) is available.

# Q.12: How to maintain the CSS specifications?

## ans:

The CSS specifications are maintained by the World Wide Web Consortium (W3C) & HTTP/HTTPS.
The developer's work is to write the code, the browser's work is to run the code. And the work of maintaining that browser is w3c.

# Q.13: What are the ways to integrate CSS as a web page?

## ans:

CSS integrated in 3 ways :
Internal CSS
Inline CSS
External CSS
Internal CSS: It is used any css style <style> </style> tag in <head> </head> part of an HTML file.
Inline CSS: It is used any css style in a single line in a <body> </body> part of an HTML file.
External CSS: It is used any css style then make some css file & attach it's css file link in <head> </head> part of an HTML file.

# Q.14: What is embedded style sheets?

## ans:

Embedded style means Internal style.
It is declared style in <head> </head> element of an HTML Document.
The benefit of embedded style sheets is that they load immediately with the page itself.
this style can be benefit from good download speed & it's performance.

# Q.15: What are the external style sheets?

## ans:

create separate css file & then create css file link attach in the head section of the HTML document.
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
Apply same style in multiple web pages (Global styling).
Less consuming Time & fast run program of web pages.
Responsive web page design for different devices.
Reduce risk of Inconsistency.
Disadvantages :
some times global styling used then override style in elements & tags of HTML.
same class or id used then also override stle is autometically apply that is the limited control.
Sometimes when we load a webpage, the html page comes but the style given to it doesn't come immediately...that is, external css takes time to load.

# Q.17: What is the meaning of the CSS selector?

## ans:

Selector is used to style global, specific attribute, specific element & specific tag & particular any class or id.
many selectors are used like:
universal selector (\*)
descendant selector ( .parent .child )
combinator selector ( .parent.child )
group selector ( .parent, child )
adjacent sibling ( .parent + .child )
general sibling ( .parent ~ .child )
child selector ( .child )

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

##

ans: selectors and declaration block are together it's called css rule set.
selector are 2 types used: id selector (#) & class selector (.) multiple
property & it's values used are in a declaration block. syntax: selector{
declaration block ( property : value ); } .parent, .child{ background-color:
red; font-size: 16px; }
