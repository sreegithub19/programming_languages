// https://atomizedobjects.com/blog/react/how-to-use-dangerouslysetinnerhtml-in-react/
// https://lightrun.com/answers/nfl-react-helmet-dangerouslysetinnerhtml-not-working-for-script-tags
// hack - https://www.faqcode4u.com/faq/6327/react-script-tag-not-working-when-inserted-using-dangerouslysetinnerhtml

import logo from './logo.svg';
import {React,useState, useEffect } from "react"; 
import axios from "axios";
import { BrowserRouter as Router, Routes,Route, Link, renderMatches } from "react-router-dom"; 


//////////////////////////////////////////
{/* Internal css in App.js*/}
  const first_css = `
  .App {
    text-align: center;
  }

  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }

  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  .App-link {
    color: #61dafb;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  `;
  function first() {
    return (
      <div className="App">
        <style>{first_css}</style>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
//////////////////////////////////////////
{/*
1. Routing in react
2. Using <script> tag in react function returns using <Helmet> tag
3. Regular HTML page rendering through these <script> tags
*/}

  const hangman = `
   <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Hangman</title>
    <style>
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
html {
    font-size: 62.5%;
}
body {
    background: #2B292E;
    color: #fafafa;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
}
span {
    border-bottom: 1px solid #534f59;
    display: inline-block;
    font-size: 2rem;
    height: 2.4rem;
    line-height: 2.4rem;
    margin: 0 .1rem;
    text-align: center;
    text-transform: uppercase;
    width: 2.4rem;
}
p {
    font-weight: 300;
    margin-bottom: .8rem;
}
.puzzle {
    display: flex;
    margin-bottom: 4.8rem;
}
.button {
    background: #7044a0;
    border: none;
    border-bottom: 2px solid #603a88;
    cursor: pointer;
    color: white;
    font-size: 1.4rem;
    font-weight: 300;
    padding: .8rem;
    transition: background .3s ease, color .3s ease;
}
.button:hover {
    background: #5F3A87;
}
    </style>
</head>
<body>
    <div>
        <div id="puzzle" class="puzzle"></div>
        <p id="guesses"></p>
        <button id="reset" class="button">Reset</button>
    </div>
    <script>
    const getPuzzle = async (wordCount) => {
        const response = await fetch(\`https://puzzle.mead.io/puzzle?wordCount=\${wordCount}\`)
            if (response.status === 200){
                const data = await response.json()
                return data.puzzle
            } else {
                throw new Error('Unable to fetch puzzle')
            }
    }
    class Hangman {
        constructor(word, remainingGuesses){
            this.word = word.toLowerCase().split('');
            this.remainingGuesses = remainingGuesses;
            this.guessedLetters = [];
            this.status = 'playing';
        }
    
        get puzzle() {
            let puzzle = '';
            this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' '){
                puzzle += letter;
            } else {
                puzzle += '*'
            }
            })
            return puzzle;
        }
    
        makeGuess (guess){
            guess = guess.toLowerCase();
            const isUnique = !this.guessedLetters.includes(guess);
            const isBadGuess = !this.word.includes(guess);
            
        if (this.status !== 'playing'){
            return
        }
        
            if (isUnique){
                this.guessedLetters.push(guess)
            }
                
            if (isUnique && isBadGuess){
                this.remainingGuesses--
            }
            this.calculateStatus();
        }
    
        get statusMessage(){
            if (this.status === 'playing'){
                return \`Guesses left: \${this.remainingGuesses}\`
            } else if (this.status === 'failed') {
                return \`Nice try! The word was "\${this.word.join('')}" \`
            } else {
                return 'Great work! You guessed the word!'
            }
        }
    
        calculateStatus(){
            const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')
            
            if (this.remainingGuesses === 0){
                this.status = 'failed'
            } else if (finished){
                this.status = 'finished'
            } else {
                this.status = 'playing'
            }
        }
    
    }
    
    let game1
const puzzleDIV = document.querySelector('#puzzle');
const remainingDIV = document.querySelector('#guesses');
window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    render()
})
const render = () => {
    puzzleDIV.innerHTML = ''
    remainingDIV.textContent = game1.statusMessage;
    game1.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleDIV.appendChild(letterEl)
    })
}
const startGame = async () => {
    const puzzle = await getPuzzle('3')
    game1 = new Hangman(puzzle, 5)
    render()
}
document.querySelector('#reset').addEventListener('click', startGame)
startGame()
    </script>
</body>
</html>
    `;
  function Hangman() { 
  //const inlineScript = '(() => { alert("Hello World!") })();'
  return (
    <div>
    <h2 onClick={() =>
    document.write(hangman)}>hangman</h2>
    </div>
  )
  } 
  
const keyboard = `
<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Virtual Keyboard ⌨️ </title>
        <style>
            body * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
    }
    
    
    .keyboard-base{
        max-width: 1085px;
        padding: 20px;
        position: absolute;
        top: 30%;
        background-color: rgb(252, 185, 185);
        border-radius: 10px;
        justify-content: center;
    
    
    }
    .section-a{
        display: flex;
    }
    
    .key {
        background-color: rgb(243, 243, 243);
        border: 2px solid black;
        border-radius: 5px;
        
        font-size: 20px;
        text-align: center;
        padding-top: 17px;
        width:50px;
        height:50px;
        margin:5px;
    }
    
    .key:hover{
        background-color: rgb(247, 100, 161);
    }
    .space {
        width: 100%;
    }
    
    .capslock{
        width:30%;
    }
    .leftshift{
        width:20%;
    }
    .return {
        width:20%;
        
    }
    textarea{
        width: 30%;
        height: 70px;
        font-size: 30px;
    }
        </style>
    </head>
    <body>
        <textarea type="text" id="inputText" value="" autofocus onblur="this.focus()" onkeydown="return false" onmouseup="getCaretPositon()"></textarea>
        
        <div class="keyboard-base">
        <div class="section-a">
            <div class="key" onclick="keyboardHandler(event)">~</div>
            <div class="key" onclick="keyboardHandler(event)">1</div>
            <div class="key" onclick="keyboardHandler(event)">2</div>
            <div class="key" onclick="keyboardHandler(event)">3</div>
            <div class="key" onclick="keyboardHandler(event)">4</div>
            <div class="key" onclick="keyboardHandler(event)">5</div>
            <div class="key" onclick="keyboardHandler(event)">6</div>
            <div class="key" onclick="keyboardHandler(event)">7</div>
            <div class="key" onclick="keyboardHandler(event)">8</div>
            <div class="key" onclick="keyboardHandler(event)">9</div>
            <div class="key" onclick="keyboardHandler(event)">0</div>
            <div class="key" onclick="keyboardHandler(event)">-</div>
            <div class="key" onclick="keyboardHandler(event)">+</div>
        </div>
        <div class="section-a">
            <div class="key" onclick="keyboardHandler(event)">Q</div>
            <div class="key" onclick="keyboardHandler(event)">W</div>
            <div class="key" onclick="keyboardHandler(event)">E</div>
            <div class="key" onclick="keyboardHandler(event)">R</div>
            <div class="key" onclick="keyboardHandler(event)">T</div>
            <div class="key" onclick="keyboardHandler(event)">Y</div>
            <div class="key" onclick="keyboardHandler(event)">U</div>
            <div class="key" onclick="keyboardHandler(event)">I</div>
            <div class="key" onclick="keyboardHandler(event)">O</div>
            <div class="key" onclick="keyboardHandler(event)">P</div>
            <div class="key" onclick="keyboardHandler(event)">[</div>
            <div class="key" onclick="keyboardHandler(event)">]</div>
            <div class="key backslash" onclick="keyboardHandler(event)">\</div>
        </div>
        <div class="section-a">
    
            <div class="key capslock" onclick="keyboardHandler(event)">CapsLock</div>
            <div class="key" onclick="keyboardHandler(event)">A</div>
            <div class="key" onclick="keyboardHandler(event)">S</div>
            <div class="key" onclick="keyboardHandler(event)">D</div>
            <div class="key"onclick="keyboardHandler(event)">F</div>
            <div class="key"onclick="keyboardHandler(event)">G</div>
            <div class="key"onclick="keyboardHandler(event)">H</div>
            <div class="key"onclick="keyboardHandler(event)">J</div>
            <div class="key" onclick="keyboardHandler(event)">K</div>
            <div class="key" onclick="keyboardHandler(event)">L</div>
            <div class="key" onclick="keyboardHandler(event)">;</div>
            <div class="key" onclick="keyboardHandler(event)">'</div>
            <div class="key return" onclick="keyboardHandler(event)">Back</div>
        </div>
        <div class="section-a">
    
            <div class="key leftshift" onclick="keyboardHandler(event)">Shift</div>
            <div class="key" onclick="keyboardHandler(event)">Z</div>
            <div class="key" onclick="keyboardHandler(event)">X</div>
            <div class="key" onclick="keyboardHandler(event)">C</div>
            <div class="key" onclick="keyboardHandler(event)">V</div>
            <div class="key" onclick="keyboardHandler(event)">B</div>
            <div class="key" onclick="keyboardHandler(event)">N</div>
            <div class="key" onclick="keyboardHandler(event)">M</div>
            <div class="key" onclick="keyboardHandler(event)">,</div>
            <div class="key" onclick="keyboardHandler(event)">.</div>
            <div class="key" onclick="keyboardHandler(event)">/</div>
        </div>
        <div class="section-a">
            <div class="key space" onclick="keyboardHandler(event)">Space</div>
            </div>
        </div>
    </body>
    <script>
        var input = document.getElementById("inputText");
    let bool = false;
    
    const keyboardHandler = (event) => {
      const caretPositon = getCaretPositon();
      const targetValue = event.target.innerText;
      let array = input.value.split("");
      let a;
    
      switch (targetValue) {
        case "Back":
          console.log(caretPositon);
          if (caretPositon == 0) {
            input.setSelectionRange(0, 0);
          } else {
            array.splice(caretPositon - 1, 1);
            a = array.join("");
            input.value = a;
            input.setSelectionRange(caretPositon - 1, caretPositon - 1);
          }
    
          break;
        case "CapsLock":
          toggleCaps();
          break;
        case "Shift":
          toggleShift();
          break;
        case "Space":
          array.splice(caretPositon, 0, " ");
          a = array.join("");
          input.value = a;
          input.setSelectionRange(caretPositon + 1, caretPositon + 1);
    
          break;
        default:
          array.splice(caretPositon, 0, event.target.innerText);
          a = array.join("");
          input.value = a;
          input.setSelectionRange(caretPositon + 1, caretPositon + 1);
    
          if (bool) {
            bool = false;
            toggleCaps();
          }
      }
    };
    
    function getCaretPositon() {
      return input.selectionStart;
    }
    
    const isUpperCase = (string) => /^[A-Z]*$/.test(string);
    
    const toggleCaps = () => {
      let keyboardKeys = document.getElementsByTagName("div");
      for (let i = 13; i < keyboardKeys.length; i++) {
        const innerElText = keyboardKeys[i].innerText;
        const innerTextLength = innerElText.length;
    
        if (innerTextLength == 1 && isUpperCase(innerElText)) {
          keyboardKeys[i].innerText = innerElText.toLowerCase();
        } else if (innerTextLength == 1) {
          keyboardKeys[i].innerText = keyboardKeys[i].innerText.toUpperCase();
        }
      }
    };
    
    const toggleShift = () => {
      toggleCaps();
      bool = true;
    };
    
    </script>
    </html>
`
  function Keyboard() { 
      return (
    <div>
    <h2 onClick={() =>
    document.write(keyboard)}>keyboard</h2>
    </div>
  )
  } 

  const clock = `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Analogue Clock</title>
    <style>
    body{
        background-color: #000;
    }
    
    #canvas{
        margin-left: 300px;
        margin-top: 50px;
    }
    </style>
</head>
<body>
    <canvas id="canvas" width="600" height="600"></canvas>
    <script>
    //create a canvas object fro HTML element
var canvas = document.getElementById('canvas');
//create a 2d drawing object
var ctx = canvas.getContext('2d');
//calculate the clock radius by using the height
var radius = canvas.height / 2;
//remap the x and y axis to the center of the canvas
ctx.translate(radius, radius);
//reduce clock radius by 90%
radius = radius * 0.90;
setInterval(drawClock, 1000); //run the drawClock function every second.
function drawClock(){
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    drawTime(ctx, radius);
}
function drawFace(ctx, radius){
    var grad;
    //draw white circle for the face
    ctx.beginPath();
    ctx.arc(0,0,radius,0,2*Math.PI);
    ctx.fillStyle = "White";
    ctx.fill();
    // create a radial gradient (inner, middle, and outer edge of clock)
    grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#333');
    //define gradient as stroke style
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius*0.1;
    ctx.stroke(); 
    //draw the center of the clock
    ctx.beginPath();
    ctx.arc(0,0, radius*0.1,0,2*Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();
}
function drawNumbers(ctx, radius) {
    var ang;
    var num;
    ctx.font = radius*0.15 + "px arial"; //set font at 15% of radius
    ctx.textBaseline = "middle"; //set text alignment to middle
    ctx.textAlign = "center"; //set text alignment to center
    for(num=1; num < 13; num++){ //calculate the print position for each number
        ang = num *Math.PI /6;
        ctx.rotate(ang);
        ctx.translate(0, -radius*0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius*0.85);
        ctx.rotate(-ang);
    }
}
function drawTime(ctx, radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour = hour%12;
    //calculate angle of hour hand
    hour = (hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
    //make hour hand 50% of canvas's radius
    drawHand(ctx, hour, radius*0.5, radius*0.07);
    //minute
    //calculate angle of minute hand
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    //make minute hand 80% of canvas's radius
    drawHand(ctx, minute, radius*0.8, radius*0.07);
    //second
    //calculate angle of second hand
    second=(second*Math.PI/30);
    //make second hand 90% of canvas's radius
    drawHand(ctx, second, radius*0.9, radius*0.02);
}
function drawHand(ctx, pos, length, width){
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}
    </script>
</body>
  `

  function Clock() { 
    return (
    <div>
    <h2 onClick={() =>
    document.write(clock)}>Clock</h2>
    </div>
  )
  } 

  const tic_tac_toe = `
  <!doctype html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Tic Tac Toe</title>
        <style>
        body {
          font-family: "Arial", sans-serif;
      }
      
      section {
          text-align: center;
      }
      
      .game--container {
          display: grid;
          grid-template-columns: repeat(3, auto);
          width: 306px;
          margin: 50px auto;
      }
      
      .cell {
          font-family: "Permanent Marker", cursive;
          width: 100px;
          height: 100px;
          box-shadow: 0 0 0 1px #333333;
          border: 1px solid #333333;
          cursor: pointer;
      
          line-height: 100px;
          font-size: 60px;
          }
        </style>
    </head>
    <body>
        <section>
            <h1 class="game--title">Tic Tac Toe</h1>
            <div class="game--container">
                <div data-cell-index="0" class="cell"></div>
                <div data-cell-index="1" class="cell"></div>
                <div data-cell-index="2" class="cell"></div>
                <div data-cell-index="3" class="cell"></div>
                <div data-cell-index="4" class="cell"></div>
                <div data-cell-index="5" class="cell"></div>
                <div data-cell-index="6" class="cell"></div>
                <div data-cell-index="7" class="cell"></div>
                <div data-cell-index="8" class="cell"></div>
            </div>
            <h2 class="game--status"></h2>
            <button class="game--restart">Restart Game</button>
        </section>
    
        <script>
        const statusDisplay = document.querySelector('.game--status');
let gameActive = true;
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];
const winningMessage = () => \`Player \${currentPlayer} has won!\`;
const drawMessage = () => \`Game ended in a draw!\`;
const currentPlayerTurn = () => \`It's \${currentPlayer}'s turn\`;
statusDisplay.innerHTML = currentPlayerTurn();
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
function handleCellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}
function handlePlayerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayerTurn();
}
function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }
    if (roundWon) {
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        return;
    }
    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
    }
    handlePlayerChange();
  }
function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));
    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }
    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}
function handleRestartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);
        </script>
    </body>
  `

  function Tic_tac_toe(){
   return (
    <div>
    <h2 onClick={() =>
    document.write(tic_tac_toe)}>Tic_tac_toe</h2>
    </div>
  )
  }

  const maze = `
  <html lang="en-GB">
    <head>
      <meta charset="utf-8">
      <style>
        $menuHeight: 65px+10px;
    @mixin transition {
        transition-property: background-color opacity;
        transition-duration: 0.2s;
        transition-timing-function: ease-in-out;
    }
    
    html,
    body {
        width: 100vw;
        height: 100vh;
        position: fixed;
        padding: 0;
        margin: 0;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    
    #mazeContainer {
        transition-property: opacity;
        transition-duration: 1s;
        transition-timing-function: linear;
        top: $menuHeight;
        opacity: 0;
        display: inline-block;
        background-color: rgba(0, 0, 0, 0.30);
        margin: auto;
    
        #mazeCanvas {
            margin: 0;
            display: block;
            border: solid 1px black;
        }
    }
    
    input,
    select {
        @include transition;
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.30);
        height: 45px;
        width: 150px;
        padding: 10px;
        border: none;
        border-radius: 5px;
        color: white;
        display: inline-block;
        font-size: 15px;
        text-align: center;
        text-decoration: none;
        appearance: none;
        &:hover {
            background-color: rgba(0, 0, 0, 0.70);
        }
        &:active {
            background-color: black;
        }
        &:focus {
            outline: none;
        }
    }
    
    
    .custom-select {
        display: inline-block;
        select {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAh0lEQVQ4T93TMQrCUAzG8V9x8QziiYSuXdzFC7h4AcELOPQAdXYovZCHEATlgQV5GFTe1ozJlz/kS1IpjKqw3wQBVyy++JI0y1GTe7DCBbMAckeNIQKk/BanALBB+16LtnDELoMcsM/BESDlz2heDR3WePwKSLo5eoxz3z6NNcFD+vu3ij14Aqz/DxGbKB7CAAAAAElFTkSuQmCC');
            background-repeat: no-repeat;
            background-position: 125px center;
        }
    }
    
    #Message-Container {
        visibility: hidden;
        color: white;
        display: block;
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.30);
        z-index: 1;
        #message {
            width: 300px;
            height: 300px;
            position: fixed;
            top: 50%;
            left: 50%;
            margin-left: -150px;
            margin-top: -150px;
        }
    }
    
    #page {
        font-family: "Segoe UI", Arial, sans-serif;
        text-align: center;
        height: auto;
        width: auto;
        margin: auto;
        #menu {
            margin: auto;
            padding: 10px;
            height: 65px;
            box-sizing: border-box;
            h1 {
                margin: 0;
                margin-bottom: 10px;
                font-weight: 600;
                font-size: 3.2rem;
            }
        }
        #view {
            position: absolute;
            top:65px;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: auto;
               
        }
    }
    
    .border {
        border: 1px black solid;
        border-radius: 5px;
    }
    
    
    
    #gradient {
        z-index: -1;
        position: fixed;
        top: 0;
        bottom: 0;
        width: 100vw;
        height: 100vh;
        color: #fff;
        background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
        background-size: 400% 400%;
        animation: Gradient 15s ease infinite;
    }
    
    @keyframes Gradient {
        0% {
            background-position: 0% 50%
        }
        50% {
            background-position: 100% 50%
        }
        100% {
            background-position: 0% 50%
        }
    }
    
     /* Extra small devices (phones, 600px and down) */
     @media only screen and (max-width: 400px) {
         input, select{
             width: 120px;
         }
     }
    
      </style>
      <body>
        <div id="gradient"></div>
        <div id="page">
          <div id="Message-Container">
            <div id="message">
              <h1>Congratulations!</h1>
              <p>You are done.</p>
              <p id="moves"></p>
              <input id="okBtn" type="button" onclick="toggleVisablity('Message-Container')" value="Cool!" />
            </div>
          </div>
          <div id="menu">
            <div class="custom-select">
              <select id="diffSelect">
                        <option value="10">Easy</option>
                        <option value="15">Medium</option>
                        <option value="25">Hard</option>
                        <option value="38">Extreme</option>                                      
                    </select>
            </div>
            <input id="startMazeBtn" type="button" onclick="makeMaze()" value="Start" />
          </div>
          <div id="view">
            <div id="mazeContainer">
              <canvas id="mazeCanvas" class="border" height="1100" width="1100"></canvas>
            </div>
          </div>
        </div>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery.touchswipe/1.6.18/jquery.touchSwipe.min.js"></script>
        <script>
          function rand(max) {
      return Math.floor(Math.random() * max);
    }
    
    function shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }
    
    function changeBrightness(factor, sprite) {
      var virtCanvas = document.createElement("canvas");
      virtCanvas.width = 500;
      virtCanvas.height = 500;
      var context = virtCanvas.getContext("2d");
      context.drawImage(sprite, 0, 0, 500, 500);
    
      var imgData = context.getImageData(0, 0, 500, 500);
    
      for (let i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] = imgData.data[i] * factor;
        imgData.data[i + 1] = imgData.data[i + 1] * factor;
        imgData.data[i + 2] = imgData.data[i + 2] * factor;
      }
      context.putImageData(imgData, 0, 0);
    
      var spriteOutput = new Image();
      spriteOutput.src = virtCanvas.toDataURL();
      virtCanvas.remove();
      return spriteOutput;
    }
    
    function displayVictoryMess(moves) {
      document.getElementById("moves").innerHTML = "You Moved " + moves + " Steps.";
      toggleVisablity("Message-Container");  
    }
    
    function toggleVisablity(id) {
      if (document.getElementById(id).style.visibility == "visible") {
        document.getElementById(id).style.visibility = "hidden";
      } else {
        document.getElementById(id).style.visibility = "visible";
      }
    }
    
    function Maze(Width, Height) {
      var mazeMap;
      var width = Width;
      var height = Height;
      var startCoord, endCoord;
      var dirs = ["n", "s", "e", "w"];
      var modDir = {
        n: {
          y: -1,
          x: 0,
          o: "s"
        },
        s: {
          y: 1,
          x: 0,
          o: "n"
        },
        e: {
          y: 0,
          x: 1,
          o: "w"
        },
        w: {
          y: 0,
          x: -1,
          o: "e"
        }
      };
    
      this.map = function() {
        return mazeMap;
      };
      this.startCoord = function() {
        return startCoord;
      };
      this.endCoord = function() {
        return endCoord;
      };
    
      function genMap() {
        mazeMap = new Array(height);
        for (y = 0; y < height; y++) {
          mazeMap[y] = new Array(width);
          for (x = 0; x < width; ++x) {
            mazeMap[y][x] = {
              n: false,
              s: false,
              e: false,
              w: false,
              visited: false,
              priorPos: null
            };
          }
        }
      }
    
      function defineMaze() {
        var isComp = false;
        var move = false;
        var cellsVisited = 1;
        var numLoops = 0;
        var maxLoops = 0;
        var pos = {
          x: 0,
          y: 0
        };
        var numCells = width * height;
        while (!isComp) {
          move = false;
          mazeMap[pos.x][pos.y].visited = true;
    
          if (numLoops >= maxLoops) {
            shuffle(dirs);
            maxLoops = Math.round(rand(height / 8));
            numLoops = 0;
          }
          numLoops++;
          for (index = 0; index < dirs.length; index++) {
            var direction = dirs[index];
            var nx = pos.x + modDir[direction].x;
            var ny = pos.y + modDir[direction].y;
    
            if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
              //Check if the tile is already visited
              if (!mazeMap[nx][ny].visited) {
                //Carve through walls from this tile to next
                mazeMap[pos.x][pos.y][direction] = true;
                mazeMap[nx][ny][modDir[direction].o] = true;
    
                //Set Currentcell as next cells Prior visited
                mazeMap[nx][ny].priorPos = pos;
                //Update Cell position to newly visited location
                pos = {
                  x: nx,
                  y: ny
                };
                cellsVisited++;
                //Recursively call this method on the next tile
                move = true;
                break;
              }
            }
          }
    
          if (!move) {
            //  If it failed to find a direction,
            //  move the current position back to the prior cell and Recall the method.
            pos = mazeMap[pos.x][pos.y].priorPos;
          }
          if (numCells == cellsVisited) {
            isComp = true;
          }
        }
      }
    
      function defineStartEnd() {
        switch (rand(4)) {
          case 0:
            startCoord = {
              x: 0,
              y: 0
            };
            endCoord = {
              x: height - 1,
              y: width - 1
            };
            break;
          case 1:
            startCoord = {
              x: 0,
              y: width - 1
            };
            endCoord = {
              x: height - 1,
              y: 0
            };
            break;
          case 2:
            startCoord = {
              x: height - 1,
              y: 0
            };
            endCoord = {
              x: 0,
              y: width - 1
            };
            break;
          case 3:
            startCoord = {
              x: height - 1,
              y: width - 1
            };
            endCoord = {
              x: 0,
              y: 0
            };
            break;
        }
      }
    
      genMap();
      defineStartEnd();
      defineMaze();
    }
    
    function DrawMaze(Maze, ctx, cellsize, endSprite = null) {
      var map = Maze.map();
      var cellSize = cellsize;
      var drawEndMethod;
      ctx.lineWidth = cellSize / 40;
    
      this.redrawMaze = function(size) {
        cellSize = size;
        ctx.lineWidth = cellSize / 50;
        drawMap();
        drawEndMethod();
      };
    
      function drawCell(xCord, yCord, cell) {
        var x = xCord * cellSize;
        var y = yCord * cellSize;
    
        if (cell.n == false) {
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x + cellSize, y);
          ctx.stroke();
        }
        if (cell.s === false) {
          ctx.beginPath();
          ctx.moveTo(x, y + cellSize);
          ctx.lineTo(x + cellSize, y + cellSize);
          ctx.stroke();
        }
        if (cell.e === false) {
          ctx.beginPath();
          ctx.moveTo(x + cellSize, y);
          ctx.lineTo(x + cellSize, y + cellSize);
          ctx.stroke();
        }
        if (cell.w === false) {
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x, y + cellSize);
          ctx.stroke();
        }
      }
    
      function drawMap() {
        for (x = 0; x < map.length; x++) {
          for (y = 0; y < map[x].length; y++) {
            drawCell(x, y, map[x][y]);
          }
        }
      }
    
      function drawEndFlag() {
        var coord = Maze.endCoord();
        var gridSize = 4;
        var fraction = cellSize / gridSize - 2;
        var colorSwap = true;
        for (let y = 0; y < gridSize; y++) {
          if (gridSize % 2 == 0) {
            colorSwap = !colorSwap;
          }
          for (let x = 0; x < gridSize; x++) {
            ctx.beginPath();
            ctx.rect(
              coord.x * cellSize + x * fraction + 4.5,
              coord.y * cellSize + y * fraction + 4.5,
              fraction,
              fraction
            );
            if (colorSwap) {
              ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
            } else {
              ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
            }
            ctx.fill();
            colorSwap = !colorSwap;
          }
        }
      }
    
      function drawEndSprite() {
        var offsetLeft = cellSize / 50;
        var offsetRight = cellSize / 25;
        var coord = Maze.endCoord();
        ctx.drawImage(
          endSprite,
          2,
          2,
          endSprite.width,
          endSprite.height,
          coord.x * cellSize + offsetLeft,
          coord.y * cellSize + offsetLeft,
          cellSize - offsetRight,
          cellSize - offsetRight
        );
      }
    
      function clear() {
        var canvasSize = cellSize * map.length;
        ctx.clearRect(0, 0, canvasSize, canvasSize);
      }
    
      if (endSprite != null) {
        drawEndMethod = drawEndSprite;
      } else {
        drawEndMethod = drawEndFlag;
      }
      clear();
      drawMap();
      drawEndMethod();
    }
    
    function Player(maze, c, _cellsize, onComplete, sprite = null) {
      var ctx = c.getContext("2d");
      var drawSprite;
      var moves = 0;
      drawSprite = drawSpriteCircle;
      if (sprite != null) {
        drawSprite = drawSpriteImg;
      }
      var player = this;
      var map = maze.map();
      var cellCoords = {
        x: maze.startCoord().x,
        y: maze.startCoord().y
      };
      var cellSize = _cellsize;
      var halfCellSize = cellSize / 2;
    
      this.redrawPlayer = function(_cellsize) {
        cellSize = _cellsize;
        drawSpriteImg(cellCoords);
      };
    
      function drawSpriteCircle(coord) {
        ctx.beginPath();
        ctx.fillStyle = "yellow";
        ctx.arc(
          (coord.x + 1) * cellSize - halfCellSize,
          (coord.y + 1) * cellSize - halfCellSize,
          halfCellSize - 2,
          0,
          2 * Math.PI
        );
        ctx.fill();
        if (coord.x === maze.endCoord().x && coord.y === maze.endCoord().y) {
          onComplete(moves);
          player.unbindKeyDown();
        }
      }
    
      function drawSpriteImg(coord) {
        var offsetLeft = cellSize / 50;
        var offsetRight = cellSize / 25;
        ctx.drawImage(
          sprite,
          0,
          0,
          sprite.width,
          sprite.height,
          coord.x * cellSize + offsetLeft,
          coord.y * cellSize + offsetLeft,
          cellSize - offsetRight,
          cellSize - offsetRight
        );
        if (coord.x === maze.endCoord().x && coord.y === maze.endCoord().y) {
          onComplete(moves);
          player.unbindKeyDown();
        }
      }
    
      function removeSprite(coord) {
        var offsetLeft = cellSize / 50;
        var offsetRight = cellSize / 25;
        ctx.clearRect(
          coord.x * cellSize + offsetLeft,
          coord.y * cellSize + offsetLeft,
          cellSize - offsetRight,
          cellSize - offsetRight
        );
      }
    
      function check(e) {
        var cell = map[cellCoords.x][cellCoords.y];
        moves++;
        switch (e.keyCode) {
          case 65:
          case 37: // west
            if (cell.w == true) {
              removeSprite(cellCoords);
              cellCoords = {
                x: cellCoords.x - 1,
                y: cellCoords.y
              };
              drawSprite(cellCoords);
            }
            break;
          case 87:
          case 38: // north
            if (cell.n == true) {
              removeSprite(cellCoords);
              cellCoords = {
                x: cellCoords.x,
                y: cellCoords.y - 1
              };
              drawSprite(cellCoords);
            }
            break;
          case 68:
          case 39: // east
            if (cell.e == true) {
              removeSprite(cellCoords);
              cellCoords = {
                x: cellCoords.x + 1,
                y: cellCoords.y
              };
              drawSprite(cellCoords);
            }
            break;
          case 83:
          case 40: // south
            if (cell.s == true) {
              removeSprite(cellCoords);
              cellCoords = {
                x: cellCoords.x,
                y: cellCoords.y + 1
              };
              drawSprite(cellCoords);
            }
            break;
        }
      }
    
      this.bindKeyDown = function() {
        window.addEventListener("keydown", check, false);
    
        $("#view").swipe({
          swipe: function(
            event,
            direction,
            distance,
            duration,
            fingerCount,
            fingerData
          ) {
            console.log(direction);
            switch (direction) {
              case "up":
                check({
                  keyCode: 38
                });
                break;
              case "down":
                check({
                  keyCode: 40
                });
                break;
              case "left":
                check({
                  keyCode: 37
                });
                break;
              case "right":
                check({
                  keyCode: 39
                });
                break;
            }
          },
          threshold: 0
        });
      };
    
      this.unbindKeyDown = function() {
        window.removeEventListener("keydown", check, false);
        $("#view").swipe("destroy");
      };
    
      drawSprite(maze.startCoord());
    
      this.bindKeyDown();
    }
    
    var mazeCanvas = document.getElementById("mazeCanvas");
    var ctx = mazeCanvas.getContext("2d");
    var sprite;
    var finishSprite;
    var maze, draw, player;
    var cellSize;
    var difficulty;
    // sprite.src = 'media/sprite.png';
    
    window.onload = function() {
      let viewWidth = $("#view").width();
      let viewHeight = $("#view").height();
      if (viewHeight < viewWidth) {
        ctx.canvas.width = viewHeight - viewHeight / 100;
        ctx.canvas.height = viewHeight - viewHeight / 100;
      } else {
        ctx.canvas.width = viewWidth - viewWidth / 100;
        ctx.canvas.height = viewWidth - viewWidth / 100;
      }
    
      //Load and edit sprites
      var completeOne = false;
      var completeTwo = false;
      var isComplete = () => {
        if(completeOne === true && completeTwo === true)
           {
             console.log("Runs");
             setTimeout(function(){
               makeMaze();
             }, 500);         
           }
      };
      sprite = new Image();
      sprite.src =
        "https://image.ibb.co/dr1HZy/Pf_RWr3_X_Imgur.png" +
        "?" +
        new Date().getTime();
      sprite.setAttribute("crossOrigin", " ");
      sprite.onload = function() {
        sprite = changeBrightness(1.2, sprite);
        completeOne = true;
        console.log(completeOne);
        isComplete();
      };
    
      finishSprite = new Image();
      finishSprite.src = "https://image.ibb.co/b9wqnJ/i_Q7m_U25_Imgur.png"+
      "?" +
      new Date().getTime();
      finishSprite.setAttribute("crossOrigin", " ");
      finishSprite.onload = function() {
        finishSprite = changeBrightness(1.1, finishSprite);
        completeTwo = true;
        console.log(completeTwo);
        isComplete();
      };
      
    };
    
    window.onresize = function() {
      let viewWidth = $("#view").width();
      let viewHeight = $("#view").height();
      if (viewHeight < viewWidth) {
        ctx.canvas.width = viewHeight - viewHeight / 100;
        ctx.canvas.height = viewHeight - viewHeight / 100;
      } else {
        ctx.canvas.width = viewWidth - viewWidth / 100;
        ctx.canvas.height = viewWidth - viewWidth / 100;
      }
      cellSize = mazeCanvas.width / difficulty;
      if (player != null) {
        draw.redrawMaze(cellSize);
        player.redrawPlayer(cellSize);
      }
    };
    
    function makeMaze() {
      //document.getElementById("mazeCanvas").classList.add("border");
      if (player != undefined) {
        player.unbindKeyDown();
        player = null;
      }
      var e = document.getElementById("diffSelect");
      difficulty = e.options[e.selectedIndex].value;
      cellSize = mazeCanvas.width / difficulty;
      maze = new Maze(difficulty, difficulty);
      draw = new DrawMaze(maze, ctx, cellSize, finishSprite);
      player = new Player(maze, mazeCanvas, cellSize, displayVictoryMess, sprite);
      if (document.getElementById("mazeContainer").style.opacity < "100") {
        document.getElementById("mazeContainer").style.opacity = "100";
      }
    }
    
        </script>
      </body>
    </html>
  `
  function Maze(){
   return (
    <div>
    <h2 onClick={() =>
    document.write(maze)}>Maze</h2>
    </div>
  )
  }

  const calculator = `
      <html>
    <head>
    <style>
    html {
      font-size: 62.5%;
      box-sizing: border-box;
    }
    
    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }
    
    .calculator {
      border: 1px solid #ccc;
      border-radius: 5px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 400px;
    }
    
    .calculator-screen {
      width: 100%;
      font-size: 5rem;
      height: 80px;
      border: none;
      background-color: #252525;
      color: #fff;
      text-align: right;
      padding-right: 20px;
      padding-left: 10px;
    }
    
    button {
      height: 60px;
      background-color: #fff;
      border-radius: 3px;
      border: 1px solid #c4c4c4;
      background-color: transparent;
      font-size: 2rem;
      color: #333;
      background-image: linear-gradient(to bottom,transparent,transparent 50%,rgba(0,0,0,.04));
      box-shadow: inset 0 0 0 1px rgba(255,255,255,.05), inset 0 1px 0 0 rgba(255,255,255,.45), inset 0 -1px 0 0 rgba(255,255,255,.15), 0 1px 0 0 rgba(255,255,255,.15);
      text-shadow: 0 1px rgba(255,255,255,.4);
    }
    
    button:hover {
      background-color: #eaeaea;
    }
    
    .operator {
      color: #337cac;
    }
    
    .all-clear {
      background-color: #f0595f;
      border-color: #b0353a;
      color: #fff;
    }
    
    .all-clear:hover {
      background-color: #f17377;
    }
    
    .equal-sign {
      background-color: #2e86c0;
      border-color: #337cac;
      color: #fff;
      height: 100%;
      grid-area: 2 / 4 / 6 / 5;
    }
    
    .equal-sign:hover {
      background-color: #4e9ed4;
    }
    
    .calculator-keys {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 20px;
      padding: 20px;
    }
    </style>
    </head>
    <body>
    <div class="calculator">
    
      <input type="text" class="calculator-screen" value="" disabled />
      
      <div class="calculator-keys">
        
        <button type="button" class="operator" value="+">+</button>
        <button type="button" class="operator" value="-">-</button>
        <button type="button" class="operator" value="*">&times;</button>
        <button type="button" class="operator" value="/">&divide;</button>
    
        <button type="button" value="7">7</button>
        <button type="button" value="8">8</button>
        <button type="button" value="9">9</button>
    
    
        <button type="button" value="4">4</button>
        <button type="button" value="5">5</button>
        <button type="button" value="6">6</button>
    
    
        <button type="button" value="1">1</button>
        <button type="button" value="2">2</button>
        <button type="button" value="3">3</button>
    
    
        <button type="button" value="0">0</button>
        <button type="button" class="decimal" value=".">.</button>
        <button type="button" class="all-clear" value="all-clear">AC</button>
    
        <button type="button" class="equal-sign operator" value="=">=</button>
    
      </div>
    </div>
    <script>
    const calculator = {
      displayValue: '0',
      firstOperand: null,
      waitingForSecondOperand: false,
      operator: null,
    };
    
    function inputDigit(digit) {
      const { displayValue, waitingForSecondOperand } = calculator;
    
      if (waitingForSecondOperand === true) {
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
      } else {
        calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
      }
    }
    
    function inputDecimal(dot) {
      if (calculator.waitingForSecondOperand === true) {
          calculator.displayValue = "0."
        calculator.waitingForSecondOperand = false;
        return
      }
    
      if (!calculator.displayValue.includes(dot)) {
        calculator.displayValue += dot;
      }
    }
    
    function handleOperator(nextOperator) {
      const { firstOperand, displayValue, operator } = calculator
      const inputValue = parseFloat(displayValue);
      
      if (operator && calculator.waitingForSecondOperand)  {
        calculator.operator = nextOperator;
        return;
      }
    
    
      if (firstOperand == null && !isNaN(inputValue)) {
        calculator.firstOperand = inputValue;
      } else if (operator) {
        const result = calculate(firstOperand, inputValue, operator);
    
        calculator.displayValue = \`\${parseFloat(result.toFixed(7))}\`;
        calculator.firstOperand = result;
      }
    
      calculator.waitingForSecondOperand = true;
      calculator.operator = nextOperator;
    }
    
    function calculate(firstOperand, secondOperand, operator) {
      if (operator === '+') {
        return firstOperand + secondOperand;
      } else if (operator === '-') {
        return firstOperand - secondOperand;
      } else if (operator === '*') {
        return firstOperand * secondOperand;
      } else if (operator === '/') {
        return firstOperand / secondOperand;
      }
    
      return secondOperand;
    }
    
    function resetCalculator() {
      calculator.displayValue = '0';
      calculator.firstOperand = null;
      calculator.waitingForSecondOperand = false;
      calculator.operator = null;
    }
    
    function updateDisplay() {
      const display = document.querySelector('.calculator-screen');
      display.value = calculator.displayValue;
    }
    
    updateDisplay();
    
    const keys = document.querySelector('.calculator-keys');
    keys.addEventListener('click', event => {
      const { target } = event;
      const { value } = target;
      if (!target.matches('button')) {
        return;
      }
    
      switch (value) {
        case '+':
        case '-':
        case '*':
        case '/':
        case '=':
          handleOperator(value);
          break;
        case '.':
          inputDecimal(value);
          break;
        case 'all-clear':
          resetCalculator();
          break;
        default:
          if (Number.isInteger(parseFloat(value))) {
            inputDigit(value);
          }
      }
    
      updateDisplay();
    });
    </script>
    </body>
    </html>
  `

  function Calculator(){
   return (
    <div>
    <h2 onClick={() =>
    document.write(calculator)}>Calculator</h2>
    </div>
  )
  }

  const solitaire = `
<html>
<head>
        <meta name="viewport" id="metaWidth" content="width=530,user-scalable=no">
        <meta name="theme-color" id="metaColor" content="#ffffff" />
        <link href="https://fonts.googleapis.com/css?family=Raleway:200,800" rel="stylesheet">
    <title>Solitaire</title>
    <style>
                html {
            margin: 0;
            padding: 0;
            font-family: 'Raleway','Century Gothic', sans-serif;
            background-image: linear-gradient(to bottom, #9b4f4f, #703939);
        }
        body {
            padding: 0;
            margin: 0 auto;
            text-align: center;
            color: #ccbdbd;
        }
        @keyframes flipover {
            0% {
                top: -10px;
                transform: scaleX(0.001);
            }
            100% {
                top: 0;
                transform: scaleX(1);
            }
        }
        @keyframes accordion {
            0% {
                transform: scaleX(0.9);
            }
            100% {
                transform: scaleX(1);
            }
        }
        @keyframes contract {
            0% {
                transform: scaleY(0.9);
            }
            100% {
                transform: scaleY(1);
            }
        }
        @keyframes expand {
            0% {
                transform: scaleY(1.1);
            }
            100% {
                transform: scaleY(1);
            }
        }
        @keyframes slideright {
            0% {
                left: -80px;
                transform: scaleX(0.001);
            }
            100% {
                left: 0;
                transform: scaleX(1);
            }
        }
        @keyframes slidedown {
            0% {
                top: -80px;
                transform: scaleY(0.001);
            }
            100% {
                top: 0;
                transform: scaleY(1);
            }
        }
        @keyframes glow {
            0% {
                margin-top: -76px;
                transform: scale(1);
                box-shadow: 0 0 15px -5px rgba(135, 65, 65, 0.5);
            }
            50% {
                margin-top: -86px;
                transform: scale(1.1);
                box-shadow:0 0 15px 5px rgba(135, 65, 65, 0.5);
            }
            100% {
                margin-top: -76px;
                transform: scale(1);
                box-shadow: 0 0 15px -15px rgba(135, 65, 65, 0.5);
            }
        }
        .flipover {
            animation: flipover 0.5s 1;
        }
        .contract {
            animation: contract 0.5s 1;
        }
        .expand {
            animation: expand 0.5s 1;
        }
        .board {
            min-height: 100%;
        }
        .board .inner {
            width: 800px;
            max-width: 100%;
            padding: 20px 0 10px 0;
            margin: auto;
        }
        .board.desktop {
            padding-top: 65px;
        }
        .board.desktop .inner {
            width: 535px;
        }
        .board.desktop .nav-buttons {
            top: 0;
            bottom: auto;
            left: 0;
            right: 0;
            z-index: 88888;
            width: 100%;
            max-width: 100%;
        }
        .board.desktop .nav-buttons .in {
            width: 510px;
            max-width: 96%;
            padding: 10px 2%;
            margin: auto;
            position: relative;
            z-index: 88888;
        }
        .board.desktop .nav-buttons .toggle,
        .board.mobile.portrait .nav-buttons .toggle {
            width: 60px;
            height: 25px;
        }
        .board.desktop .nav-buttons .toggle label,
        .board.mobile.portrait .nav-buttons .toggle label {
            height: 25px;
        }
        .board.mobile.landscape .nav-buttons .toggle {
            height: 60px;
            width: 25px;
        }
        .board.mobile.landscape .nav-buttons .toggle label {
            height: 60px;
        }
        .board.desktop .nav-buttons .in:after {
            content: "";
            display: block;
            clear: both;
        }
        .board.desktop .nav-buttons .in button.new,
        .board.mobile.portrait .nav-buttons .in button.new {
            float: right;
        }
        .board.desktop .nav-buttons .in button.back,
        .board.mobile.portrait .nav-buttons .in button.back {
            float: left;
            position: static;
        }
        .board.desktop .nav-buttons .in button.new,
        .board.mobile.portrait .nav-buttons .in button.new {
            float: right;
        }
        .board.desktop .nav-buttons .in button.back,
        .board.mobile.portrait .nav-buttons .in button.back {
            position: static;
            float: left;
        }
        .board.desktop .nav-buttons input:checked + label:after,
        .board.mobile.portrait .nav-buttons input:checked + label:after {
            float: right;
            margin: 0;
        }
        .board.mobile.landscape .nav-buttons input:checked + label:after {
            margin: 35px 0 0;
        }
        .board.desktop .nav-buttons .in .toggle:before,
        .board.mobile.portrait .nav-buttons .in .toggle:before {
            top: 4px;
            left: -25px;
        }
        .board.desktop .nav-buttons .in .toggle:after,
        .board.mobile.portrait .nav-buttons .in .toggle:after {
            bottom: 4px;
            right: -25px;
        }
        .board.mobile.landscape .nav-buttons .in .toggle:before,
        .board.mobile.landscape .nav-buttons .in .toggle:after {
            left: 4px;
        }
        .board.mobile.landscape .nav-buttons .in .toggle:before {
            top: -25px;
        }
        .board.mobile.landscape .nav-buttons .in .toggle:after {
            bottom: -25px;
        }
        /* dark */
        .board.dark {
            background-image: linear-gradient(to top, #0f0c0c, #251e1e);
        }
        .board.dark .cd.f {
            background-color: #412020;
            border-color: #2e2626;
            background-image: repeating-linear-gradient(55deg, transparent, transparent 18px, #4b3e3e 19px, transparent 20px), repeating-linear-gradient(-55deg, transparent, transparent 18px, #161212 19px, transparent 20px), linear-gradient(to bottom, #221c1c, #4d3e3e);
        }
        .board.dark .closet {
            background-color: #151111;
        }
        .board.dark.mobile .nav-buttons .in,
        .board.dark.desktop .nav-buttons {
            background-color: #302727;
        }
        .board.dark .nav-buttons button {
            background-color: #0f0c0c;
            color: #999999;
        }
        .board.dark .cd.s,
        .board.dark .cd.c {
            color: #999999;
            background-color: #181818;
            background-image: linear-gradient(to bottom, #272727, #373737);
            border-color: #414141;
        }
        .board.dark .cd.h,
        .board.dark .cd.d {
            color: #ee5555;
            background-color: #640000;
            background-image: linear-gradient(to bottom, #580000, #741212);
            border-color: #740808;
        }
        /* light */
        .board.light {
            background-image: linear-gradient(to top, #ce9d9d, #e9e3e3);
            color: #4b0707;
        }
        .board.light .cd.f {
            background-color: #999999;
            border-color: #e9dbdb;
            background-image: repeating-linear-gradient(55deg, transparent, transparent 18px, #ffffff 19px, transparent 20px), repeating-linear-gradient(-55deg, transparent, transparent 18px, #cccccc 19px, transparent 20px), linear-gradient(to bottom, #d3c2c2, #f0e4e4);
        }
        .board.light .closet {
            background-color: #f6e5e5;
        }
        .board.light.mobile .nav-buttons .in,
        .board.light.desktop .nav-buttons {
            background-color: #dcc0c0;
        }
        .board.light .nav-buttons button {
            background-color: #e6dbdb;
            color: #000000;
        }
        .board.light .cd.s,
        .board.light .cd.c {
            color: #080808;
            background-color: #ffffff;
            background-image: linear-gradient(to bottom, #ffffff, #a7a7a7);
            border-color: #9c9c9c;
        }
        .board.light .cd.h,
        .board.light .cd.d {
            color: #9e0000;
            background-color: #fde3e3;
            background-image: linear-gradient(to bottom, #ffe5e5, #ff8787);
            border-color: #ff6c6c;
        }
        /* end of colors */
        h1 {
            padding: 100px 0 25px;
            font-weight: 200;
            font-size: 3em;
            margin: 0;
        }
        .won button {
            color: #eeeeee;
            background-color: #cc0000;
        }
        .won button:hover {
            color: #cccccc;
            background-color: maroon;
        }
        button {
            border: 0;
            padding: 10px 20px;
            font-weight: bold;
            font-family: 'Raleway', 'Century Gothic', sans-serif;
            border-radius: 8px;
            font-size: 18px;
            cursor: pointer;
        }
        .start-container button {
            background-color: #333333;
            color: #eeeeee;
            min-width: 200px;
            margin: 0 auto 20px;
        }
        button.resumer {
            background-color: #d6b6b6;
            color: #190101;
        }
        button:hover {
            background-color: #cc0000;
        }
        .nav-buttons {
            position: fixed;
            bottom: 0;
            top: 0;
            max-width: 100%;
            width: 800px;
            text-align: center;
        }
        .nav-buttons .in {
            z-index: 200000;
            width: 9%;
            padding: 10px;
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
        }
        .board.mobile.portrait .nav-buttons {
            top: auto;
            width: auto;
            left: 0;
            right: 0;
        }
        .board.mobile.portrait .nav-buttons .in {
            width: auto;
            position: relative;
        }
        .nav-buttons .in:after {
            clear: both;
            content: "";
            display: block;
        }
        .nav-buttons .toggle {
            display: block;
            border-radius: 30px;
            width: 25px;
            height: 60px;
            position: absolute;
            margin: auto;
            background: rgba(135, 64, 74, 0.49);
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
        }
        .nav-buttons .toggle:before,
        .nav-buttons .toggle:after {
            content: "";
            display: block;
            position: absolute;
            border-radius: 20px;
            height: 15px;
            width: 15px;
        }
        .nav-buttons .toggle:before {
            background: #ffffff;
        }
        .nav-buttons .toggle:after {
            background: #000000;
        }
        .nav-buttons input {
            position: absolute;
            opacity: 0;
            width: 0;
            height: 0;
        }
        .nav-buttons label {
            display: block;
            cursor: pointer;
        }
        .nav-buttons label:after {
            content: "";
            display: block;
            background: #853f3f;
            height: 25px;
            width: 25px;
            border-radius: 15px;
        }
        .nav-buttons button {
            font-weight: bold;
            padding: 10px 0;
            width: 50px;
        }
        .nav-buttons .back {
            position: absolute;
            bottom: 15px;
            margin: auto;
            left: 0;
            right: 0;
        }
        .numd {
            text-align: center;
            opacity: 0.4;
        }
        .numd.len10 .icon {
            width: 6px;
            height: 6px;
            margin: 2px;
        }
        .numd.len9 .icon {
            width: 6px;
            height: 6px;
            margin: 2px;
        }
        .numd.len8 .icon {
            width: 8px;
            height: 8px;
            margin: 2px;
        }
        .numd.len7 .icon {
            width: 8px;
            height: 8px;
            margin: 2px;
        }
        .numd.len6 .icon {
            width: 8px;
            height: 8px;
            margin: 7px 2px 1px;
        }
        .numd.len5 .icon {
            width: 8px;
            height: 8px;
            margin: 7px 2px 1px;
        }
        .numd.len4 .icon {
            width: 10px;
            height: 10px;
            margin: 2px;
        }
        .numd.len3 .icon {
            width: 8px;
            height: 8px;
            margin: 4px auto 0;
            display: block;
        }
        .numd.len2 .icon {
            width: 15px;
            height: 15px;
            margin: 9px 0px 1px 3px;
        }
        .numd.len1 .icon {
            width: 25px;
            height: 25px;
            margin: 7px auto 0;
        }
        .icon {
            display: inline-block;
            width: 15px;
            height: 15px;
        }
        .icon span {
            display: block;
        }
        .icon.diamond {
            transform: scaleX(0.7);
        }
        .icon.diamond span {
            width: 70%;
            height: 70%;
            margin-top: 21%;
            margin-left: 14%;
            transform: rotate(45deg);
        }
        .icon.heart .a,
        .icon.heart .b {
            border-radius: 50%;
            width: 50%;
            height: 52%;
            margin-top: 14%;
        }
        .icon.heart .a {
            float: left;
        }
        .icon.heart .b {
            float: right;
        }
        .icon.heart .c {
            clear: both;
            transform: rotate(45deg);
            width: 52%;
            height: 52%;
            margin-left: auto;
            margin-right: auto;
            position: relative;
            top: -28%;
        }
        .icon.spade .a,
        .icon.spade .b {
            border-radius: 50%;
            width: 43%;
            height: 50%;
            margin-top: 14%;
        }
        .icon.spade .c {
            transform: rotate(45deg);
            width: 55%;
            height: 55%;
            margin-left: auto;
            margin-right: auto;
            margin-top: 27%;
            margin-bottom: -44%;
        }
        .icon.spade .a {
            float: left;
        }
        .icon.spade .b {
            float: right;
        }
        .icon.spade .d {
            margin: 0 auto 0;
            width: 13%;
            height: 78%;
        }
        .icon.club .a,
        .icon.club .b,
        .icon.club .c {
            border-radius: 50%;
            width: 46%;
            height: 44%;
        }
        .icon.club .a {
            margin: 8% auto -13%;
        }
        .icon.club .b {
            float: left;
        }
        .icon.club .c {
            float: right;
        }
        .icon.club .d {
            margin: 0 auto 0;
            width: 15%;
            height: 70%;
        }
        .cd {
            overflow: hidden;
            font-weight: bold;
            padding: 3px;
            text-align: right;
            border: 5px solid #222222;
            margin: 5px;
            float: left;
            width: 40px;
            height: 60px;
            z-index: 999;
            cursor: pointer;
            position: relative;
            border-radius: 3px;
            user-select: none;
        }
        .cd * {
            pointer-events: none;
        }
        .icon.spade span,
        .icon.club span {
            background: #999999;
        }
        .icon.heart span,
        .icon.diamond span {
            background: #ee5555;
        }
        .cd p {
            float: left;
            padding: 0 0 5px;
        }
        .cd p,
        .cd h2 {
            margin: 0;
            line-height: 1;
        }
        .cd h2 {
            text-align: center;
            padding: 6px 0 0;
            font-size: 1.9em;
            font-weight: bold;
        }
        .cd hr {
            opacity: 0.5;
            margin: 0;
            border-width: 1px 0 0 0;
            border-style: solid;
            clear: both;
        }
        .cd i {
            display: inline-block;
            margin: 3px;
            height: 0;
            width: 0;
            border: 2px solid;
            border-radius: 50%;
        }
        .stack {
            padding-top: 70px;
            min-height: 70px;
            float: left;
            transform-origin: 0 0;
            background-size: 52px 74px;
            background-repeat: no-repeat;
            background-position: center 10px;
        }
        .board.dark .stack {
        background-image: linear-gradient(#312727, #221c1c);
        }
        .board.light .stack {
        background-image: linear-gradient(#e6dada, #e5d9d9);
        }
        .board.mobile.landscape .stack {
            width: 9.5%;
        }
        .board.desktop .stack,
        .board.mobile.portrait .stack {
            width: 14.2%;
        }
        .board.desktop .stacks,
        .board.mobile.portrait .stacks {
            clear: both;
            padding: 5px;
        }
        .stack .cd {
            margin-bottom: 0;
            margin-left: 9px;
            margin-top: -50px;
            box-shadow: 0px -3px 4px 1px rgba(0,0,0,0.25);
            transition: margin-top 0.5s;
        }
        .stack .cd.f {
            margin-top: -60px;
        }
        .stack.len8 .cd.f {
            margin-top: -65px;
        }
        .stack.len9 .cd.f {
            margin-top: -67px;
        }
        .stack.len10 .cd.f,
        .stack.len11 .cd.f,
        .stack.len12 .cd.f,
        .stack.len13 .cd.f,
        .stack.len14 .cd.f,
        .stack.len15 .cd.f,
        .stack.len16 .cd.f {
            margin-top: -70px;
        }
        .cd.f+.cd.a {
            margin-top: -64px;
        }
        .stack .cd.f:first-child,
        .stack .cd.a:first-child {
            margin-top: -60px
        }
        .board.mobile.landscape .refuse-pile {
            width: 9%;
            padding-top: 88px;
            padding-left: 1%;
            padding-bottom: 0;
            float: left;
            transform-origin: 0 0;
        }
        .board.mobile.landscape .refuse-pile .cd.f {
            float: left;
            margin-top: -77px;
            box-shadow: -3px -2px 4px -2px rgba(0,0,0,0.5);
        }
        .board.desktop .refuse-pile .cd.slide,
        .board.mobile.portrait .refuse-pile .cd.slide {
            animation: slideright 0.5s 1;
        }
        .board.mobile.landscape .refuse-pile .cd.slide {
            animation: slidedown 0.5s 1;
        }
        .board.desktop .refuse-pile.accordion,
        .board.mobile.portrait .refuse-pile.accordion {
            animation: accordion 0.5s 1;
            transform-origin: 0 0;
        }
        .board.desktop .refuse-pile,
        .board.mobile.portrait .refuse-pile {
            width: 185px;
            float: left;
            padding-top: 50px;
            padding-left: 2%;
        }
        .board.desktop .refuse-pile .cd,
        .board.desktop .refuse-pile .cd.f,
        .board.mobile.portrait .refuse-pile .cd,
        .board.mobile.portrait .refuse-pile .cd.f {
            margin-top: -50px;
            margin-bottom: 0;
        }
        .board.desktop .refuse-pile .cd,
        .board.mobile.portrait .refuse-pile .cd {
            float: right;
        }
        .board.desktop .refuse-pile.all .cd.f,
        .board.mobile.portrait .refuse-pile.all .cd.f {
            margin-left: -53.6px;
        }
        .board.desktop .refuse-pile .cd,
        .board.mobile.portrait .refuse-pile .cd {
            margin-right: 0;
            margin-top: -50px;
            box-shadow: 0px 0px 4px 1px rgba(0,0,0,0.5);
        }
        .closet {
            float: right;
            text-align: left;
            border-radius: 2px;
            width: 57px;
            height: 0px;
            padding: 81px 4px 5px;
            margin: 0 0 5px 0;
        }
        .board.mobile.landscape .closets-area {
            width: 10%;
            float: right;
            margin-right: 13%;
        }
        .board.desktop .closets-area,
        .board.mobile.portrait .closets-area {
            margin-right: 2%;
        }
        .board.desktop .closet,
        .board.mobile.portrait .closet {
            margin: 0 5px 0 0;
        }
        .closet .cd.glow {
            animation: glow 0.5s 1;
        }
        .closet .cd {
            margin: -76px 0 0;
        }
        .closet .cd:last-of-type {
            box-shadow: 0px 0px 4px 1px rgba(0,0,0,0.5);
        }
        .closet > .icon {
            pointer-events: none;
            text-align: center;
            height: 36px;
            position: absolute;
            width: 35px;
            line-height: 40px;
            margin: -58px 0 0 12px;
            font-size: 40px;
            opacity: 0.5;
        }
        .clear:after {
            content: "";
            display: block;
            clear: both;
        }
        .board.desktop .refuse-pile .cd.f,
        .board.mobile.portrait .refuse-pile .cd.f {
            float: left;
        }
        .board.desktop .refuse-pile.len24 .cd.f,
        .board.mobile.portrait .refuse-pile.len24 .cd.f {
            margin-left: -53.2px;
        }
        .board.desktop .refuse-pile.len23 .cd.f,
        .board.mobile.portrait .refuse-pile.len23 .cd.f {
            margin-left: -53.1px;
        }
        .board.desktop .refuse-pile.len22 .cd.f,
        .board.mobile.portrait .refuse-pile.len22 .cd.f {
            margin-left: -53px;
        }
        .board.desktop .refuse-pile.len21 .cd.f,
        .board.mobile.portrait .refuse-pile.len21 .cd.f {
            margin-left: -52.9px;
        }
        .board.desktop .refuse-pile.len20 .cd.f,
        .board.mobile.portrait .refuse-pile.len20 .cd.f {
            margin-left: -52.7px;
        }
        .board.desktop .refuse-pile.len19 .cd.f,
        .board.mobile.portrait .refuse-pile.len19 .cd.f {
            margin-left: -52.5px;
        }
        .board.desktop .refuse-pile.len18 .cd.f,
        .board.mobile.portrait .refuse-pile.len18 .cd.f {
            margin-left: -52.4px;
        }
        .board.desktop .refuse-pile.len17 .cd.f,
        .board.mobile.portrait .refuse-pile.len17 .cd.f {
            margin-left: -52px;
        }
        .board.desktop .refuse-pile.len16 .cd.f,
        .board.mobile.portrait .refuse-pile.len16 .cd.f {
            margin-left: -51.7px;
        }
        .board.desktop .refuse-pile.len15 .cd.f,
        .board.mobile.portrait .refuse-pile.len15 .cd.f {
            margin-left: -51.5px;
        }
        .board.desktop .refuse-pile.len14 .cd.f,
        .board.mobile.portrait .refuse-pile.len14 .cd.f {
            margin-left: -51px;
        }
        .board.desktop .refuse-pile.len13 .cd.f,
        .board.mobile.portrait .refuse-pile.len13 .cd.f {
            margin-left: -50.7px;
        }
        .board.desktop .refuse-pile.len12 .cd.f,
        .board.mobile.portrait .refuse-pile.len12 .cd.f {
            margin-left: -50px;
        }
        .board.desktop .refuse-pile.len11 .cd.f,
        .board.mobile.portrait .refuse-pile.len11 .cd.f {
            margin-left: -49.7px;
        }
        .board.desktop .refuse-pile.len10 .cd.f,
        .board.mobile.portrait .refuse-pile.len10 .cd.f {
            margin-left: -49px;
        }
        .board.desktop .refuse-pile.len9 .cd.f,
        .board.mobile.portrait .refuse-pile.len9 .cd.f {
            margin-left: -48px;
        }
        .board.desktop .refuse-pile.len8 .cd.f,
        .board.mobile.portrait .refuse-pile.len8 .cd.f {
            margin-left: -46px;
        }
        .board.desktop .refuse-pile.len7 .cd.f,
        .board.mobile.portrait .refuse-pile.len7 .cd.f {
            margin-left: -44px;
        }
        .board.desktop .refuse-pile.len6 .cd.f,
        .board.mobile.portrait .refuse-pile.len6 .cd.f {
            margin-left: -41px;
        }
        .board.desktop .refuse-pile.len5 .cd.f,
        .board.mobile.portrait .refuse-pile.len5 .cd.f {
            margin-left: -37px;
        }
        .board.desktop .refuse-pile.len4 .cd.f,
        .board.mobile.portrait .refuse-pile.len4 .cd.f {
            margin-left: -28px;
        }
        .board.desktop .refuse-pile.len3 .cd.f,
        .board.mobile.portrait .refuse-pile.len3 .cd.f {
            margin-left: 4px;
        }
        .board.desktop .refuse-pile.len2 .cd.f,
        .board.mobile.portrait .refuse-pile.len2 .cd.f {
            margin-left: 4px;
        }
        .board.desktop .refuse-pile .cd.f:first-child,
        .board.mobile.portrait .refuse-pile .cd.f:first-child {
            margin-left: 0;
        }
        @media (max-width: 505px) {
            .closets-area {
                clear: both;
            }
        }
    </style>
</head>
<body>
</body>
<script type="text/javascript">
    (function() {
    var cards = [];
    var suits = ['h', 's', 'c', 'd'];
    var displays = {
        n1: 'A',
        n11: 'J',
        n12: 'Q',
        n13: 'K'
    };
    var icons = {
        h: '<div class="icon heart"><span class="a"></span><span class="b"></span><span class="c"></span></div>',
        s: '<div class="icon spade"><span class="c"></span><span class="a"></span><span class="b"></span><span class="d"></span></div>',
        c: '<div class="icon club"><span class="a"></span><span class="b"></span><span class="c"></span><span class="d"></span></div>',
        d: '<div class="icon diamond"><span></span></div>'
    };
    var lastLocation = {};
    var activeCards = [];
    var currentGame = {};
    var priorGame = {};
    var hasStarted = false;
    function renderStartBoard() {
        if (getCookie('currentGame') !== null) {
            currentGame = JSON.parse(getCookie('currentGame'));
        }
        document.body.innerHTML = '<div id="start-container" class="start-container"><h1>Solitaire</h1><button id="startnew">New game</button><br>' + (getCookie('currentGame') !== null ? '<button id="resume-game" class="resumer">Resume previous</button>' : '') + '</div>';
    }
    function historyPush() {
        currentGame.steps = currentGame.steps + 1;
        priorGame = window.history.state;
        window.history.pushState(currentGame, null, currentGame.steps > 0 ? '#step' + currentGame.steps : null);
        document.cookie = 'color=' + (getCookie('color') ? getCookie('color') : 'dark');
        document.cookie = 'currentGame=' + JSON.stringify(currentGame);
        renderBoard();
        priorGame = currentGame;
    }
    function getCookie(cookie) {
        var cookies = document.cookie.split('; ');
        for (var co = 0; co < cookies.length; co++) {
            var ident = cookie + '=';
            if (cookies[co].indexOf(ident) === 0) {
                return cookies[co].replace(ident, '');
            }
        }
        return null;
    }
    function getAllIcons(n, s) {
        if (n < 11) {
            var htmls = '<div class="numd len' + n + '">';
            for (var b = 0; b < n; b++) {
                htmls += icons[s];
            }
            htmls += '</div>';
            return htmls;
        }
        return '<h2 class="numd">' + displays['n' + n] + '</h2>';
    }
    function strEndsWith(needle, haystack) {
        var needLen = needle.length;
        var hayLen = haystack.length;
        if (needLen < hayLen) {
            var lopped = haystack.slice(-needLen);
            if (needle === lopped) {
                return true;
            }
        }
        return false;
    }
    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
    function cardContents(n, s) {
        return '<p>' + (displays['n' + n] ? displays['n' + n] : n) + '</p>' + icons[s] + '<hr/>' + getAllIcons(n, s);
    }
    window.onhashchange = function(e) {
        if (window.history.state) {
            currentGame = window.history.state;
            renderBoard();
            if (strEndsWith('step1', e.newURL) && strEndsWith('step2', e.oldURL)) {
                alert('You have reached the beginning of this game!');
            } else if (strEndsWith('step1', e.oldURL)) {
                window.history.go(-28);
                renderStartBoard();
            }
        }
    };
    window.onresize = function() {
        if (hasStarted) {
            renderBoard();
        }
    };
    document.addEventListener('click', function(e) {
        if (e.target.id === 'startnew') {
            startNewGame();
            return false;
        } else if (e.target.id === 'new-game') {
            if (window.confirm("Close this game and start a new one?")) {
                startNewGame();
            }
            return false;
        } else if (e.target.id === 'resume-game') {
            historyPush();
            return false;
        } else if (e.target.id === 'back-button') {
            window.history.back();
            return false;
        } else if (e.target.id === 'color') {
            e.preventDefault();
            var thisColor = e.target.checked ? 'dark' : 'light';
            document.cookie = 'color=' + thisColor;
            renderBoard();
            return false;
        }
    });
    function renderCard(data, extraClass) {
        var newCard = document.createElement('div');
        newCard.data = data;
        newCard.className = 'cd ';
        newCard.ontouchstart = function(e) {
            e.preventDefault();
            startDrag(e);
            return false;
        };
        newCard.ontouchmove = function(e) {
            var lastPosX = e.changedTouches[0].clientX;
            var lastPosY = e.changedTouches[0].clientY;
            moveDrag(e, lastPosX, lastPosY);
        };
        newCard.ontouchend = function(e) {
            e.preventDefault();
            var lastPosX = e.changedTouches[0].pageX;
            var lastPosY = e.changedTouches[0].pageY;
            stopDrag(e, lastPosX, lastPosY);
            return false;
        };
        newCard.onmousedown = function(e) {
            startDrag(e);
        };
        newCard.onmousemove = function(e) {
            var lastPosX = e.clientX;
            var lastPosY = e.clientY;
            moveDrag(e, lastPosX, lastPosY);
        };
        newCard.onmouseup = function(e) {
            var lastPosX = e.pageX
            var lastPosY = e.pageY;
            stopDrag(e, lastPosX, lastPosY);
        };
        if (data.folded) {
            newCard.className = newCard.className + 'f';
        } else {
            newCard.className += data.s + ' n' + data.n + (data.accepting ? ' a' : '') + (extraClass ? extraClass : '');
            newCard.innerHTML = cardContents(data.n, data.s);
        }
        return newCard;
    }
    function startDrag(e) {
        activeCards = [];
        if (e.target.className.indexOf('cd') > -1 && !e.target.data.folded) {
            lastLocation = e.target.parentNode;
            activeCards.push(e.target);
            var grabberCard = activeCards[0].nextElementSibling;
            while (lastLocation.id.indexOf('stack') > -1 && grabberCard !== null) {
                activeCards.push(grabberCard);
                grabberCard = grabberCard.nextElementSibling;
            }
        } else if (e.target.className.indexOf('cd f') > -1 && e.target.parentNode.className.indexOf('refuse') > -1) {
            if (e.target.nextElementSibling) {
                var thisLast = currentGame.refuse[currentGame.refuse.length - 1];
                thisLast.folded = true;
                currentGame.refuse.pop();
                currentGame.refuse.unshift(thisLast);
            }
            currentGame.refuse[currentGame.refuse.length - 1].folded = false;
            activeCards = [];
            historyPush();
        }
    }
    function moveDrag(e, lastPosX, lastPosY) {
        if (activeCards.length > 0) {
            var left = lastPosX - 30;
            var top = lastPosY + 15;
            var zIndex = 999999;
            for (var ac = 0; ac < activeCards.length; ac++) {
                activeCards[ac].style = 'position: fixed; z-index: ' + zIndex + '; left: ' + left + 'px; top: ' + top + 'px';
                top = top + 20;
                zIndex = zIndex + 100;
            }
        }
    }
    function stopDrag(e, lastPosX, lastPosY) {
        var accepterNode = null;
        var giverNode = lastLocation.id;
        var successfulMove = false;
        if (activeCards.length > 0) {
            var movingSuit = activeCards[0].data.s;
            var movingNum = activeCards[0].data.n;
            var movingColor = activeCards[0].data.colr;
            var accepters = document.getElementsByClassName('a');
            for (var ac = 0; ac < accepters.length; ac++) {
                var accepter = accepters[ac];
                if (accepter.data && accepter.data.id == activeCards[0].data.id) {
                    continue;
                }
                var aX0 = accepter.offsetLeft;
                var aX1 = aX0 + accepter.offsetWidth;
                var aY0 = accepter.offsetTop;
                var aY1 = aY0 + accepter.offsetHeight;
                var isStack = accepter.className.indexOf('stack') > -1 && accepter.children.length === 0;
                var isCloset = accepter.className.indexOf('closet') > -1 && accepter.children.length === 1;
                var isStackCard = accepter.parentNode.className.indexOf('stack') > -1;
                var isClosetCard = accepter.parentNode.className.indexOf('closet') > -1;
                if (lastPosX >= aX0 && lastPosX <= aX1 && lastPosY >= aY0 && lastPosY <= aY1) {
                    if (isStack) {
                        if (movingNum === 13) {
                            accepterNode = currentGame.stacks[accepter.id];
                            successfulMove = true;
                            break;
                        }
                    } else if (isCloset) {
                        var accepterSuit = accepter.getAttribute('data-suit');
                        if (accepterSuit === movingSuit && movingNum === 1 && activeCards.length === 1) {
                            accepterNode = currentGame.closets[accepter.id];
                            successfulMove = true;
                            break;
                        }
                    } else if (isClosetCard) {
                        var accepterSuit = accepter.data.s;
                        var accepterNum = accepter.data.n;
                        if (accepterSuit === movingSuit && accepterNum + 1 === movingNum && activeCards.length === 1) {
                            accepterNode = currentGame.closets[accepter.parentNode.id];
                            successfulMove = true;
                            break;
                        }
                    } else if (isStackCard) {
                        var accepterNum = accepter.data.n;
                        var accepterColor = accepter.data.colr;
                        if (accepterColor !== movingColor && accepterNum - 1 === movingNum) {
                            var accepterNode = currentGame.stacks[accepter.parentNode.id];
                            var giverNode = lastLocation.id;
                            successfulMove = true;
                            break;
                        }
                    }
                }
            }
            if (successfulMove) {
                var oldStack = currentGame.stacks[giverNode];
                if (giverNode === 'refuse') {
                    oldStack = currentGame['refuse'];
                } else if (giverNode.indexOf('stack') === -1) {
                    oldStack = currentGame.closets[giverNode];
                }
                while (activeCards.length > 0) {
                    if (activeCards.length === 1) {
                        activeCards[0].data.accepting = true;
                    }
                    accepterNode.push(activeCards[0].data);
                    oldStack.pop();
                    activeCards.shift();
                }
                if (oldStack.length) {
                    if (giverNode !== 'refuse') {
                        oldStack[oldStack.length - 1].accepting = true;
                    }
                    oldStack[oldStack.length - 1].folded = false;
                }
                historyPush();
                checkIfFinished();
            } else {
                activeCards = [];
                renderBoard();
            }
        }
    }
    function checkIfFinished() {
        var isFinished = true;
        for (var re = 0; re < currentGame.refuse.length; re++) {
            if (currentGame.refuse[re].folded) {
                isFinished = false;
            }
        }
        for (var stac in currentGame.stacks) {
            for (var s = 0; s < currentGame.stacks[stac].length; s++) {
                if (currentGame.stacks[stac][s].folded) {
                    isFinished = false;
                }
            }
        }
        if (isFinished) {
            var closs = currentGame.closets;
            var cardsLeft = 52 - (closs['c'].length + closs['d'].length + closs['h'].length + closs['s'].length);
            hasStarted = false;
            clearBoard(cardsLeft);
        }
    }
    function startNewGame() {
        cards = [];
        var game = {
            steps: -28,
            stacks: {
                stack1: [],
                stack2: [],
                stack3: [],
                stack4: [],
                stack5: [],
                stack6: [],
                stack7: [],
            },
            refuse: [],
            closets: {
                c: [],
                d: [],
                h: [],
                s: []
            }
        };
        for (var s = 0; s < suits.length; s++) {
            for (var c = 1; c < 14; c++) {
                cards.push({
                    suit: suits[s],
                    num: c
                });
            }
        }
        cards = shuffle(cards);
        for (var i = 0; i < cards.length; i++) {
            var cardHTML = document.createElement("div");
            cardHTML.className = "cd f";
            var data = {
                's': cards[i].suit,
                'n': cards[i].num,
                'id': cards[i].suit + cards[i].num,
                'colr': cards[i].suit === 'd' || cards[i].suit === 'h' ? 'r' : 'b',
                'folded': true,
                'accepting': false
            };
            cardHTML.data = data;
            game.refuse.push(data);
        }
        var maxStack = 0;
        var nextStack = 2;
        var delay = 1;
        currentGame = game;
        historyPush();
        var interv = setInterval(fillBoard, 100);
        function fillBoard() {
            if (delay === 29) {
                clearInterval(interv)
            } else {
                delay++;
                var sortoObject = game.refuse[game.refuse.length - 1];
                game.refuse.pop();
                maxStack++;
                if (maxStack === 8 || maxStack === 1) {
                    sortoObject.folded = false;
                    sortoObject.accepting = true;
                }
                if (maxStack === 8) {
                    maxStack = nextStack;
                    nextStack++;
                }
                if (nextStack < 9) {
                    game.stacks['stack' + maxStack].push(sortoObject)
                }
                currentGame = game;
                historyPush();
            }
        }
        hasStarted = true;
    }
    function renderBoard() {
        document.body.innerHTML = '';
        var outerBoard = document.createElement('div');
        outerBoard.className = 'board clear ' + (getCookie('color') ? getCookie('color') : 'dark');
        outerBoard.id = "gameboard";
        var board = document.createElement('div');
        board.className = 'inner clear';
        var bottomButtons = document.createElement('div');
        bottomButtons.className = 'nav-buttons';
        bottomButtons.innerHTML = '<div class="in"><button id="new-game" class="new">&#xff0b;</button><div class="toggle"><input type="checkbox" id="color" ' + (getCookie('color') === 'dark' ? 'checked' : '') + '><label for="color"></label></div><button id="back-button" class="back">&larr;</button></div>';
        board.appendChild(bottomButtons);
        var closets = document.createElement('div');
        closets.className = 'closets-area';
        for (var gc in currentGame.closets) {
            var closet = document.createElement('div');
            var cardsInCloset = currentGame.closets[gc];
            var priorCardsInCloset = priorGame && priorGame.closets ? priorGame.closets[gc] : [];
            var shouldAnimate = cardsInCloset.length > priorCardsInCloset.length ? ' glow' : '';
            closet.id = gc;
            closet.className = 'closet closet' + gc + (cardsInCloset.length ? '' : ' a');
            closet.innerHTML = icons[gc];
            closet.setAttribute('data-suit', gc);
            for (var c = 0; c < cardsInCloset.length; c++) {
                closet.appendChild(renderCard(cardsInCloset[c], shouldAnimate));
            }
            closets.appendChild(closet);
        }
        var refuse = document.createElement('div');
        var priorRefCard = priorGame && priorGame.refuse ? priorGame.refuse[priorGame.refuse.length - 1] : null;
        var currentRefCard = currentGame.refuse[currentGame.refuse.length - 1];
        var shouldAnimate = currentRefCard && priorRefCard && (currentRefCard.id !== priorRefCard.id || currentRefCard.folded !== priorRefCard.folded || currentGame.refuse.length !== priorGame.refuse.length);
        refuse.className = 'refuse-pile len' + (currentGame.refuse.length < 25 ? currentGame.refuse.length : ' all') + (shouldAnimate ? ' accordion' : '');
        refuse.id = 'refuse';
        for (var r = 0; r < currentGame.refuse.length; r++) {
            refuse.appendChild(renderCard(currentGame.refuse[r], (shouldAnimate && r === currentGame.refuse.length - 1 ? ' slide' : null)));
        }
        board.appendChild(refuse);
        board.appendChild(closets);
        var stacks = document.createElement('div');
        stacks.className = 'stacks';
        board.appendChild(stacks);
        var sn = 0;
        for (var st in currentGame.stacks) {
            sn++;
            var stack = document.createElement('div');
            var childStackCards = currentGame.stacks[st];
            var priorStack = priorGame && priorGame.stacks ? priorGame.stacks[st] : null;
            var growAnimation = '';
            if (priorStack && priorStack.length > childStackCards.length) {
                growAnimation = ' contract';
            } else if (priorStack && priorStack.length < childStackCards.length) {
                growAnimation = ' expand';
            }
            stack.id = 'stack' + sn;
            stack.className = 'stack len' + childStackCards.length + (childStackCards.length ? '' : ' a') + growAnimation;
            for (var f = 0; f < childStackCards.length; f++) {
                var animate = null;
                if (priorStack && f == childStackCards.length - 1 && !childStackCards[f].folded && priorStack[f] && priorStack[f].folded) {
                    animate = ' flipover'
                }
                stack.appendChild(renderCard(childStackCards[f], animate));
            }
            board.appendChild(stack);
        }
        outerBoard.appendChild(board);
        var screenW = window.outerWidth;
        var screenH = window.outerHeight;
        var isDesktop = window.navigator.appVersion.indexOf('Phone') === -1 && window.navigator.appVersion.indexOf('Mobile') === -1;
        var ratio = screenW > screenH ? '690' : '530';
        var ratioClass = screenW > screenH ? ' landscape' : ' portrait';
        var browserColor = getCookie('color') === 'dark' ? '000000' : 'ffffff';
        outerBoard.className = outerBoard.className + ratioClass + (isDesktop ? ' desktop' : ' mobile');
        document.getElementById('metaColor').setAttribute("content", "#" + browserColor);
        document.getElementById('metaWidth').setAttribute("content", "width=" + ratio + ",user-scalable=no");
        document.body.appendChild(outerBoard);
        document.title = hasStarted && currentGame.steps > 0 ? currentGame.steps + ' - Solitaire' : 'Solitaire';
    }
    function clearBoard(cards) {
        var delay = 0;
        var finishingInterval = setInterval(wipeBoard, 200);
        function wipeBoard() {
            if (delay >= (cards - 1)) {
                clearInterval(finishingInterval);
                document.getElementById("gameboard").innerHTML = '<div class="won"><h1>You won!</h1><button id="startnew">Start new game</button></div>';
            } else {
                for (var clos in currentGame.closets) {
                    var lastCloseted = currentGame.closets[clos].length ? currentGame.closets[clos][currentGame.closets[clos].length - 1] : {'s': clos, 'n': 0};
                    for (var stac in currentGame.stacks) {
                        var lastStacked = currentGame.stacks[stac][currentGame.stacks[stac].length - 1];
                        var lastRefused = currentGame.refuse[currentGame.refuse.length - 1];
                        if (lastStacked && lastStacked.s == lastCloseted.s && lastStacked.n === lastCloseted.n + 1) {
                            currentGame.stacks[stac].pop();
                            currentGame.closets[clos].push(lastStacked);
                            delay++;
                            break;
                        } else if (lastRefused && lastRefused.s == lastCloseted.s && lastRefused.n === lastCloseted.n + 1) {
                           currentGame.refuse.pop();
                           currentGame.closets[clos].push(lastRefused);
                           delay++;
                           break;
                        }
                    }
                }
                historyPush();
            };
        }
    }
    renderStartBoard()
})();
</script>
</html>
  `
  
  function Solitaire(){
   return (
    <div>
    <h2 onClick={() =>
    document.write(solitaire)}>Solitaire</h2>
    </div>
  )
  }

  function App(){

    return ( 
      <Router> 
        <div> 
          <nav> 
            <ul> 
              <li> 
                <Link to="/">keyboard</Link> 
              </li> 
              <li> 
                <Link to="/hangman/">hangman</Link> 
              </li> 
              <li> 
                <Link to="/clock/">clock</Link> 
              </li> 
               <li> 
                <Link to="/tic_tac_toe/">tic_tac_toe</Link> 
              </li> 
               <li> 
                <Link to="/maze/">maze</Link> 
              </li> 
               <li> 
                <Link to="/calculator/">calculator</Link> 
              </li> 
              <li> 
                <Link to="/solitaire/">solitaire</Link> 
              </li> 
            </ul> 
          </nav> 
          <Routes>
            {/*https://stackoverflow.com/questions/69854011/matched-leaf-route-at-location-does-not-have-an-element */}
          <Route path="/" exact element={<Keyboard />} /> 
          <Route path="/hangman/" element={<Hangman />} /> 
          <Route path="/clock/" element={<Clock />} /> 
          <Route path="/tic_tac_toe/" element={<Tic_tac_toe />} />
          <Route path="/maze/" element={<Maze />} />
          <Route path="/calculator/" element={<Calculator />} />
          <Route path="/solitaire/" element={<Solitaire />} />
          </Routes>
        </div> 
      </Router> 
    ); 
  } 

//////////////////////////////////////////

// export default first;
export default App;