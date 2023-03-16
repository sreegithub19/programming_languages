// this is the required cypress.config.js file 


const { defineConfig } = require('cypress')
const fs = require('fs');
const { spawn, exec } = require('child_process');
var sleep = require('sleep');


module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    experimentalSessionAndOrigin: true,
    //testIsolation: "off",
    setupNodeEvents(on, config) {
      //implement node event listeners here
      on('task', {
        log(message) {
          console.log(message)

                          function flip(){
                                var child3 = exec(`
                                npm root -g && 
                                python -c "print('Python script says:',2)"
                                `);

                                // taking too long (something to do with chained child processes' execution)
                                // var child2 = exec(`
                                // python -c "print('Python script says:',2)"
                                // `);

                                child3.stdout.pipe(process.stdout);
                                child3.stderr.pipe(process.stderr);
                                process.stdin.pipe(child3.stdin);
                                child3.on('exit', () =>  {
                                  process.exit()
                                });
                          }
                        
                          flip();
          return null
        },
        
        string_(message){
                          function flip(){
                                var child3 = exec(message);

                                // taking too long (something to do with chained child processes' execution)
                                // var child2 = exec(`
                                // python -c "print('Python script says:',2)"
                                // `);

                                child3.stdout.pipe(process.stdout);
                                child3.stderr.pipe(process.stderr);
                                process.stdin.pipe(child3.stdin);
                                // child3.on('exit', () =>  {
                                //   process.exit()
                                // });

                                //sleep.sleep(10); // sleep for ten seconds
                          }
                        
                          flip();
          return null
        },

        exit_(message){
              process.exit();
              return null
        },

        input_(message){
                          function flip(){
                                var child3 = spawn("python", ["-c",`
import time
print("------------------------------------------------------")
a = input("Enter a  number:")
time.sleep(10)
b = input("Enter a  string:")
time.sleep(10)
print(a+b)
import subprocess
list_files_1 = subprocess.run(["python","-c",'''
print("Hi from nested child process")
print(input("Input in nested child process:"))
'''],timeout=500)
print("The exit code was: %d" % list_files_1.returncode)
`
                                ]);
                                child3.stdout.pipe(process.stdout);
                                child3.stderr.pipe(process.stderr);
                                process.stdin.pipe(child3.stdin);
                          }
                          flip();
          return null
        }
      })

    },
  },
});
