const prompt = require('prompt-sync')();
var p = require('child_process').execFile('python3', ['-c',`
print("hi")
inp = input().split()
a = int(inp[0])
print(a+45)
print(int(inp[1])**2)
print("Enter the lowercase string:",inp[2])
print(inp[2].upper())
`]
,{ stdio: 'pipe'}
);

var p1 = require('child_process').execFile('python3', ['-c',`
print(input())
`]
,{ stdio: 'pipe'}
);

p.stdout.on('data', function(data) {
  console.log(data.toString());
});
p1.stdout.on('data', function(data) { 
  console.log(data.toString());
});

p.stdin.write(prompt("Enter p input:"));

p1.stdin.write(prompt("Enter p1 first input:"));
p1.stdin.write(prompt("Enter p1 next input:")); //  -> printing without space, attached to previous output

p.stdin.end();
p1.stdin.end();