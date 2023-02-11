Windows Bash:

- https://www.groovypost.com/howto/install-and-start-bash-in-windows-10-anniversary-update/
- (or)
  We can use Git Bash
  (Location of .bashrc: C:\Users\Padmaja\.bashrc)
  Commands: - https://www.educative.io/blog/bash-shell-command-cheat-sheet - code ~/.bashrc (or Notepad++) -> Edit the file - source ~/.bashrc

  Equivalent of : - "open": "start" - "lsof -i:3000" :
  "netstat -a | grep -w 3000" (without process ID) (or)
  "netstat -o | grep -w 3000" (with process ID)

- To count number of files in a directory:

  - ls | wc -l

- Cloc:
  - https://www.tecmint.com/cloc-count-lines-of-code-in-linux/
  - Install : brew install cloc
  - For folder:
    (i) Per file: cloc --by-file <directory>
    (ii) By language: (inside the directory) cloc .
    (iii) To exclude sub-directories (for example) : cloc --exclude-dir=node_modules,dist,mongo-data-4.4,yarn.lock,package.json,package-lock.json .
  - For compressed files: cloc <compressed_file_name>
  - For file: cloc <file_name>
