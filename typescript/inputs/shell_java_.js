var _a = require('child_process'), spawn = _a.spawn, exec = _a.exec;
var node_string = "\nconst { spawn,exec } = require('child_process');\n\n\nvar java_code = `'\n\nimport java.io.ByteArrayInputStream;\nimport java.io.InputStream;\nimport java.nio.charset.StandardCharsets;\n\npublic class Main {\n\n  public static void main(String args[]) {\n\n    // Creates a string\n    String name = \"Programiz\";\n    System.out.println(\"String is: \" + name);\n\n    try {\n\n      InputStream stream = new ByteArrayInputStream(name.getBytes(StandardCharsets.UTF_8));\n      System.out.println(\"InputStream: \" + stream);\n\n      // Returns the available number of bytes\n      System.out.println(\"Available bytes at the beginning: \" + stream.available());\n\n      // Reads 3 bytes from the stream stream\n      stream.read();\n      stream.read();\n      stream.read();\n\n      // After reading 3 bytes\n      // Returns the available number of bytes\n      System.out.println(\"Available bytes at the end: \" + stream.available());\n\n      stream.close();\n    }\n\n    catch (Exception e) {\n      e.getStackTrace();\n    }\n  }\n}\n\n'`;\n\nvar java_code1 = `'\nimport java.util.Scanner;\nimport java.io.LineNumberReader;\nimport java.io.FileReader;\nimport java.io.IOException;\n\npublic class Main {\n\n      public static void main(String[] args) throws IOException {\n    System.out.println(\"enter one char\");\n    char c = (char) System.in.read();\n    System.out.println(\"The char entered is :\" + c);\n    String userInput;\n    System.out.println(\"Enter a string\");\n    Scanner s = new Scanner(System.in);\n    userInput = s.next();\n    System.out.println(\"the string inputted is:\" + userInput);\n}\n}\n\n'`;\n\n\nvar child = exec(`\ncd /Users/sreedhar.k &&\necho ${java_code} > /tmp/TmpClass.java && java /tmp/TmpClass.java &&\necho ${java_code1} > /tmp/TmpClass.java && java /tmp/TmpClass.java\n\n`);\n\nchild.stdout.pipe(process.stdout);\nchild.stderr.pipe(process.stderr);\nprocess.stdin.pipe(child.stdin);\nchild.on('exit', () => process.exit());\n\n";
var child = spawn("node", ["-e", node_string]);
var child1 = exec("\n  tsc --typeRoots /Users/sreedhar.k/.nvm/versions/node/v16.10.0/lib/node_modules/@types typescript/inputs/shell_java_.ts && node typescript/inputs/shell_java_.js");
child.stdout.pipe(process.stdout);
child.stderr.pipe(process.stderr);
process.stdin.pipe(child.stdin);
child.on('exit', function () {
    child1.stdout.pipe(process.stdout);
    child1.stderr.pipe(process.stderr);
    process.stdin.pipe(child1.stdin);
    child1.on('exit', function () { return process.exit(); });
});
// /Users/sreedhar.k/.nvm/versions/node/v16.10.0/lib/node_modules is obtained from "npm root -g"
// npm i -g @types/node
// tsc --typeRoots /Users/sreedhar.k/.nvm/versions/node/v16.10.0/lib/node_modules/@types typescript/inputs/shell_java_.ts
