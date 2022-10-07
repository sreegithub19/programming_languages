const express = require('express');
const path = require('path');
const app = express();
app.get('/', (request, response) => {
  return response.send(`

<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8"/>
        <link rel="icon" href="https://my-react-app-one-sigma.vercel.app/favicon.icoo"/>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <meta name="theme-color" content="#000000"/>
        <meta name="description" content="Web site created using create-react-app"/>
        <link rel="apple-touch-icon" href="https://my-react-app-one-sigma.vercel.app/logo192.png"/>
        <link rel="manifest" href="https://my-react-app-one-sigma.vercel.app/manifest.json"/>
        <title>React App</title>
        <script defer="defer" src="https://my-react-app-one-sigma.vercel.app/static/js/main.493f50c3.js"></script>
    </head>
    <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div></div>
        <div>
            <div id="root"></div>
            <a href="https://my-react-app-one-sigma.vercel.app/chess.html">Chess</a>
            <br>
            <div><script src="https://my-react-app-one-sigma.vercel.app/puzzles.js"></script></div>
            <div><script src="https://my-react-app-one-sigma.vercel.app/sudoku.js"></script>
            </div>
        </div>
    </body>
</html>
  `);
});
app.listen(5000, () => {
  console.log('App is listening on port 5000');
});