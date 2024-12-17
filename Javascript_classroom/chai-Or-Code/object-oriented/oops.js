// OBJRCT LITERAL
// const user = {
//     userName: "Pragati",
//     loginCount: 5,
//     signedIn: true,
//     getUserDetail : function (){
//         // console.log("got user details from database");
//         // console.log(`userName${this.userName}`);// this key word for current context
//         console.log(this); // show the whole oject or the current context 
//     }
// }
// console.log(user.userName);
// console.log(user.getUserDetail());
// console.log(this);// in global when we use This key word in console browser it will show window object and in node console it will show empty object {} 
 


function user (username,loginCount,signedIn){
    this.username = username
    this.loginCount = loginCount
    this.signedIn = signedIn
    return this // if we not using return still it will print the values
}
// NEW key word (its help to create new context in constructor)
// if we not use NEW key word it will over write the (userone) by usertwo
let userone = new user("pragati",12,true)
let usertwo = new user("bala",10,false) 
console.log(userone);
console.log(usertwo);



