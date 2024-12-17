//---------------------- IIFE-----------------------------------

//Immediately Invoked Function Expressions

function chai(){
    console.log('DB connection');
}
chai();

// this is named IIFE
(function chai2(){
    console.log('DataBase connection');
})();

// ----------------arrow function in IIFE---------------------

( ()=>{
    console.log('this is IIFE in arrow function');
})();
// HOW TO PASS PARAMETERS
( (name)=>{
    console.log(`this is IIFE in arrow function ${name}`);
})('Pragari');