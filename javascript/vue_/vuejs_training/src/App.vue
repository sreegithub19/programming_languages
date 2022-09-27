<!--https://stackoverflow.com/questions/69746591/vue-3-warning-tags-with-side-effects-is-breaking-production-->
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <h4 id="calculator">Calculator</h4>
  <h4 id="clock">Clock</h4>
  <h4 id="codepen">Codepen</h4>
  <h4 id="dino">Dino</h4>
  <h4 id="hangman">Hangman</h4>
  <h4 id="keyboard">Keyboard</h4>
  <h4 id="maze">Maze</h4>
  <h4 id="sass_">Sass</h4>
  <h4 id="solitaire">Solitaire</h4>
  <h4 id="tic_tac_toe">Tic tac toe</h4>
  <h4 id="tilt_maze">Tilt maze</h4>
  <h4 id="puzzles">Puzzles</h4>
  <div style="text-align: center;">
      <a href="./games/sudoku/sudoku.html">Sudoku</a><br>
      <a href="./games/chess/chess.html">Chess</a><br>
      <a href="./games/puzzles/puzzles.html">Puzzles</a><br>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
