# Q.1 What is jQuery?

## ans:

JQuery is a javascript library. the purpose of jquery is to make easier to use javascript on your website. jquery takes a lot of common taskes that require many lines of JS code to accomplish and wraps them into methods that you can call with a single line od code. JQ also simplifies a lot of the complicated things from JS like AJAX calls and DOM manipulation.

# Q.2 How to Apply CSS Using JQuery, How to Add Class and Remove Class in Jquery, JQuery Animation?

## ans:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <style>
    * {
      padding: 0px;
      margin: 0px;
      box-sizing: border-box;
    }
    .box {
      display: flex;
      gap: 20px;
      margin: 30px auto;
      width: 700px;
      height: 200px;
      border: 1px solid;
      background-color: aliceblue;
      position: relative;
    }
    .box > div {
      margin: 10px;
      width: 100px;
      height: 100px;
      background-color: aquamarine;
      border: 1px solid black;
      padding: 5px;
      position: relative;
    }
    button {
      position: absolute;
      background-color: cadetblue;
      border-radius: 5px;
    }
    #bntcss {
      left: 30px;
      top: 150px;
    }
    #bntadd {
      left: 170px;
      top: 150px;
    }
    #bntremove {
      left: 310px;
      top: 150px;
    }
    #bntani {
      left: 450px;
      top: 150px;
    }
    .add,
    .remove {
      font-size: smaller;
      color: brown;
    }
  </style>
  <body>
    <div class="box">
      <div class="css"></div>
      <button id="bntcss">click here</button>
      <div class="add">Added new class</div>
      <button id="bntadd">click here</button>
      <div class="remove">Remove class that you added earlier</div>
      <button id="bntremove">click here</button>
      <div class="animate"></div>
      <button id="bntani">click here</button>
    </div>
    <script
      src="https://code.jquery.com/jquery-3.7.1.min.js"
      integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
      crossorigin="anonymous"
    ></script>
    <script>
      $("#bntcss").click(() => {
        $(".css").css({
          backgroundColor: "chartreuse",
          height: "130px",
          border: "3px solid black",
        });
      });
      $("#bntadd").click(() => {
        let className = prompt("Enter class name for Add");
        $(".add").addClass(className);
      });
      $("#bntremove").click(() => {
        let className = prompt("Enter class name for Remove");
        $(".remove").removeClass(className);
      });
      $("#bntani").click(() => {
        $(".animate").animate({
          width: "130px",
          height: "100px",
          left: "80px",
        });
      });
    </script>
  </body>
</html>
```

# Q.3 How to create slider with animation?

## ans:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
    />
    <style>
      * {
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
      }
      body {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
      }
      .container {
        background-color: dimgray;
        width: 100%;
        height: 1000px;
      }
      .slider {
        margin-top: 30px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 300px;
        width: 100%;
        background-color: rgb(199, 191, 181);
        position: absolute;
        top: 20px;
        left: 1px;
      }
      .slider > img {
        width: 160px;
        height: 160px;
        position: absolute;
        object-fit: cover;
        border: 1px solid black;
      }
      .box1 {
        top: 20px;
        left: 150px;
      }
      .box2 {
        top: 20px;
        left: 350px;
      }
      .box3 {
        top: 20px;
        left: 550px;
      }
      .box4 {
        top: 20px;
        left: 750px;
      }
      .box5 {
        top: 20px;
        left: 950px;
      }
      .wrapper {
        display: flex;
      }
      .left,
      .right {
        position: absolute;
        top: 300px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: rgb(129, 154, 155);
        color: black;
        text-align: center;
        padding-top: 5px;
      }
      .left {
        left: 45%;
      }
      .right {
        left: 50%;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="slider">
        <img
          class="box box1"
          src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <img
          class="box box2"
          src="https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <img
          class="box box3"
          src="https://images.pexels.com/photos/939331/pexels-photo-939331.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <img
          class="box box4"
          src="https://images.pexels.com/photos/163185/old-retro-antique-vintage-163185.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <img
          class="box box5"
          src="https://images.pexels.com/photos/2983401/pexels-photo-2983401.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
      </div>
      <div class="wrapper">
        <div class="left"><i class="fa-solid fa-angle-left"></i></div>
        <div class="right"><i class="fa-solid fa-angle-right"></i></div>
      </div>
    </div>
    <script
      src="https://code.jquery.com/jquery-3.7.1.min.js"
      integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
      crossorigin="anonymous"
    ></script>
    <script>
      $(".container").animate(
        {
          height: "1px",
          width: "1px",
        },
        1500
      );
      let sliderIndex = 1;
      $(".left").click((event) => {
        event.preventDefault();
        sliderIndex++;
        if (sliderIndex <= 4) {
          slideLeft();
        }
      });
      $(".right").click((event) => {
        event.preventDefault();
        if (sliderIndex >= 1) {
          sliderIndex--;
          slideRight();
        }
      });
      const boxList = document.getElementsByClassName("box");
      function slideLeft() {
        for (let i = 0; i < boxList.length; i++) {
          boxList[i].style.left = `${boxList[i].offsetLeft - 100}px`;
          boxList[i].style.transform = "scale(1)";
          boxList[sliderIndex].style.transform = "scale(1.3)";
        }
      }
      function slideRight() {
        for (let i = 0; i < boxList.length; i++) {
          boxList[i].style.left = `${boxList[i].offsetLeft + 100}px`;
          boxList[i].style.transform = "scale(1)";
          boxList[sliderIndex].style.transform = "scale(1.3)";
        }
      }
    </script>
  </body>
</html>
```

# Q.4 Event bubbling tickling example

## ans:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      * {
        box-sizing: border-box;
        padding: 0px;
        margin: 0px;
      }
      .container {
        width: 500px;
        height: 500px;
        background-color: rgb(246, 220, 187);
        margin: 20px auto;
      }
      .wrapper {
        width: 400px;
        height: 400px;
        background-color: rgb(46, 219, 161);
        margin: 25px auto;
      }
      .box {
        width: 300px;
        height: 300px;
        background-color: coral;
        margin: 25px auto;
      }
      img {
        width: 200px;
        height: 200px;
        object-fit: cover;
        margin: 25px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="wrapper">
        <div class="box">
          <div class="img">
            <img
              src="https://images.pexels.com/photos/7420955/pexels-photo-7420955.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <script
      src="https://code.jquery.com/jquery-3.7.1.min.js"
      integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
      crossorigin="anonymous"
    ></script>
    <script>
      const imgSub = document.getElementsByClassName("img")[0];
      const boxChild = document.getElementsByClassName("box")[0];
      const wrapParent = document.getElementsByClassName("wrapper")[0];
      const containerV = document.getElementsByClassName("container")[0];
      containerV.addEventListener("click", () => {
        containerV.style.background = "yellowgreen";
        wrapParent.style.background = "crimson";
        boxChild.style.background = "aqua";
        // imgSub.style.background = "aqua";
      });
      $("img").click(() => {
        $(".img").parents(
          $(".box").css("backgroundColor", "red"),
          $(".wrapper").css(
            "backgroundColor",
            "blue",
            $(".container").css("backgroundColor", "green"),
            $("body").css("backgroundColor", "violet")
          )
        );
      });
    </script>
  </body>
</html>
```
