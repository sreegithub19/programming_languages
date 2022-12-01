1. GoLang basics: 
  
(i) GoLang Installation in Windows: 
https://go.dev/doc/install 
 
(ii) GoLang basic tutorial: 
https://gobyexample.com/
 
(a). Note: Command before running .go file:  
go mod init example.com/m 
Reference: 
https://stackoverflow.com/questions/66894200/go-go-mod-file-not-found-in-current-directory-or-any-parent-directory-see-go
(b). To run .go file:
go run hello.go

----------------------------------------------------------------
2. Shell command in go:

package main
import (
    "fmt"
    "os/exec"
)
func main() {
    arg := "echo"
    arg1 := `
    Hello
    Everyone!!!
    `
    arg2 := "\n\tfrom"
    cmd := exec.Command(arg, arg1, arg2)
    stdout, err := cmd.Output()
    if err != nil {
        fmt.Println(err.Error())
        return
    }
    // Print the output
    fmt.Println(string(stdout))
}
----------------------------------------------------------------

https://www.npmjs.com/package/golang-node
----------------------------------------------------------------

3. Embedding nodejs in golang:


package main
import (
    "fmt"
    "os/exec"
)
func main() {
    arg := "node"
    arg1 := -e
    arg2 := `
    
const runner = require('child_process'); 
const perl_string =  ` + "`" + `#
# One more approach is to use the array/hash conversion rules to
# build keyword parameters, with defaults.
#
use strict;
# Print a string one or more times under all sorts of controls.
sub barko {
    # Check for correct pairing.
    @_ % 2 == 0 or
        die "barko: Odd number of arguments.\n";
    # Store the parms, with defaults.
    my %parms = ( 'string' => 'snake',  # String to print
                  'between' => '',      # Place between chars.
                  'repeat' => 1,        # Repeat this many times.
                  'cascade' => 0,       # Move each line right this much more.
                  'blankafter' => 1,    # Extra blank line afterwards.
                  @_);
    # Now %parms is a list of keyword => value pairs as sent, using
    # defaults for keys not sent.
    # Add the between to the string.
    my $str = substr($parms{'string'}, 1);
    $str =~ s/(.)/$parms{'between'}$1/g;
    $str = substr($parms{'string'}, 0, 1) . $str;
    # Printin' time!
    my $preamt = 0;
    for(my $n = $parms{'repeat'}; $n--; ) {
        print ((' ' x $preamt), "$str\n");
        $preamt += $parms{'cascade'};
    }
    print "\n" if $parms{'blankafter'};
}
# Call with various options.  These can be sent in any order.
barko;
barko(repeat => 3, string => 'BOZON', cascade => 1);
barko(between => ' ');
barko(between => '<->', repeat => 5);
barko(string => '** done **', blankafter => 0);
 + "`" + 
runner.execFile('perl', ['-e', perl_string], (err, stdout, stderr) => { 
    console.log(stdout) // hi 
 });
    `
    cmd := exec.Command(arg, arg1, arg2)
    stdout, err := cmd.Output()
    if err != nil {
        fmt.Println(err.Error())
        return
    }
    // Print the output
    fmt.Println(string(stdout))
}



// To escape (`) inside a raw string, replace (`) with (`+"`"+`)

----------------------------------------------------------------

3. Embedding nodejs in golang (continued) ::

// working
package main
import (
    "fmt"
    "os/exec"
)
func main() {
    arg := "node"
    arg1 := -e
    arg2 := `
   // 8. Embedding PHP in Nodejs:
    // https://stackoverflow.com/questions/2954540/execute-a-string-of-php-code-on-the-command-line
    
    // https://stackoverflow.com/questions/7669906/how-to-execute-php-block-from-terminal-without-saving-to-a-file
    // php -e  <code>   -> for debugging purposes ("Sources" in Inspect)
    
    var exec = require("child_process").exec;
    const express = require('express')
    const app = express()
    const port = 3000
    
    app.get('/', function(req, res){
     exec(` + "`" + `php -r "
    /******************************************************************/
    echo 'hi there and here and you!!';
    echo 'hola amigos!';
    /******************************************************************/
    echo '<!DOCTYPE html>
    <html>
    <body>
    <h2>An Unordered HTML List</h2>
    <ul>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ul>  
    <h2>An Ordered HTML List</h2>
    <script>
    document.write(\"3+300000\");   // this considers: 3+300000 (as int)
    document.write(\\"<br>\\");     // this considers: \\"<br>\\" (as string)
    document.write(\\"Hi\\");      // this considers: \\"Hi\\" (as string)
    alert(\\"Hi\\");               // this considers: \\"Hi\\" (as string)
    document.write(2 === 3);       
    </script>
    <ol>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ol> 
    </body>
    </html>';
    /******************************************************************/
    
    
    \\$a = 2;                         // should put double-backslash before \\"$\\" to parse variables.
    echo \\$a;
    echo \\"<br>\\";
    parse_str(\\"first=value&arr[]=foo+bar&arr[]=baz\\", \\$output);
    echo \\$output['first'];  // value
    echo \\"\n\\";
    echo \\$output['arr'][0]; // foo bar
    echo \\"\n\\";
    echo \\$output['arr'][1]; // baz
    
    /******************************************************************/
    
    function my_callback(\\$item) {
      return strlen(\\$item);
    }
    
    \\$strings = [\\"apple\\", \\"orange\\", \\"banana\\", \\"coconut\\"];
    \\$lengths = array_map(\\"my_callback\\", \\$strings);
    print_r(\\$lengths);
    
    /******************************************************************/
    
    "` + "`" + `, function (error, stdout, stderr) {res.send(stdout);});});
    
    
    app.listen(port, () => {
      console.log(` + "`" + Example app listening at http://localhost:${port} + "`" + `)
    })  
    `
    cmd := exec.Command(arg, arg1, arg2)
    stdout, err := cmd.Output()
    if err != nil {
        fmt.Println(err.Error())
        return
    }
    // Print the output
    fmt.Println(string(stdout))
}

----------------------------------------------------------------

4. Create a webserver in Golang:

package main
import (
    "fmt"
    "log"
    "net/http"
)
func main() {
    http.HandleFunc("/hello", func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintf(w, `
        <h1>Hello</h1>
        <a href="http://127.0.0.1:8080/hello2">go to hello2</a>
        `)
    })
    http.HandleFunc("/hello2", func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintf(w, "<h1>Hello</h1>!")
    })
    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintf(w, "<h1>Hello /</h1>")
    })
    fmt.Printf("Starting server at port 8080\n")
    if err := http.ListenAndServe(":8080", nil); err != nil {
        log.Fatal(err)
    }
}


----------------------------------------------------------------

5. 
        1. Official site:
        https://go.dev/

        2. Package manager:
        https://pkg.go.dev/

        3. The Go Programming Language Specification:
        https://go.dev/ref/spec

----------------------------------------------------------------

6. 

go install github.com/sno6/gommand@latest

        1. Create go.mod file (go mod init)
        2. go mod edit -module=github.com/sno6/gommand

----------------------------------------------------------------

7. 
    1. 
    (In Mac) GOROOT modules location: /usr/local/go/src.
    Install "goeval" here by: (https://github.com/dolmen-go/goeval)
    sudo git clone https://github.com/dolmen-go/goeval.git

    2. sudo go install goeval

----------------------------------------------------------------
8.

        Gommand:


        sudo git clone https://github.com/sno6/gommand.git
        go get golang.org/x/tools/imports
        sudo git install gommand
        go mod edit -module=example.com/mod

----------------------------------------------------------------

9. 

    reference:
    https://github.com/shurcooL/goexec

----------------------------------------------------------------

10.  Nested functions in Golang:

package main
import (
    "fmt"
    "os/exec"
    "strconv"
)
func main() {
    var a int = 5
    var b int = 50
    nested := func() {
        fmt.Println("I am nested: " + strconv.Itoa(a+b))
        deeplyNested := func() {
            //fmt.Println("I am deeply nested: " + strconv.Itoa(a-b))
            var x int = 45
            var y int = 455
            /* equivalent to function string_concat(x,y) */
            string_concat :=
                `
            const runner = require('child_process'); 
            let sprintf = require('sprintf-js').sprintf;
            console.log("x+ y is:",` + strconv.Itoa(x+y) + `);
            function diff(a,b){return a-b}
            let z = diff(` +
                    strconv.Itoa(x+y) + `,` + strconv.Itoa(x-y) + `)    // working
            console.log("z is:",z);
            `
            cmd := exec.Command("node", "-e", string_concat)
            stdout, err := cmd.Output()
            if err != nil {
                fmt.Println(err.Error())
                return
            }
            // Print the output
            fmt.Println(string(stdout))
        }
        deeplyNested()
        fmt.Println("I am nested: " + strconv.Itoa(a+b))
    }
    nested()
}


----------------------------------------------------------------

11. 
        Windows:

        1. C:\Users\Padmaja>go env GOPATH 
        C:\Users\Padmaja\go

        2. dir ("ls" for windows)

        3. Commands:
        (i) go install github.com/dolmen-go/goeval@master (in "Run as Administrator")
        (ii) go get -u github.com/dolmen-go/goeval (From normal terminal -> to get the module in go.mod file)

----------------------------------------------------------------

12. 
    https://curatedgo.com/r/gophernotes-use-gopherdatagophernotes/index.html

----------------------------------------------------------------

13. 

    For gorilla/mux: (in Windows)

    Inside (Run as Administrator):
    1. Go into GOROOT (C:\Program Files\Go).
    2. git clone https://github.com/gorilla/mux.git
    3. go install mux

----------------------------------------------------------------
14. Conversion from os.stdin to string:


    line, _ := bufio.NewReader(os.Stdin).ReadString('\n') 
    fmt.Printf("%T\n", os.Stdin) 
    fmt.Printf("%T\n", line)



    echo %temp%
    C:\Users\Padmaja\AppData\Local\Temp

----------------------------------------------------------------
