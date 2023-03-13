// this is the required cypress.config.js file 


const { defineConfig } = require('cypress')
const fs = require('fs');
const { spawn, exec } = require('child_process');


module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    experimentalSessionAndOrigin: true,
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
                                child3.on('exit', () =>  {
                                  process.exit()
                                });
                          }
                        
                          flip();
          return null
        }
      })

    },
  },
});
