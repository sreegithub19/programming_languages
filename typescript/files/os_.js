// Inbuilt

    // child_process
//console.log(require('child_process').execSync("pwd").toString())

    // npm
// using npm (in terminal) : npm exec -c "ls"


// ----------------------------------------------------------------//
// To install separately:

    // node-run-cmd
// var nrc = require('node-run-cmd');
// nrc.run('mkdir foo');

    // shelljs
// to install and get this working:  export NODE_PATH=$(npm root -g) && npm install -g shelljs
var shell = require('shelljs');
shell.exec('ls')