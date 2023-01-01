// https://dev.to/cameljohn/nodejs-to-run-c-executable-3p3

const { execFile } = require('child_process');

const compiler = "javac";
//const version = "-std=c++11";
const infile = `
public class trial {
    public static void main(String[] args) {
        System.out.println("Trials!");
    }
}
`;

const outfile = "trial";
//const command = "hello world";

execFile(compiler, [infile], (err, stdout, stderr) => {
  if (err) {
    console.log(err);
  } else {
    let executable = `./${outfile}`;
    execFile("java",executable, (err, stdout, stderr) => {
      console.log(stdout);
    })
  }
})