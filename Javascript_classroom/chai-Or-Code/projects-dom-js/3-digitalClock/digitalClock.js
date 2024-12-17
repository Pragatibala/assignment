let clock = document.getElementById("clock");
 
// this is simple time when you refresh the page it will update
// let date = new Date();
// console.log(date.toLocaleTimeString());

//syntax of setInterval(function(){},1000)millisecond

setInterval(function(){
    let date = new Date();
// console.log(date.toLocaleTimeString());
clock.innerHTML = date.toLocaleTimeString()
},1000)