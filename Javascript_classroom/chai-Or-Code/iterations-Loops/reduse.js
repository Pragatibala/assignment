let mynum = [1, 2, 3]


//WITH  FUNCTION
// let totalNum = mynum.reduce(function (acc,currtval) {
//     console.log(`accumulator: ${acc} and currentvalue : ${currtval}`);
//     return acc + currtval  
// },0)

//WITH ARROWFUNCTION
let totalNum = mynum.reduce( (acc,currtval) => acc + currtval  ,0)

// console.log(totalNum);

let shopingcart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "py course",
        price : 999
    },
    {
        itemName : "DS course",
        price : 12999
    },
]

// let totalprice = shopingcart.reduce((acc , currt) => acc + currt.price , 0)
let totalprice = shopingcart.reduce((acc , item) => acc + item.price , 0) //item for  object
console.log(totalprice);
