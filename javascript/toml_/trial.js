const fs = require('fs');
const toml = require('toml'); // local module
const toml1 = require('@ltd/j-toml'); // global module
var child_process_1 = require("child_process");

var child3 = child_process_1.exec("npm root -g");
child3.stdout.pipe(process.stdout);
child3.stderr.pipe(process.stderr);
process.stdin.pipe(child3.stdin);
child3.on('exit', () => process.exit());