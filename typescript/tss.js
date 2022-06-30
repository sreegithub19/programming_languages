const prompt = require('prompt-sync')();
var p = require('child_process').execFile('python3', ['-c',`
print("hi")
a = input().split()
print(a[0]+"22")
print(a[1]+"32")
print(int(a[2])**2)
`]
,{ stdio: 'pipe'}
);

p.stdout.on('data', function(data) {
  console.log(data.toString());
});
p.stdin.write(prompt("Enter all the input:"));
p.stdin.end();