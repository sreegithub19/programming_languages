let current = parseInt(prompt("Enter:"))

current = current + 10;
let str = "unconventional"
document.writeln("this is an ${str} calculator")
document.writeln(`
this is an ${str} calculator
`)  // template literal
outputResult(current,`
template literals
`);