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
var p2 = require('child_process').execFile('python3', ['-c',`
print(input())
`]
,{ stdio: 'pipe'}
);


p.stdout.on('data', function(data) {
  console.log(data.toString());
});
p1.stdout.on('data', function(data) { 
  global.a = data.toString()
  console.log(a);
});
p2.stdout.on('data', function(data) { 
  console.log((a).concat(data.toString()));
  console.log(parseInt(a) + parseInt(data.toString()));
});


p.stdin.write(prompt("Enter p input:"));

p1.stdin.write(prompt("Enter p1 first input:"));
p2.stdin.write(prompt("Enter p2 first input:")); //  -> printing without space, attached to previous output

p.stdin.end();
p1.stdin.end();
p2.stdin.end();