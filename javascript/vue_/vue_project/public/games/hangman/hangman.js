document.write(`
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
`)