// arrow function or explicit

let var1 = (num1, num2) => {
  return num1 + num2
}
 console.log(var1(3,4));
  
//  implicit return
let var2 = (num1, num2) =>  num1 + num2
// let var2 = (num1, num2) =>  (num1 + num2) 
 
 console.log(var2(3,4));

 let var3 = (num1, num2) =>  ({name1:"sam"}) //this is for object

//-----------------------this------------------------------------

let user = {
  username : "jeon jungkook",
  price : 999,
  welcome : function (){
    console.log(`${this.username}, welcome to website `)
    console.log(this);// this give us whole content 
    
  }
}
user.welcome()
user.username = "pragati"
user.welcome()

// +++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(this) // {} return value of this in nodejs {} empty
// if we did the same thing in browser it will give us window as a object.

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

function chai(){
  let name = "anything"
  // console.log(this); 
  console.log(this.name); // undefined
}
chai()

