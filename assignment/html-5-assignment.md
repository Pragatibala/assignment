# Q.1 : What are the new tags added in HTML5?

## ans:

These new elements add advanced functional features, improvised page layouts, and other improvements. The commonly used new HTML5 tags are `<figure>, <article>, <header>, <aside>,<audio>,<aside>,<main>,<footer>, <nav>,<section>,<canvas>,<datalist>,<embed> and <video> `.

-figure : Adds self-contained content like illustrations, diagrams, or photos.
-article : Represents an independent article with content separate from the rest of the site.
-header : Contains information related to the title and heading of the content.
-aside : Describes content related to the main object of the web page but not its main intent.
-audio : Used to insert audio into an HTML webpage.
-footer : Defines a footer containing information like author details and copyright.
-nav : Declares the navigational section of HTML documents.
-section : Defines a section of documents, dividing content into sections and subsections.
-canvas : Used to draw graphics on a web page using JavaScript.
-datalist : Provides autocomplete feature for input elements.
-details : Used for initially hidden content that can be displayed interactively.
-embed : Embeds external multimedia content like audio or video into an HTML document.
-video : Embeds video content such as movie clips in a document.

# Q.2 : How to embed audio and video in a webpage?

## ans:

To embed audio in HTML, we use the <audio> tag. Before HTML5, audio cannot be added to web pages in the Internet Explorer era. To play audio, we used web plugins like Flash. After the release of HTML5, it is possible. This tag supports Chrome, Firefox, Safari, Opera, and Edge in three audio formats – MP3, WAV, OGG. Only Safari browser doesn’t support OGG audio format.
Syntax:

<audio>
<source src="file_name" type="audio_file_type">
</audio>

Create a new HTML file in the same directory, called index. html . Add <audio> and <video> elements to the page; make them display the default browser controls. Give both of them <source> elements so that browsers will find the audio format they support best and load it.

# Q.3 : Semantic element in HTML5?

## ans:

Semantic HTML elements are those that clearly describe their meaning in a machine-readable way. Elements such as <header> , <footer> and <article> are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them.

EXAMPLE:

<section>
<h1>semantic</h1>
<p>Semantic HTML elements are those that clearly describe their meaning in a machine-readable way.</p>
</section>

<article>
<h1>semantic</h1>
<p>Semantic HTML elements are those that clearly describe their meaning in a machine-readable way.</p>
</article>

<header>
for head content
  </header>

  <footer>
</footer>

# Q.4 : Canvas and SVG tags?

## ans:

Canvas tag
The HTML <canvas> element is used to draw graphics, on the fly, via JavaScript. The <canvas> element is only a container for graphics. You must use JavaScript to actually draw the graphics. Canvas has several methods for drawing paths, boxes, circles, text, and adding images.
SVG tag
The HTML SVG is an acronym which stands for Scalable Vector Graphics. HTML SVG is a modularized language which is used to describe graphics in XML. It describe two-dimensional vector and mixed vector/raster graphics in XML. It is a W3C recommendation. SVG images and their behaviors are defined in XML text files.
