let buttons = document.querySelectorAll(".button");
// console.log(buttons);// nodeList  we can use ForEach
let body = document.querySelector("body");//background color change

buttons.forEach((button)=>{
button.addEventListener("click",(e)=>{
    console.log(e.target.id);// return ID 
    if (e.target.id === 'grey'){
        // body.style.backgroundColor = 'grey'
        body.style.backgroundColor = e.target.id
    }
    else if (e.target.id === 'yellow'){
        
        body.style.backgroundColor = e.target.id
    }
    else if (e.target.id === 'blue'){
        
        body.style.backgroundColor = e.target.id
    }
    else if (e.target.id === 'green'){
        
        body.style.backgroundColor = e.target.id
    }
})
})


//FAIL WITH SWITCH CASE--------------------------------------------------
// buttons.forEach(function (button){
// button.addEventListener("click",(e)=>{
// // console.log(e.target);//it returns the ID as target e is pointer (variable) 
// let idv = e.target.id; 
// switch (idv) {
//     case idv === "grey":
//         body.style.backgroundColor = "grey"
//         break;
//     case idv === "yellow":
//         body.style.backgroundColor = e.target.id
//         break;
//     case idv === "blue":
//         body.style.backgroundColor = id
//         break;
//     case idv === "green":
//         body.style.backgroundColor = id
//         break;
// }
// });
// })
