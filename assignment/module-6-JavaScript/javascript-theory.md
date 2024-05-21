# Q.1: What is JavaScript. How to use it?

## ans:

JavaScript was created to make the web more dynamic. It is a scripting language made to run inside a host environment like a web browser! It provides programmatic control over the objects in that environment. For example, when you click a button and you want something about the webpage to change, you will use JavaScript.

# Q.2: How many type of Variable in JavaScript?

## ans:

Variable is a container for a value like a number we might use in a sum or a string that we might use as part of a sentence. for example

```javascript
// 1.Var :
var jm;
jm = 7;
console.log("jm:", jm);
var jm;
jm = 10;
console.log('jm:'jm);

// 2.Let :
let suga;
suga = 13;
console.log("suga:", suga);
suga = 14;
console.log('suga:'suga);

// 3.Const :
const rm = 20;
console.log('rm: 'rm);
```

# Q.3 : Define a Data Types in js?

## ans :

Data types in javascript define the data type that a variable can store. Javascript includes primitive and non-primitive data types. The primitive data types in javascript include string, number, boolean, undefined, null, and symbol. The non-primitive data type includes the object.
example:

```html
<body>
  <script>
    //string:
    let str = "hello world";
    console.log(str);

    //number:
    let a = 10;
    console.log(a);

    //boolean:
    let b = 10;
    let c = 20;
    console.log(b == c);
  </script>
</body>
```

# Q.4 : Write a mul Function Which will Work Properly When invoked With Following Syntax.

## ans :

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      function mul(a, b) {
        console.log(a * b);
      }
      mul(12, 34);
    </script>
  </body>
</html>
```

# Q.5 : What the deference between undefined and undeclare in JavaScript?

## ans :

Undeclared variables are those that have not been declared or defined in the current scope, while undefined variables are those that have been declared but not given a value.

Undefined : In JavaScript, undefined is a primitive value that is automatically assigned to variables that have been declared but have not been assigned a value.
var b; (variable declaration using var)
but in this case we didn't defined the value.

Undeclared: It occurs when we try to access any variable that is not initialized or declared earlier using the var or const keyword. If we use 'typeof' operator to get the value of an undeclared variable, we will face the runtime error with the return value as “undefined”.

# Q.6 : Using console.log() print out the following statement: The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another. Using console.log() print out the following quote by Mother Teresa:

## ans :

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      let quote1 =
        "There is no exercise better for the heart than reaching down and lifting people up. By John Holmes teaches us to help one another.";
      var quote2 =
        "If you judge people, you have no time to love them. By Mother Teresa";
      console.log(quote1);
      console.log(quote2);
    </script>
  </body>
</html>
```

# Q.7 : Check if typeof '10' is exactly equal to 10. If not make it exactly equal?

## ans :

first check the '10' that it is string or number than check the 10.
convert the string into number than make it exactly equal.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      a = "10";
      b = 10;
      console.log(a);
      console.log(b);
      console.log(typeof a);
      console.log(typeof b);
      a = Number(a);
      console.log(typeof a);
      console.log(a === b);
    </script>
  </body>
</html>
```

# Q.8: Write a JavaScript Program to find the area of a triangle?

## ans:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div class="triangle">
      <input type="text" id="b" placeholder="enter base of triangle" />
      <input type="text" id="h" placeholder="enter height of triangle" />
    </div>
    <button id="bnt">click for result</button>
    <p id="ans">Answer :</p>
    <script>
      document.getElementById("bnt").addEventListener("click", () => {
        let b = document.getElementById("b").value;
        let h = document.getElementById("h").value;
        let area = (b * h) / 2;
        document.getElementById("ans").innerHTML = "Answer: " + area;
      });
    </script>
  </body>
</html>
```

# Q.9: Write a JavaScript program to calculate days left until next Christmas?

## ans:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      let crrntDay = new Date();
      let christmasYr = crrntDay.getFullYear();
      if (crrntDay.getMonth() == 11 && crrntDay.getDate() > 25) {
        christmasYr = christmasYr + 1;
      }
      let christmasDate = new Date(christmasYr, 11, 25);
      let dayMilliseconds = 1000 * 60 * 60 * 24;
      let remainingDays = Math.ceil(
        (christmasDate.getTime() - crrntDay.getTime()) / dayMilliseconds
      );
      document.write(
        "There are " + remainingDays + " days remaining until Christmas."
      );
    </script>
  </body>
</html>
```

# Q.10: What is Condition Statement?

## ans:

Conditional statements control behavior in JavaScript and determine whether or not pieces of code can run. There are multiple different types of conditionals in JavaScript including: “If” statements: where if a condition is true it is used to specify execution for a block of code.
IF/ELSE:

```html
<body>
  <script>
    let a = 5;
    if ((a = 10)) {
      console.log("a is equal to 10");
    } else {
      console.log("a is not equal to 10");
    }
  </script>
</body>
```

SWITCH :

```html
<body>
  <script>
    let a = parseInt(prompt("enter the number"));
    switch (a) {
      case 0:
        console.log("Sunday");
        break;
      case 1:
        console.log("Monday");
        break;
      case 2:
        console.log("Tuesday");
        break;
      case 3:
        console.log("Wednesday");
        break;
      case 4:
        console.log("Thursday");
        break;
      case 5:
        console.log("Friday");
        break;
      case 6:
        console.log("Saturday");
        break;
      default:
        console.log("enter numbers 0 to 6");
    }
  </script>
</body>
```

# Q.11: Find circumference circle formula : C = 4 \* a ?

## ans:

```html
<body>
  <div class="circle">
    <input type="text" id="a" placeholder="enter radius of circle" />
  </div>
  <button id="bnt">click for result</button>
  <p id="ans">Answer :</p>
  <script>
    document.getElementById("bnt").addEventListener("click", () => {
      let radius = document.getElementById("a").value;
      let pi = Math.PI;
      let c = 2 * pi * radius;
      console.log(c);
      document.getElementById("ans").innerHTML = "Answer : " + c;
    });
  </script>
</body>
```

# Q.12: WAP to convert years into days and days into years?

## ans:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      // years convert into days
      let yearCount = window.prompt("Enter the years");
      console.log(yearCount * 365);
      // days convert into years
      let dayCount = window.prompt("Enter the days");
      console.log(dayCount / 365);
    </script>
  </body>
</html>
```

# Q.13: Convert temperature Fahrenheit to Celsius? (Conditional logic Question)

## ans:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      let fahrenheit = window.prompt("Enter temperature in fahrenheit");
      let celsius = ((fahrenheit - 32) * 5) / 9;
      console.log(celsius);
    </script>
  </body>
</html>
```

# Q.14: Write a JavaScript exercise to get the extension of a filename.?

## ans:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      let strg = "filename.css";
      let dotIndex = strg.indexOf(".");
      console.log(strg.slice(dotIndex, strg.length));
    </script>
  </body>
</html>
```

# Q.15: What is the result of the expression (5 > 3 && 2 < 4)?

## ans:

AND(&&) gives true when all conditions will satisfies. In the expression (5 > 3 && 2 < 4) all are true.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      5 > 3 && console.log("3 is lessthan 5");
      2 < 4 && console.log("4 is greaterthan 2");
      console.log(5 > 3 && 2 < 4);
    </script>
  </body>
</html>
```

# Q.16: What is the result of the expression (true && 1 && "hello")?

## ans:

AND(&&) gives true when all conditions will satisfies. In the expression (true && 1 && "hello") it will print 'hello'. because true ,1 ,and hello all are true.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      console.log(true && 1 && "hello");
    </script>
  </body>
</html>
```

# Q.17: What is the result of the expression true && false || false && true?

## ans:

AND(&&) gives true when all conditions will satisfies.And OR (||) gives true when any condition will satisfies. In the expression (true && false) || (false && true) will give false because in first condition (true && false) give false and second condition (false && true) also give false , they are not satisfies.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      console.log(true && false);
      console.log(false && true);
      console.log((true && false) || (false && true));
    </script>
  </body>
</html>
```

# Q.18: What is a Loop and Switch Case in JavaScript define that ?

## ans :

LOOP : JavaScript loops are powerful tools for performing repetitive tasks efficiently. loops in javascript execute a block of code again and again while the condition is true. For example, suppose we want to print “Hello World” 5 times. This can be done using JS Loop easily.
there are many kind of loops in javascript:

while loop :

```html
<body>
  <script>
    let count = 0;
    while (count <= 5) {
      count++;
      console.log(count);
    }
  </script>
</body>
```

for loop :

```html
<body>
  <script>
    for (let count = 0; count <= 5; count++) {
      console.log(count);
    }
  </script>
</body>
```

do-while :

```html
<body>
  <script>
    let count = 0;
    do {
      console.log(count);
      count++;
    } while (count <= 5);
  </script>
</body>
```

SWITCH :
The switch statement executes a block of code depending on different cases. The switch statement is a part of JavaScript's "Conditional" Statements, which are used to perform different actions based on different conditions.

```html
<body>
  <script>
    let a = parseInt(prompt("enter the number"));
    switch (a) {
      case 0:
        console.log("Sunday");
        break;
      case 1:
        console.log("Monday");
        break;
      case 2:
        console.log("Tuesday");
        break;
      case 3:
        console.log("Wednesday");
        break;
      case 4:
        console.log("Thursday");
        break;
      case 5:
        console.log("Friday");
        break;
      case 6:
        console.log("Saturday");
        break;
      default:
        console.log("enter numbers 0 to 6");
    }
  </script>
</body>
```

# Q.19: What is the use of isNan function?

## ans:

NaN stands for "Not a Number" and is a value in JavaScript used to represent an undefined or unrepresentable value.
isNaN() function returns true if a number is Not-a-Number. and isNaN() function converts the value to a number before testing it.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      console.log(8 / "a");
      console.log(isNaN(8 / "a"));
    </script>
  </body>
</html>
```

# Q.20: What is the difference between && and || in JavaScript?

## ans :

The AND operator (&&) return TRUE when both operands are TRUE.If either operand is FALSE, it return FALSE.The OR operator (||) return TRUE when at least one operand is TRUE. if both operands are FALSE, it return FALSE.
EXAMPLE:
In the expression (true && false) || (false && true) will give FALSE because in first condition (true && false) give false and second condition (false && true) also give false , they are not satisfies.

# Q.21: What is the use of Void (0)?

## ans:

With void , it tells the browser not to return anything or return undefined. Another use case of links with the javascript:void(0) reference is that sometimes, a link may run some JavaScript code in the background, and navigating may be unnecessary.

```
console.log(void 0);
```

# Q.22: Check Number Is Positive or Negative in JavaScript?

## ans:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      let num = prompt();
      if (num > 0) {
        console.log("positive");
      } else if (num < 0) {
        console.log("negative");
      } else {
        console.log("error");
      }
    </script>
  </body>
</html>
```

# Q.23: Find the Character Is Vowel or Not ?

## ans:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      let chart = "i";
      switch (chart) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
        case "A":
        case "E":
        case "I":
        case "O":
        case "U":
          console.log("vowel");
          break;
        default:
          console.log("Consonant");
      }
    </script>
  </body>
</html>
```

# Q.24: Write to check whether a number is negative, positive or zero?

## ans:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      let num = prompt();
      if (num > 0) {
        console.log("positive");
      } else if (num < 0) {
        console.log("negative");
      } else {
        console.log("zero");
      }
    </script>
  </body>
</html>
```

# Q.25: Write to find number is even or odd using ternary operator in JS?

## ans:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      let num = prompt();
      num % 2 == 0 ? console.log("even") : console.log("odd");
    </script>
  </body>
</html>
```

# Q.26: Write find maximum number among 3 numbers using ternary operator in JS?

## ans:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      max = (n1, n2, n3) => {
        return n1 > n2 ? (n1 > n3 ? n1 : n3) : n2 > n3 ? n2 : n3;
      };
      console.log(max(45, 34, 21));
    </script>
  </body>
</html>
```

# Q.27: Write to find minimum number among 3 numbers using ternary operator in JS?

## ans:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      max = (n1, n2, n3) => {
        return n1 < n2 ? (n1 < n3 ? n1 : n3) : n2 < n3 ? n2 : n3;
      };
      console.log(max(14, 13, 10));
    </script>
  </body>
</html>
```

# Q.28 : Write to find the largest of three numbers in JS?

## ans:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      max = (n1, n2, n3) => {
        return n1 > n2 ? (n1 > n3 ? n1 : n3) : n2 > n3 ? n2 : n3;
      };
      console.log(max(451, 342, 213));
    </script>
  </body>
</html>
```

# Q.29 : Write to show

## i. Monday to Sunday using switch case in JS?

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      let day = 1;
      switch (day) {
        case 0:
          console.log("Sunday");
          break;
        case 1:
          console.log("Monday");
          break;
        case 2:
          console.log("Tuesday");
          break;
        case 3:
          console.log("Wednesday");
          break;
        case 4:
          console.log("Thursday");
          break;
        case 5:
          console.log("Friday");
          break;
        case 6:
          console.log("Saturday");
          break;
        default:
          console.log("Oops wrong day");
      }
    </script>
  </body>
</html>
```

## ii. Vowel or Consonant using switch case in JS?

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      let chart = "i";
      switch (chart) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
        case "A":
        case "E":
        case "I":
        case "O":
        case "U":
          console.log("vowel");
          break;
        default:
          console.log("Consonant");
      }
    </script>
  </body>
</html>
```

# (Conditional looping logic Question)

# Q.30 : What are the looping structures in JavaScript? Any one Example?

## ans:

A loop is a programming structure that repeats a sequence of instructions until a specific condition is met. Loops allow you to repeat a process over and over without having to write the same (potentially long) instructions each time you want your program to perform a task.

**For Loop:** In the case of for loop the declaration and initialization of looping variable, condition checking and increment or decrement of the looping variable can be done in the same line. it increases the readability and reduces the chance of error
syntax:
FOR (INITIALIZATION;CONDITION;INCREMENT/DECREMENT){
CODE/STETMENT
}

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      for (let count = 0; count <= 10; count++) {
        console.log(count);
      }
    </script>
  </body>
</html>
```

# Q.31 : Write a print 972 to 897 using for loop in JS?

## ans:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      for (count = 972; count > 879; count--) {
        console.log(count);
      }
    </script>
  </body>
</html>
```

# Q.32 : Write to print factorial of given number?

## ans:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      let number = parseInt(prompt("Enter a number"));
      if (number < 0) {
        console.log("Enter the positive number");
      } else if (number == 0) {
        console.log("The factorial number should be 1 or greater than 1. ");
      } else {
        let facto = 1;
        for (i = 1; i <= number; i++) {
          facto *= i;
        }
        alert(`the factorial ${number} is ${facto} `);
      }
    </script>
  </body>
</html>
```

# Q.33 : Write to print Fibonacci series up to given numbers?

## ans:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      let number = parseInt(prompt("Enter the number of terms: "));
      let num1 = 0,
        num2 = 1,
        nextnum;
      console.log("Fibonacci Series:");
      for (let i = 1; i <= number; i++) {
        console.log(num1);
        nextnum = num1 + num2;
        num1 = num2;
        num2 = nextnum;
      }
    </script>
  </body>
</html>
```

# Q.34 : Write to print number in reverse order e.g.: number = 64728 ---> reverse =82746 in JS?

## ans:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      let str = prompt("enter number");
      let num = parseInt(str);
      console.log("number: ", num);
      let reverseNum = Array.from(String(num)).reverse().join("");
      finalnum = parseInt(reverseNum);
      console.log("reverse :", reverseNum);
    </script>
  </body>
</html>
```

# Q.35 : Write a program make a summation of given number (E.g., 1523 Ans: 11) in JS?

## ans:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      let strg = prompt("enter number");
      num = parseInt(strg);
      function sumition(num) {
        let str = num.toString();
        let sum = 0;
        for (let char of str) {
          sum += parseInt(char);
        }
        return sum;
      }
      console.log(sumition(num));
    </script>
  </body>
</html>
```

# Q.36 : Write a program you have to make a summation of first and last Digit. (E.g., 1234 Ans: 5) in JS?

## ans

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      let num = 1234;
      console.log("number: ", num);
      let strg = num.toString();
      let firstNum = parseInt(strg[0]);
      let lastNum = parseInt(strg[strg.length - 1]);
      console.log("answer: ", firstNum + lastNum);
    </script>
  </body>
</html>
```

# Q.37 : Use console.log() and escape characters to print the following pattern in JS?

**1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      str = "";
      for (i = 1; i <= 5; i++) {
        for (j = 1; j <= 5; j++) {
          if (j === 1 || j === 3) {
            str += i + " ";
          } else if (j === 2) {
            str += "1 ";
          } else if (j === 4) {
            str += i ** 2 + " ";
          } else {
            str += i ** 3 + " ";
          }
        }
        str = str + "\n";
      }
      console.log(str);
    </script>
  </body>
</html>
```

# Q.38 : Use pattern in console.log in JS?

1. **1
   1 0
   1 0 1
   1 0 1 0
   1 0 1 0 1**

   ## ans:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      strg = "";
      for (j = 1; j <= 5; j++) {
        for (k = 1; k <= j; k++) {
          if (k % 2 === 0) {
            strg += 0 + " ";
          } else {
            strg += 1 + " ";
          }
        }
        strg += "\n";
      }
      console.log(strg);
    </script>
  </body>
</html>
```

2.  **A
    B C
    D E F
    G H I J
    K L M N O**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      let characterA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      strg = "";
      conter = 0;
      for (a = 0; a <= 5; a++) {
        for (i = 0; i <= a; i++) {
          strg = strg + " " + characterA[conter];
          conter++;
        }
        strg += "\n";
      }
      console.log(strg);
    </script>
  </body>
</html>
```

2. **1
   2 3
   4 5 6
   7 8 9 10
   11 12 13 14 15**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      let strg = "";
      conter = 1;
      for (a = 0; a <= 5; a++) {
        for (i = 0; i <= a; i++) {
          strg = strg + " " + conter;
          conter++;
        }
        strg += "\n";
      }
      console.log(strg);
    </script>
  </body>
</html>
```

4.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      strg = "";
      for (j = 1; j < 6; j++) {
        for (k = 1; k <= j; k++) {
          strg = strg + "*";
        }
        strg = strg + "\n";
      }
      console.log(strg);
    </script>
  </body>
</html>
```

# Q.39 : Accept 3 numbers from user using while loop and check each numbers palindrome?

## ans:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      function palindrome(num) {
        let str = num.toString();
        let reversedStr = str.split("").reverse().join("");
        return str === reversedStr;
      }
      let numbers = [];
      let count = 0;
      while (count < 3) {
        let input = prompt("Enter number:");
        let number = parseInt(input);
        if (!isNaN(input)) {
          numbers.push(number);
          count++;
        } else {
          console.log("Please enter a valid number.");
        }
      }
      numbers.forEach((num, index) => {
        if (palindrome(num)) {
          console.log(`Number ${index + 1} (${num}) is a palindrome.`);
        } else {
          console.log(`Number ${index + 1} (${num}) is not a palindrome.`);
        }
      });
    </script>
  </body>
</html>
```

# Q.40 Write a JavaScript Program to display the current day and time in the following format.

Sample Output: Today is Friday. Current Time is 12 PM: 12 : 22 2 ?

## ans:

```html
<script>
  let currentDay = new Date().getDay();
  let currentTime = new Date().getHours();
  let currentMin = new Date().getMinutes();
  function totalday(day) {
    switch (day) {
      case 0:
        return "Sunday";
        break;
      case 1:
        return "Monday";
        break;
      case 2:
        return "Tuesday";
        break;
      case 3:
        return "Wednesday";
        break;
      case 4:
        return "Thursday";
        break;
      case 5:
        return "Friday";
        break;
      case 6:
        return "Saturday";
        break;
      default:
        console.log("Oops wrong day");
    }
  }
  console.log(
    `Today is ${totalday(
      currentDay
    )}. Current Time is ${currentTime} PM: ${currentTime}:${currentMin}.`
  );
</script>
```

# Q.41 Write a JavaScript program to get the current date?

## ans:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      let currentDate = new Date().getDate();
      console.log(currentDate);
    </script>
  </body>
</html>
```

# Q.42 Write a JavaScript program to compare two objects?

## ans:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      let obj1 = {
        name: "abc",
        age: 24,
        city: "rajkot",
      };
      let obj2 = { name: "abc", age: 24, city: "rajkot" };
      console.log(JSON.stringify(obj1) === JSON.stringify(obj2));
    </script>
  </body>
</html>
```

# Q.43 Write a JavaScript program to convert an array of objects into CSV string?

## ans:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      let arrOfObj = [
        { name: "abc", age: 23, city: "bhopal " },
        { name: "jkv", age: 21, city: "indore " },
        { name: "rmd", age: 24, city: "delhi " },
        { name: "jin", age: 28, city: "mumbai " },
      ];
      let arraOfCSVString = [];
      for (let i = 0; i < arrOfObj.length; i++) {
        arraOfCSVString.push(Object.entries(arrOfObj[i]).join("."));
      }
      console.log(arraOfCSVString.join("-"));
    </script>
  </body>
</html>
```

# Q.44 Write a JavaScript program to capitalize first letter of a string?

## ans:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      function capitalize(strg) {
        firstL = strg[0].toUpperCase() + strg.slice(1);
        console.log(firstL);
      }
      capitalize("javascript");
    </script>
  </body>
</html>
```

# Q.45 Write a JavaScript program to determine if a variable is array?

## ans:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      let arr = ["a", " b", " c", " d"];
      let strg = "this is string";
      let arrOrNot1 = Array.isArray(arr);
      let arrOrNot2 = Array.isArray(strg);
      alert(`if this is an Array than: ${arrOrNot1}`);
      alert(`if this is not an Array than: ${arrOrNot2}`);
    </script>
  </body>
</html>
```

# Q.46 Write a JavaScript program to clone an array?

## ans:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      let arr1 = [1, 2, 3, 4, 5];
      let arr2 = [...arr1];
      console.log(arr2);
      console.log(arr1 == arr2);
    </script>
  </body>
</html>
```

# Q.47 What is the drawback of declaring methods directly in JavaScript objects?

## ans:

Calling a function is slightly longer (eg : my.foo()) and if we have bunch of extra nested functions, it would be more longer.
Requires some extra processing by JS engine but this will not affect the speed much as it would be like optimizing our code execution time ~0.1ms , not an achievement.

# Q.48 Print the length of the string on the browser console using console.log()?

## ans:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      let strg = "this is browser console";
      console.log(strg.length);
    </script>
  </body>
</html>
```

# Q.49 Change all the string characters to capital letters using toUpperCase() method?

## ans:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      let strg = "abcdefghijklmnopqrstuvwxyz";
      console.log(strg.toUpperCase());
    </script>
  </body>
</html>
```

# Q.50 What is the drawback of declaring methods directly in JavaScript objects?

## ans:

Calling a function is slightly longer (eg : my.foo()) and if we have bunch of extra nested functions, it would be more longer.
Requires some extra processing by JS engine but this will not affect the speed much as it would be like optimizing our code execution time ~0.1ms , not an achievement.

# Q.51 Write a JavaScript program to get the current date. Expected Output : mm-dd-yyyy,mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy?

```html
<script>
  let currentDate = new Date().getDate();
  let currentMonth = new Date().getMonth();
  let currentYear = new Date().getFullYear();
  console.log(currentDate);
  console.log(currentMonth + 1);
  console.log(currentYear);
  console.log(`${currentDate}/${currentMonth + 1}/${currentYear}`);
  console.log(`${currentDate}-${currentMonth + 1}-${currentYear}`);
  console.log(`${currentMonth + 1}/${currentDate}/${currentYear}`);
  console.log(`${currentMonth + 1}-${currentDate}-${currentYear}`);
</script>
```

# Q.52 Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript?

## ans:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      let strg = "30 Days Of JavaScript";
      console.log(strg.indexOf("Days"));
    </script>
  </body>
</html>
```

# Q,53 Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript?

## ans:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      let strg = "30 Days Of JavaScript";
      console.log(strg.lastIndexOf("JavaScript"));
    </script>
  </body>
</html>
```

# Q.54 Form Validtion in JS?

## ans:

When you enter data, the browser and the web server will check to see that the data is in the correct format and within the constraints set by the application. Validation done in the browser is called client-side validation, while validation done on the server is called server-side validation.

# Q.55 Form in Email, number, Password, Validation?

## ans:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <form action="">
      <input type="email" id="email" placeholder="Enter your email" />
      <input type="password" id="pw" placeholder="Enter your password" />
      <input type="number" id="num" placeholder="Enter your number" />
      <button id="bnt">submit</button>
    </form>
    <script>
      document.getElementById("bnt").addEventListener("click", () => {
        const emailValid = document.getElementById("email").value;
        const passwordValid = document.getElementById("pw").value;
        const numValid = document.getElementById("num").value;
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailValid)) {
          alert("enter a valid email address");
        }
        if (passwordValid.lenght <= 8) {
          alert("password must be at least 8 characters long");
        }
        if ((numValid.lenght = 10)) {
          alert("Enter mobile number");
        }
        return true;
      });
    </script>
  </body>
</html>
```

# Q.56 Dynamic Form Validation in JS?

## ans:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      #myForm {
        margin: 20px;
        border: 1px solid black;
        padding: 20px;
        background-color: rgba(245, 185, 106, 0.831);
        display: flex;
        flex-direction: column;
      }
      input {
        width: fit-content;
        margin-top: 5px;
        background-color: snow;
      }
      #bnt {
        background-color: rgba(9, 67, 166, 0.791);
        padding-left: 10px;
        padding-right: 10px;
        font-weight: bold;
      }
      span {
        color: red;
      }
    </style>
  </head>
  <body>
    <form id="myForm">
      <label for="username">Username:</label>
      <input
        type="text"
        id="username"
        placeholder="Enter Your Username "
      /><br />
      <span id="userMsg"></span><br /><br />

      <label for="password">Password:</label>
      <input type="password" id="pw" placeholder="Enter Your Password" /><br />
      <span id="pwMsg"></span><br /><br />

      <label for="email">Email:</label>
      <input type="email" id="email" placeholder="Enter Your Email" /><br />
      <span id="emailMsg"></span><br /><br />

      <input type="submit" value="submit" id="bnt" />
    </form>
    <script>
      const form = document.getElementById("myForm");
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        let isValid = true;
        const userInput = document.getElementById("username");
        const userError = document.getElementById("userMsg");
        if (!userInput.value.trim()) {
          userError.textContent = "Username is required";
          isValid = false;
        } else {
          userError.textContent = "";
        }
        const passwordInput = document.getElementById("pw");
        const pwError = document.getElementById("pwMsg");
        if (!passwordInput.value.trim()) {
          pwError.textContent = "Password is required";
          isValid = false;
        } else {
          pwError.textContent = "";
        }
        const emailInput = document.getElementById("email");
        const emailMsg = document.getElementById("emailMsg");
        const emailPttrn = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailInput.value.trim()) {
          emailMsg.textContent = "Email is required";
          isValid = false;
        } else if (!emailPttrn.test(emailInput.value.trim())) {
          emailMsg.textContent = "Invalid email format";
          isValid = false;
        } else {
          emailMsg.textContent = "";
        }
        if (isValid) {
          form.submit();
        }
      });
    </script>
  </body>
</html>
```

# Q.57 how many type of JS Event? How to use it ?

## ans:

Events are things that happen in the system you are programming, which the system tells you about so your code can react to them
**Common Event Listeners**
Onload: When your page loads, it performs accordingly.
Onclick: When a user clicks on a button or inputs it occurs.
Onmouseover: When a user mouses over on the button.
Onfocus: Certain scenarios when a user keeps the cursor in a form field.
Onblur: If a particular form field leaves within it.
Example :

```html
<body>
  <input type="text" placeholder="Enter your name" />
  <button>click</button>
  <script>
    let bnt = document.getElementsByTagName("button")[0];
    bnt.addEventListener("click", () => {
      inputValue = document.getElementsByTagName("input")[0].value;
      alert(inputValue);
    });
  </script>
</body>
```

# Q.58 What is Bom vs Dom in JS?

## ans:

**BOM**
The Browser Object Model (BOM) is a collection of objects exposed by the browser that allow JavaScript to interact with the browser window, document, and other browser-specific functionalities. The BOM includes objects such as Window, Navigator, Location, History, and Screen.
**DOM**
The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.A web page is a document that can be either displayed in the browser window or as the HTML source. In both cases, it is the same document but the Document Object Model (DOM) representation allows it to be manipulated. As an object-oriented representation of the web page, it can be modified with a scripting language such as JavaScript

# Q.59 Array vs object differences in JS?

## ans:

Objects are the most powerful data type of the javascript as they are used in almost everything. Functions are object, Arrays are objects, Regular Expression are objects and of course objects are objects.

**Object**:

Objects are used to represent a “thing” in your code. That could be a person, a car, a building, a book, a character in a game — basically anything that is made up or can be defined by a set of characteristics. In objects, these characteristics are called properties that consist of a key and a value.

**Array**:

Arrays are objects only in javascript. The major difference is that they store the data in an ordered collection in which the data can be accessed using a numerical index.

# Q.60 Split the string into an array using split() Method?

## ans:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      let strg = "hey this is of script javascript";
      let text = strg.split(" ");
      console.log(text[5]);
      let chart = strg.split("");
      console.log(chart[7]);
    </script>
  </body>
</html>
```

# Q.61 Check if the string contains a word Script using includes() method?

## ans:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      let sentence = "hey this is of script javascript";
      word = "script";
      console.log(sentence.includes(word) ? "true" : "false");
    </script>
  </body>
</html>
```

# Q.62 Change all the string characters to lowercase letters using toLowerCase() Method.

## ans:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      let sentence = "30 DAYS OF JAVASCRIPT";
      console.log(
        `THE CHARACTERS TO LOWERCASE LETTERS ${sentence.toLowerCase()}`
      );
    </script>
  </body>
</html>
```

# Q.63 What is Character at index 15 in ’30 Days of JavaScript’ string? Use charAt() method.

## ans:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      let sentence = "30 Days of JavaScript";
      let indx = 15;
      console.log(`The character at index ${indx} is ${sentence.charAt(indx)}`);
    </script>
  </body>
</html>
```

# Q.64 copy to one string to another string in JS?

## ans:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      let strg = "hello world";
      another = "";
      for (i = 0; i < strg.length; i++) {
        another = another + strg[i];
      }
      console.log(another);
    </script>
  </body>
</html>
```

# Q.66 Find the length of a string without using libraryFunction?

## ans:

# Q.67 What is JavaScript?

## ans:

JavaScript was created to make the web more dynamic. It is a scripting language made to run inside a host environment like a web browser! It provides programmatic control over the objects in that environment. For example, when you click a button and you want something about the webpage to change, you will use JavaScript.
JavaScript can be client-side and server-side, meaning that it can be used to control user-facing interfaces browsers as well as handle the server-side extensions that connect with a database.

# Q.68 What is the use of isNaN function?

## ans:

NaN stands for "Not a Number" and is a value in JavaScript used to represent an undefined or unrepresentable value.
isNaN() function returns true if a number is Not-a-Number. and isNaN() function converts the value to a number before testing it.
example:

`
console.log(isNaN(NaN)); // true
console.log(isNaN(123)); // false
console.log(isNaN("123")); // false (string "123" is converted to the number 123)`

# Q.69 What is negative Infinity?

## ans:

Negative Infinity is a special numeric value that is returned when an arithmetic operation or mathematical function generates a negative value greater than the largest representable number in JavaScript

# Q.70 Which company developed JavaScript?

## ans:

JavaScript was created at Netscape Communications by Brendan Eich in 1995. Netscape and Eich designed JavaScript as a scripting language for use with the company's flagship web browser, Netscape Navigator.

# Q.71 What are undeclared and undefined variables?

## ans:

Undeclared variables are those that have not been declared or defined in the current scope, while undefined variables are those that have been declared but not given a value.

`console.log(a); // a is not declared or defined`
`let b
console.log(b); // b is declared but undefined`

# Q.72 Write the code for adding new elements dynamically?

```html
<body>
  <p>this is p tag</p>
  <script>
    let pElement = document.getElementsByTagName("p")[0];
    let newElement = document.createElement("div");
    newElement.innerHTML = "this is new element";
    pElement.append(newElement);
  </script>
</body>
```

# Q.73 What is the difference between ViewState and SessionState?

this is not possible as a fronend

# Q.74 What is === operator?

## ans:

The strict equality (===) operator checks whether its two operands are equal and returning a Boolean result.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      let a = "hello";
      let b = "hello";
      console.log(a === b);
      console.log(2 === "2");
    </script>
  </body>
</html>
```

# Q.75 How can the style/class of an element be changed?

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div class="box">thia is BOX</div>
    <div class="parent">something</div>
    <script>
      let elemnt = document.getElementsByClassName("box")[0];
      //chagne style through JS
      elemnt.style.border = "1px solid black";
      elemnt.style.backgroundColor = "lightblue";
      elemnt.style.height = "100px";
      elemnt.style.width = "100px";
      //chagne class through JS
      let chngeClss = document.getElementsByClassName("parent")[0];
      console.log(chngeClss.classList);
      console.log(chngeClss.classList.add("child"));
    </script>
  </body>
</html>
```

# Q.76 How to read and write a file using JavaScript?

this is not possible as a fronend

# Q.77 What are all the looping structures in JavaScript?

## ans:

LOOP : JavaScript loops are powerful tools for performing repetitive tasks efficiently. loops in javascript execute a block of code again and again while the condition is true. For example, suppose we want to print “Hello World” 5 times. This can be done using JS Loop easily.
there are many kind of loops in javascript:
While loop
For loop
Do..While loop
forEach loop
Map loop
For..in loop
For..of loop

example :
for loop

```html
<body>
  <script>
    for (let count = 0; count <= 5; count++) {
      console.log(count);
    }
  </script>
</body>
```

# Q.78 How can you convert the string of any base to an integer in JavaScript?

```html
<script>
  let a = "489";
  let b = "746";
  num1 = Number(a);
  num2 = parseInt(b);
  console.log(num1 + num2);
  console.log(num1 * num2);
</script>
```

# Q.79 What is the function of the delete operator?

```html
<script>
  deleteOp = {
    firstN: "Dev",
    lastN: "Sharma",
  };
  alert(deleteOp.firstN + ` ${deleteOp.lastN}`);
  delete deleteOp.firstN;
  alert(deleteOp.firstN + ` ${deleteOp.lastN}`);
</script>
```

# Q.80 What are all the types of Pop up boxes available in JavaScript?

alert(message): Display a popup box with the specified message with the OK button.

```html
<script>
  window.alert("this is alert");
</script>
```

prompt(message, defaultValue): Display a popup box to take the user's input with the OK and Cancel buttons.

```html
<script>
  window.prompt("Enter your name");
</script>
```

confirm(message): Display a popup box with the specified message with OK and Cancel buttons.

```html
<script>
  window.confirm("For confirm click OK or Cancel");
</script>
```

# Q.81 What is the use of Void (0)?

## ans:

With void , it tells the browser not to return anything or return undefined. Another use case of links with the
javascript:void(0) reference is that sometimes, a link may run some JavaScript
code in the background, and navigating may be unnecessary.

# Q.82 How can a page be forced to load another page in JavaScript?

```html
<body>
  <p><b>Click on the below button to force reload new page</b></p>
  <button>Load</button>
  <script>
    bnt = document.getElementsByTagName("button")[0];
    bnt.addEventListener("click", () => {
      window.location.href = "https://www.google.com";
    });
  </script>
</body>
```

# Q.83 What are the disadvantages of using innerHTML in JavaScript?

## ans:

Inner HTML is slow because when we use the inner HTML property in the code it allows us to change using the JavaScript language. It is very slow because as inner HTML already parses the content even we have to parse the content again so that’s why it takes time.
When we have used the event handlers then the event handlers are not automatically attached to the new elements created by innerHTML. To change that, we have to track the event handlers and manually attach them to a new element.
It means that first, we have to fetch the element property through innerHTML, and then we have to attach them to a new element

# Q.84 Create password field with show hide functionalities

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <style>
    body {
      margin: 30px;
    }
    button {
      width: 40px;
      text-align: center;
      height: 20px;
      margin: 10px;
    }
    input {
      height: 20px;
      margin: 10px;
    }
  </style>
  <body>
    Enter Password:<input type="password" placeholder="Enter password" /><br />
    <button id="bnt"></button>Show Password
  </body>
  <script>
    const bnt = document.getElementsByTagName("button")[0];
    const inputValue = document.getElementsByTagName("input")[0];
    bnt.addEventListener("click", () => {
      event.preventDefault();
      let type =
        inputValue.getAttribute("type") === "password" ? "text" : "password";
      inputValue.setAttribute("type", type);
      bnt.textContent = type === "password" ? "show" : "hide";
    });
  </script>
</html>
```

# Q.85 Create basic math operation in JS

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Maths Operations</h1>
    Enter 1st Number:
    <input type="text" id="input1" /><br /><br />
    Enter 2st Number:
    <input type="text" id="input2" /><br /><br />
    <button onclick="superFunction('+')" id="add-bnt">+</button>
    <button onclick="superFunction('-')" id="sub-bnt">-</button>
    <button onclick="superFunction('*')" id="mult-bnt">*</button>
    <button onclick="superFunction('/')" id="div-bnt">/</button>
    <button onclick="superFunction('%')" id="mod-bnt">%</button>
    <br /><br />
    <p>Answer:</p>
    <script>
      let num1 = document.getElementById("input1");
      let num2 = document.getElementById("input2");
      let result = 0;
      function superFunction(operation) {
        let result;
        switch (operation) {
          case "+":
            result = parseInt(num1.value) + parseInt(num2.value);
            break;
          case "-":
            result = parseInt(num1.value) - parseInt(num2.value);
            break;
          case "*":
            result = parseInt(num1.value) * parseInt(num2.value);
            break;
          case "/":
            result = parseInt(num1.value) / parseInt(num2.value);
            break;
          case "%":
            result = parseInt(num1.value) % parseInt(num2.value);
            break;
        }
        document.getElementsByTagName("p")[0].innerHTML = "Answer: " + result;
      }
    </script>
  </body>
</html>
```

# Q.86 Create result

```html
<body>
  <h1>Marksheet for Information Technology</h1>
  <br />Enter Marks <br />
  <br />
  <br />
  C language : <input type="text" id="c" /><br /><br />
  C++ language : <input type="text" id="cl" /><br /><br />
  Data Base : <input type="text" id="data" /><br /><br />
  HTML : <input type="text" id="html" /><br /><br />
  CSS : <input type="text" id="css" /><br /><br />
  PHP : <input type="text" id="php" /><br /><br />
  Core Java : <input type="text" id="core" /><br /><br />
  <button id="bnt">Result</button>
  <br /><br />
  <p>Total is : /350</p>
  <p class="ans">Percentage is : %</p>
  <p>
    <script>
      document.getElementById("bnt").addEventListener("click", () => {
        let num1 = document.getElementById("c").value;
        let num2 = document.getElementById("cl").value;
        let num3 = document.getElementById("data").value;
        let num4 = document.getElementById("html").value;
        let num5 = document.getElementById("css").value;
        let num6 = document.getElementById("php").value;
        let num7 = document.getElementById("core").value;
        let result =
          parseInt(num1) +
          parseInt(num2) +
          parseInt(num3) +
          parseInt(num4) +
          parseInt(num5) +
          parseInt(num6) +
          parseInt(num7);
        let result2 = (result / 350) * 100;
        document.getElementsByTagName("p")[0].innerHTML =
          "Total is:" + ` ${result}/350 `;
        document.getElementsByTagName("p")[1].innerHTML =
          "Percentage is :" + ` ${result2}% `;
      });
    </script>
  </p>
</body>
```

# Q.87 Create a slider using JavaScript

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
        /* background-color: black; */
      }

      .slider {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 150px;
        background-color: black;
        margin: 20px;
        width: 100%;
        column-gap: 20px;
      }
      .slider > div {
        width: 100px;
        height: 100px;
        position: absolute;
      }
      .box1 {
        background-color: rgba(242, 250, 9, 0.896);
        left: 250px;
      }
      .box2 {
        background-color: red;
        left: 400px;
      }
      .box3 {
        background-color: rgba(9, 146, 250, 0.896);
        transform: scale(1.2);
        left: 550px;
      }
      .box4 {
        background-color: rgba(250, 9, 234, 0.896);
        left: 700px;
      }
      .box5 {
        background-color: rgb(53, 143, 8);
        left: 850px;
      }
      .wrapper {
        display: flex;
      }
      .left,
      .right {
        position: absolute;
        top: 250px;
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
    <h1>Simple Javascript Slider</h1>
    <div class="slider">
      <div class="box box1"></div>
      <div class="box box2"></div>
      <div class="box box3"></div>
      <div class="box box4"></div>
      <div class="box box5"></div>
    </div>
    <div class="wrapper">
      <div class="left"><i class="fa-solid fa-angle-left"></i></div>
      <div class="right"><i class="fa-solid fa-angle-right"></i></div>
    </div>
    <script>
      const leftbnt = document.getElementsByClassName("left")[0];
      const rightbnt = document.getElementsByClassName("right")[0];
      const boxList = document.getElementsByClassName("box");
      let boxLeftIndex = 2;
      leftbnt.addEventListener("click", (event) => {
        event.preventDefault();
        boxLeftIndex++;
        if (boxLeftIndex <= 4) {
          slideLeft();
        } else {
          boxLeftIndex = 4;
        }
      });
      rightbnt.addEventListener("click", (event) => {
        event.preventDefault();
        boxLeftIndex--;
        if (boxLeftIndex >= 0) {
          slideRight();
        } else {
          boxLeftIndex = 0;
        }
      });
      function slideLeft() {
        for (let i = 0; i < boxList.length; i++) {
          boxList[i].style.left = `${boxList[i].offsetLeft - 100}px`;
          boxList[i].style.transform = "scale(1)";
        }
        boxList[boxLeftIndex].style.transform = "scale(1.3)";
      }
      function slideRight() {
        for (let i = 0; i < boxList.length; i++) {
          boxList[i].style.left = `${boxList[i].offsetLeft + 100}px`;
          boxList[i].style.transform = "scale(1)";
        }
        boxList[boxLeftIndex].style.transform = "scale(1.3)";
      }
    </script>
  </body>
</html>
```
