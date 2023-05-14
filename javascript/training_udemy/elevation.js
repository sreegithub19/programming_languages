// curl https://api.opentopodata.org/v1/test-dataset?locations=56,123 (mostly wrong results)
// curl https://api.open-elevation.com/api/v1/lookup?locations=57.728905,11.949309 (504 Gateway timeout)
// https://www.freemaptools.com/elevation-finder.htm (correct results)

console.log(
    function flip(){
                                const { spawn, exec } = require('child_process');
                                const child3 = exec(`
                                curl https://api.opentopodata.org/v1/test-dataset?locations=13.679489,79.343697
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
