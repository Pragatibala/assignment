# Q.1 What are the advantages of Bootstrap?

## ans:-

- Using Bootstrap for web design provides a responsive grid system that automatically adjusts the responsive layout based on the screen sizes, ensuring your website looks great on various devices.
  <br>
- Bootstrap offers a wide range of pre-built components, such as navigation bars, forms, buttons, and more, saving you time and effort in coding from scratch.
  <br>
- Bootstrap is easy to learn and implement, making it accessible to both beginners and experienced developers.
  <br>
- Bootstrap's extensive customization options also allow you to personalize the appearance and style of your website.
  <br>
- Being open source and free, Bootstrap provides a cost-effective solution for web designers.
  <br>

# Q.2 What is a Bootstrap Container, and how does it work?

## ans:-

Containers are the most basic layout element in Bootstrap and are required when using our default grid system. Containers are used to contain pad and sometimes center the content within them. While containers can be nested, most layout do not require a nested container.

# Q.3 What are the default Bootstrap text settings?

## ans:-

Bootstrap's global default font-size is 14px, with a line-height of 1.428. This is applied to the body element and all paragraphs.
Bootstrap 4 uses a default font-size of 16px, and its line-height is 1.5. The default font-family is "Helvetica Neue", Helvetica, Arial, sans-serif. In addition ,all p-tag element have margin-top : 0 and margin-bottom : 1rem(16px by default).

# Q.4 What do you know about the Bootstrap Grid System?

## ans:-

Bootstrap's grid system uses a series of container, rows, and columns to layout and align content. It's built with flex-box and is fully responsive. Bootstrap's grid includes five tiers of predefined classes for building complex responsive layouts. Customize the size of your columns on extra small, small, medium, large, or extra large devices however you see fit.

# Q.5 What is the difference between Bootstrap 4 and Bootstrap 5

## ans:-

- Bootstrap 4 grid system has 5 tiers (xs, sm, md, lg, xl) and Bootstrap 5 grid system has 6 tiers (xs, sm, md, lg, xl, xxl)
  <br>
- Bootstrap 4 has limited colors and Bootstrap 5 has extra colors added with the looks, A card improved color palette. there are various shades available to choose.
  <br>
- Bootstrap 4 has jquery and all related plugins and Bootstrap 5 is removed and switch to the vanilla js with some working plugins.
  <br>
- Bootstrap 4 supports both IE 10 and 11. and Bootstrap 5 doesn't support IE 10 and 11.
  <br>
- Bootstrap 4 has Radio buttons, checkboxes have different look in different OS and browsers. The form uses whatever default browsers provide. and Bootstrap 5 has The look of form elements will not change, on different OS or browser. The forms can be customized and form controls can be added, they would not depend on browser.
  <br>
- We cannot modify utilities in Bootstrap 4 and Bootstrap 5 gave freedom to modify and also create our own utility.

# Q.6 What is a Button Group, and what is the class for a basic Button Group?

## ans:-

“Button Groups” in Bootstrap is a class of name “btn-group” which is used to create a series of buttons in groups (without spaces) vertically or horizontally.
Syntax: This is the basic syntax of the button group class where each button has its own class of “btn”.
Bootstrap has a base .btn class that sets up basic styles such as padding and content alignment. By default, .btn controls have a transparent border and background color, and lack any explicit focus and hover styles. Base class.
<br>
Example :

```
<button type="button" class="btn">Base class</button>

```

# Q.7 How can you use Bootstrap to make thumbnails?

## ans:-

Bootstrap has an easy way to do this with thumbnails. To create thumbnails using Bootstrap

- Add an `<a>` tag with the class of .thumbnail around an image.

- This adds four pixels of padding and a gray border.

- On hover, an animated glow outlines the image.

Example :

```
<div class="row">
  <div class="col-sm-6 col-md-3">
    <a href="#" class="thumbnail">
      <img
        src="https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=60&h=350&dpr=2"
      />
    </a>
  </div>

  <div class="col-sm-6 col-md-3">
    <a href="#" class="thumbnail">
      <img
        src="https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=60&h=350&dpr=2"
      />
    </a>
  </div>

  <div class="col-sm-6 col-md-3">
    <a href="#" class="thumbnail">
      <img
        src="https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=60&h=350&dpr=2"
      />
    </a>
  </div>

  <div class="col-sm-6 col-md-3">
    <a href="#" class="thumbnail">
      <img
        src="https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=60&h=350&dpr=2"
      />
    </a>
  </div>
</div>
```

# Q.8 In Bootstrap 4, what is flex-box?

## ans:-

Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flex-box utilities. For more complex implementations, custom CSS may be necessary.

Example :

```
<div class="d-flex p-3 bg-secondary text-white">
  <div class="p-2 bg-info">Flex item 1</div>
  <div class="p-2 bg-warning">Flex item 2</div>
  <div class="p-2 bg-primary">Flex item 3</div>
</div>
```

# Q.9 How can one create an alert in Bootstrap?

## ans:-

Bootstrap Alerts offer a simple method for crafting predefined messages, enhancing their appeal to users. They streamline message display, adding style for increased engagement and improved user experience by presenting important information effortlessly and appealingly.

Example :

```
<div class="alert alert-primary" role="alert">
  This is a primary alert—check it out!
</div>
```

# Q.10 What is a bootstrap card and how would you create one?

## ans:-

A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options. If you’re familiar with Bootstrap 3, cards replace our old panels, wells, and thumbnails. Similar functionality to those components is available as modifier classes for cards.

Example :

```
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
```
