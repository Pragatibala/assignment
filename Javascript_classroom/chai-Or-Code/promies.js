/*PROMISES : the promises object represent the eventual completion (or failure) of an asynchronous operation and its resulting value.

A Promise is in one of these states:
pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.
(new promise ) keyword was introduce in ES6 
*/
const promiseOne = new Promise(function (resolve,reject){
    // do an async task
    //DB (database) calls, cryptography, network call
    setTimeout(function(){
        console.log('Async Task complete');
    },1000)
    resolve()// it will connect with .then()
})
promiseOne.then(function(){
    console.log('promise consumed');
}) // all values return in this (.then())


new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Async Task-2');
    },1000)
    resolve()
}).then(()=>{
    console.log("Async resolved");
    
})

//we passes the parameter in resolve() and access by .then()
const promiseThree = new Promise((resolve,reject)=>{
setTimeout(function(){
    resolve({username: "newname",email:"jk@btsjumun.com"})// array, object, anything 
},1000)
}).then((user)=>{
    console.log(user);
    
})

const promiseFour = new Promise((resolve,reject)=>{
    let error = true
    if(!error){
        resolve({username:'Pragati',password:123})
    }else{
        reject('Error : something went wrong')
    }
})
// when you return the value in .then() ,but with variable you can't access return value 
// but you can chaining the .then().then() for access the return values
promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((usernm)=>{
    console.log(usernm);
}).catch((error)=>{
    console.log(error);
    
}).finally(()=>console.log('the promise either resolved or rejected '))
// .finally() <-- this method will always run , the promise is either resolved or rejected

//----------------------------------------------------------------------------------------
//ASYNC AWAIT WITH PROMISE
// this is not necessary to handle promises with .then or .catch we can use await async
 
const promiseFive = new Promise((resolve,reject)=>{
    let error = true
    if(!error){
        resolve({username:'Javascript',password:123})
    }else{
        reject('Error : javascript went wrong')
    }
})
// async function consumePromiseFive(){
// let response = await promiseFivebbb
// console.log(response);
// } // if error is true you can't handle like this , it will only print the resolve ()

async function consumePromisefive() {
try {
    const response = await promiseFive
    console.log(response);
} catch (error) {
    console.log(error);   
    }
}
consumePromisefive()// like this you can handle the error gracefully


// fetch () async await
 

// async function getAllData (){
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     // console.log(response); // get data but not userfull
//     const data =  await response.json()
//     console.log(data); 
// }
// getAllData()

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json()
}).then((data)=>console.log(data))
.catch((error)=>console.log(error))