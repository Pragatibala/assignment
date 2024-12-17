let coding = ["js", "cpp","py","java","ruby","go"]

//in this loop you can  callback in many ways

// coding.forEach( function (val) {
//     console.log(val); // each value of an Array     
// })

// coding.forEach(  (item) => {
//     console.log(item); // each value of an Array     
// })


//  function printMe(val) {
//     console.log(val); 
// }
// coding.forEach( printMe )

// coding.forEach(  (item, index, arr) => {
//      console.log(item,index,arr); // this will give you the value index of array and whole array
//     })  


let mycoding = [
    { nameLng : "javascript",
        nameFile : "js"
    },
    { nameLng : "python",
        nameFile : "py"
    },
    { nameLng : "java",
        nameFile : "java"
    }
]

// mycoding.forEach (
//     (item) => {
//         console.log(item); //return list of Object
        
//     }
// )


mycoding.forEach (
    (item) => {
        console.log(item.nameLng); //return name of Object
    }
)


// mycoding.forEach (
//     (item) => {
//         // console.log(item.nameLng); //return name of Object
//         return item // foreach never return the values
//     }
// )