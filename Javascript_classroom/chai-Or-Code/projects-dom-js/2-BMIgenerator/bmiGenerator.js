//BMI Body Mass Index

let form = document.querySelector('form');
//this usecase will give you empty value
//const height = parseInt(document.querySelector("#height").value);

form.addEventListener("submit", (e)=>{
    e.preventDefault();//defailt value for stopping the action

const height = parseInt(document.querySelector("#height").value);
const weight = parseInt(document.querySelector("#weight").value);
const result = document.querySelector("#result");

if(height==='' || height < 0 || isNaN(height)){
result.innerHTML = `Please give a valid Height ${height}`
}else if(weight==='' || weight < 0 || isNaN(weight)){
result.innerHTML = `Please give a valid weight ${weight}`
}else {
    let bmi = (weight/((height*height)/10000)).toFixed(2)
    if(bmi < 18.6){
        result.innerHTML = `<span>${bmi}</span></br>Under Weight` 
    }else if(bmi == 18.6 || bmi <= 24.9 ){
        result.innerHTML = `<span>${bmi}</span></br>Normal Rang` 
    }else {
        result.innerHTML = `<span>${bmi}</span></br>Over Weight`
    }
    
}
})