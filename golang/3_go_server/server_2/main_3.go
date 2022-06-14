// working
package main

import (
	"fmt"
	"os/exec"
)

func main() {
	arg := "python"
	arg1 := "-c"
	arg2 := `
import subprocess
list_files_1 = subprocess.run(["goeval",'''
		arg := "python"
		arg1 := "-c"
		arg2 := ` + "`" + `
import subprocess
list_files_1 = subprocess.run(["goeval",\'\'\'
helloHandler := func(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/hello" {
		http.Error(w, "404 not found", http.StatusNotFound)
		return
	}
	if r.Method != "GET" {
		http.Error(w, "method is not supported", http.StatusNotFound)
		return
	}
	fmt.Fprintf(w, "hello!")
}

formHandler := func(w http.ResponseWriter, r *http.Request) {
	if err := r.ParseForm(); err != nil {
		fmt.Fprintf(w, "ParseForm() err: %v", err)
		return
	}
	fmt.Fprintf(w, "POST request successful")
	name := r.FormValue("name")
	address := r.FormValue("address")
	fmt.Fprintf(w, ` + "`" + ` + "` + "`" + `" + ` + "`" + `Name = %s\n` + "`" + ` + "` + "`" + `" + ` + "`" + `, name)
	fmt.Fprintf(w, ` + "`" + ` + "` + "`" + `" + ` + "`" + `Address = %s\n` + "`" + ` + "` + "`" + `" + ` + "`" + `, address)
}

fileServer := http.FileServer(http.Dir("./static"))
http.Handle("/", fileServer)
http.HandleFunc("/form", formHandler)
http.HandleFunc("/hello", helloHandler)

fmt.Printf(` + "`" + ` + "` + "`" + `" + ` + "`" + `Starting server at port 8080\n` + "`" + ` + "` + "`" + `" + ` + "`" + `)
if err := http.ListenAndServe(":8080", nil); err != nil {
	log.Fatal(err)
}
\'\'\'],timeout=500)
print("The exit code was: %d" % list_files_1.returncode)
			   
		` + "`" + `
		cmd := exec.Command(arg, arg1, arg2)
		stdout, err := cmd.Output()
		if err != nil {
			fmt.Println(err.Error())
			return
		}
		// Print the output
		fmt.Println(string(stdout))
'''],timeout=500)
print("The exit code was: %d" % list_files_1.returncode)	   
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
