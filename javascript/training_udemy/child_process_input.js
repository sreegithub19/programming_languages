const { spawnSync } = require('child_process');

var result = spawnSync('python3', ['-c', `
import sys
data = input("Enter some data: ")
dat1 = input("Enter some more data: ")
dat2 = input("Enter some more data: ")
print("You entered:", data + dat1 + dat2)`], { encoding: 'utf-8', stdio: 'inherit' });


const { execSync } = require('child_process');

const pythonCode = `
import sys
data = input("Enter some data: ")
dat1 = input("Enter some more data: ")
dat2 = input("Enter some more data: ")
print("You entered in execSync:", data + dat1 + dat2)`;

result = execSync(`python3 -c '''${pythonCode}'''`, { encoding: 'utf-8', stdio: 'inherit' });