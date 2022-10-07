const express = require('express');
const path = require('path');
const app = express();
app.get('/', (request, response) => {
  return response.send(`
  <!-- 
    Live server: http://127.0.0.1:5500/javascript/angular_/page_source/page_source.html 
    Page source: view-source:https://my-angular-3nacteg42-sreegithub19.vercel.app/

-->
<!DOCTYPE html><html lang="en"><head>
	<meta charset="utf-8">
	<title>Angular</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="icon" type="image/x-icon" href="favicon.ico">
<link rel="stylesheet" href="https://my-angular-q3ir60od6-sreegithub19.vercel.app/styles.ef46db3751d8e999.css"></head>

<body>
    <div>
	<app-root> 
    </app-root>
    <h4 id="calculator">Calculator</h4>
    <h4 id="clock">Clock and Puzzles</h4>
    <h4 id="codepen">Codepen</h4>
    <h4 id="dino">Dino</h4>
    <h4 id="hangman">Hangman</h4>
    <h4 id="keyboard">Keyboard</h4>
    <h4 id="maze">Maze</h4>
    <h4 id="sass_">Sass and Sudoku</h4>
    <h4 id="solitaire">Solitaire</h4>
    <h4 id="tic_tac_toe">Tic tac toe and Chess</h4>
    <h4 id="tilt_maze">Tilt maze</h4>
    </div>
<script src="https://my-angular-q3ir60od6-sreegithub19.vercel.app/runtime.397c3874548e84cd.js" type="module"></script>
<script src="https://my-angular-q3ir60od6-sreegithub19.vercel.app/polyfills.6a6b1b5c2240d443.js" type="module"></script>
<script src="https://my-angular-q3ir60od6-sreegithub19.vercel.app/main.945760456ac18913.js" type="module"></script>

</body></html>
  `);
});
app.listen(5000, () => {
  console.log('App is listening on port 5000');
});