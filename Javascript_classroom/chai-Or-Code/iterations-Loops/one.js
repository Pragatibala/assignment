//For Loop

for (let i=1;i<=10;i++){
    let result =i
    if(result==7){
        // console.log('7 is best number');
        
    }
    // console.log(result);
    
}

for (let i = 0; i <= 5; i++) {
    // console.log(`outer value : ${i}`);
    
    
    for(let j=0 ; j<=5;j++){
        // console.log(`inner value : ${j} and ${i}`);
// console.log( i + "*" + j + " = " + i*j);

    }
    
}


let myarry = ['jungkook', 'taehyung', "jimin"];


// console.log(myarry.length);// 3 but index is 0 1 2 if we write <= then it will give us undefined

for (let index = 0; index < myarry.length; index++) {
    const element = myarry[index];
    // console.log(element);
    
}

//Break AND Continue
// for (let index = 1; index <= 10; index++) {
//     if(index==7){
//         console.log('detected 7 for break');
//         break
//     }
//     console.log(`value of i ${index}`);
    
    
// }
for (let index = 1; index <= 10; index++) {
    if(index==7){
        console.log('detected 7 for continue');
        continue//it will not print 7 number 
    }
    console.log(`value of i ${index}`);
    
    
}