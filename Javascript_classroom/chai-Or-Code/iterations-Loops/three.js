    // High Order Array Loops

    //ForOf

    // ["", "", ""]
    // [{}, {}, {}]
let arry = ["jm", "jk", "rm", "jh", "yg"];
    for (const chat of arry) {
        // console.log(chat);
        
    }
    let arr = "Hello world!";
    for (const chat of arr) {
        if (chat == " ") {
            break
        }
        // console.log(chat);   
    }
    let str = "Hello world!";
    for (const chat of str) {
        if (chat == " ") {
            continue
        }
        // console.log(chat);   
    }

    // +++++++++++++++++++++++++ MAPS +++++++++++++++++++++++++++++++
    
   let map = new Map();

   map.set ("IN", "India")
   map.set ("FR" ,"France")
   map.set ("USA" ,"United State of America")
   map.set ("IN", "India")// it always have uniq values, it can't show two times india key and value 

    // console.log(map);

    for (const [key, value] of map) {
        // console.log(key ,":-", value);  // it will give you value
        
    }

    let myobj = {
        // "game1":"NSF",
        // "game2":"Spiderman"
        game1:"NSF",
        game2:"Spiderman"
    }
    for (const [key, value] of myobj) {
    // console.log(key ,":-", value);  // myobj is not iterable (in OBJECT this syntax can't be use)
        
    }


