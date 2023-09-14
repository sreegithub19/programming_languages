var path = require("path");
const fs = require('fs');


// execSync is not always effective (while inputs in child process)

var toml = require(path.join(`${require("child_process").execSync(`npm root -g`).toString().trim()}`,"toml")); 
const toml1 = require(path.join(`${require("child_process").execSync(`npm root -g`).toString().trim()}`,'@ltd/j-toml')); 
var toml = require("toml"); 



var child3 = require("child_process").exec(`npm root -g`);
child3.stdout.pipe(process.stdout);
child3.stderr.pipe(process.stderr);
process.stdin.pipe(child3.stdin);
child3.on('exit', () => {
    process.exit()
});

//console.log(path.join(`${child4.toString().trim()}`,"config.toml"));

//var config = toml.parse(fs.readFileSync(path.join(`${child4.toString().trim()}`,"config.toml"), 'utf-8'));
if(`${require("child_process").execSync(`pwd`).toString().trim()}` == "/programming_languages")
    var config = toml.parse(fs.readFileSync(path.join(`${require("child_process").execSync(`pwd`).toString().trim()}`,"javascript/toml_/config.toml")), 'utf-8');
else if(`${require("child_process").execSync(`pwd`).toString().trim()}` == "/programming_languages/javascript/toml_")
    var config = toml.parse(fs.readFileSync(path.join(`${require("child_process").execSync(`pwd`).toString().trim()}`,"config.toml")), 'utf-8');


console.log(
    "combined config:",
    config.degreeType,
    config.cities[0],
    config.fields,
);

var config = toml.parse(`
# Weather configuration data
degreeType = "F"

cities = [
"San Diego, CA",
"Chicago, IL",
"Tokyo, Japan"
]

fields = [
"temperature",
"windspeed",
"skytext"
]
`
);


console.log(
    config.degreeType,
    config.cities[0],
    config.fields,
);

var config = toml1.parse(`
# Weather configuration data
degreeType = "F"

cities = [
"San Diego, CA",
"Chicago, IL",
"Tokyo, Japan"
]

fields = [
"temperature",
"windspeed",
"skytext"
]
`
);


console.log(
    config.degreeType,
    config.cities[0],
    config.fields,
);
