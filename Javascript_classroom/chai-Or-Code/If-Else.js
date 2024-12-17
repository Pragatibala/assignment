
let score = 2000;
if (score > 1000){
  let power = "fly"
  console.log(`User score : ${power}`);
  
}
// console.log(`User score : ${power}`); this is undefined because of the scope or veriable 

if (score > 1500)   console.log(`we can use like this`);
  

// ====================================================================

let month = 3
switch (month){
  case 1 :
    console.log("jan");
    break;
    case 2 :
      console.log("feb");
      break;
      case 3 :
        console.log("march");
        break;
        case 4 :
          console.log("april");
          break;
}