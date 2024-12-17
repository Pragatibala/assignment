// when we assume that the ans is true
let userid = "pragati.com"
if(userid)
{
    console.log("this is true");
    
}
else{
console.log("this is false");
}
/*
Falsy values = false , 0, -0, BigInt 0n (zero n), "", null, undefined, NAN
Truthy values = all are truthy values
"0", "false", " "( all we have in String even a space, they all are truthy values)
[], {}, function(){} (empty function is truthy)

let userEmail = []
if (userEmail.length === 0){
console.log("Array is empty");
}

let emptyObj = {}                   //Object.keys(emptyObj) = this will change into an array
if (Object.keys(emptyObj).length === 0){
console.log("object is empty");
}


*/

let val1;
// val1 = 5 ?? 10 // 5
// val1 = null ?? 10 // 10
// val1 = undefined ?? 10 // 10
val1 = null ?? 10 ?? 15// 10

// console.log(val1);
// ------------------------Terniary Operator------------------------------------

//condition ? true : false
 let iceTea =   100;
 iceTea >=80 ? console.log("less than 80"): console.log('greater than 80');
 
 
