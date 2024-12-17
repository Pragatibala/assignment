// COLLECTION OR PREPARATION
let randomNum = parseInt(Math.random()*100 +1); // for remove the decimal num and make integer


let submit = document.querySelector('#submt');
let userInput = document.querySelector('.guessField');
let guessSlot = document.querySelector('.guesses');
let remaining = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');
let startOver = document.querySelector('.resultParas');

//for insert the values
let p = document.createElement("p");

// this is for previous guess that we will show them 
let prevGuess = [];

// how many attempts they done
let numGuess = 1; //start with 1 

let playGame = true; // this is for the game you have to make it true for playing

// LOGIC START FROM HERE
if(playGame){
    submit.addEventListener("click",function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);//get user's Input as num
        console.log(guess);
        validateGuess(guess); // validation check
    });
}

//validate the guesses that shouldn't be character or negative num 
function validateGuess(guess){
    // Clear the error message if the input is valid
    if (!isNaN(guess) && guess >= 1 && guess <= 100) {
        clearErrorMsg(); // Clear any previous error message
    }
if(isNaN(guess)){
    errorMsg("Please enter a  valid number");
    } else if (guess < 1){
    errorMsg("Please enter a number more than 1");
    } else if (guess > 100){
    errorMsg("Please enter a number less than 100");
    }
    else{
    prevGuess.push(guess);
    if (numGuess === 11){ // if my attempts  reach the 10 than
        displayGuess(guess);  //show the guesses
        displayMsg(`Game Over, Random number is ${randomNum} `);
        endGame();  // end the game
    } else{
        displayGuess(guess);  // this is for how many guesses i have done
        checkGuess(guess) ;  // show the msg that I'm guessing right 
     }
     
  }
}

// this is for msg that shows  its low or high checking
function checkGuess(guess){
if (guess === randomNum){
displayMsg('You Guessed it Right');
endGame();
    } else if (guess < randomNum){
    displayMsg('Number is Too Low');
    } else if (guess > randomNum){
        displayMsg('Number is Too High');
        }
}

// clean values, update arrays
function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}` ;
}

function displayMsg(message){
    lowOrHi.innerHTML = `<h3>${message}</h3>`;
}

// end the game and start new game

function endGame(){
    userInput.value = '';
    userInput.setAttribute("disable", "");
    p.classList.add("button"); 
    p.innerHTML = `<div id='newGame'>Start new game</div>`;
    startOver.appendChild(p);
    playGame = false  // imp to put it here for game end
    newGame() 

}
 
function newGame(){
    let newGameBnt = document.querySelector('#newGame');
    newGameBnt.addEventListener('click',function(){
randomNum =  parseInt(Math.random()*100 +1);
prevGuess = [];
numGuess = 1;
guessSlot.innerHTML = '';
remaining.innerHTML = `${11 - numGuess}`;
userInput.removeAttribute('disable');
startOver.removeChild(p)
playGame = true;
    })
}

let form = document.querySelector('.form');
let pNew = document.createElement('p');
function errorMsg(error){
    pNew.style.color = "red";
    pNew.innerHTML = `${error}`
    form.appendChild(pNew);
}
    
function clearErrorMsg() {
    pNew.innerHTML = ``;
    form.appendChild(pNew);
}