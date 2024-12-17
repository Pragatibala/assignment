// ForIn

let myobject = {
    js : "javascript",
    cpp : "c++",
    py : "python",
    java : "java",
    rb : "ruby",
    swift : "swift by apple"
}
 
// for (const key in myobject) {
//  console.log(key); // in this loop you can access the Object's key as return  value.
// }

// for (const key in myobject) {
//     console.log(myobject[key]); // with this format you can access the value of Object.
//    }

// for (const key in myobject) {
//     console.log(`${key} shortcut is for ${myobject[key]}`); 
//    }

   let myarry = ['javascript','java','python','cpp','ruby']

//    for (const key in myarry) {
//       console.log(key); // it will give you array's Index (0 1 2 3 4....) 
//    }

// for (const key in myarry) {
//     console.log(myarry[key]); // this is for array's value
//  }

 for (const key in myarry) {
    console.log(key); // it will give you array's Index (0 1 2 3 4....) 
 }