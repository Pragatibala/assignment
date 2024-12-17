// hex : hexadecimal range 0-9 A-F

//generate random colors
const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = "#" // add all number for generate colors
    for (let i=0;i<6;i++){
    color += hex[Math.floor(Math.random()*16)]
    }
    return color;
};
// console.log(randomColor());//random colors
// console.log(Math.floor(Math.random()*16))// bcz we want 16 value (hex) we didn't add 1 bcz we want zero
let intervalID
const startChang = function (){
    if(intervalID == null){
        intervalID = setInterval(changeColor,2000)
    }
    function changeColor(){
        document.body.style.backgroundColor = randomColor();
    }
};
const stopChang = function (){
    clearInterval(intervalID);
    intervalID = null;//for better code 
}
document.getElementById("start").addEventListener("click",startChang);
document.getElementById("stop").addEventListener("click",stopChang);
