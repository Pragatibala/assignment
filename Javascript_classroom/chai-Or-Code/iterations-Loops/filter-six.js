let myNums = [1,2,3,4,5,6,7,8,9,10];

// let newnums = myNums.filter( (num) => num > 4)
// console.log(newnums); // give values greater than 4


// let newnums = myNums.filter( (num) => {
//     return num > 4 //In scope or this type of function you have to write return key word
// })

//SAME VALUE WE WANT BUT IN FOREACH LOOP

let newnums = []

myNums.forEach((num)=> {
    if (num > 4){
        newnums.push(num)
    }
})
console.log(newnums); // give values greater than 4

