console.log(
    function flip(){
                                const { spawn, exec } = require('child_process');
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
                          }()
                    
)