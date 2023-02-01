// Reference: https://stackoverflow.com/questions/70367655/execute-java-code-inline-in-terminal-java-java-code-here
/*
chmod +x stell.sh
sudo ./stell.sh

Use Java-11 for this
*/

const { spawn,exec } = require('child_process');


var java_code = `'

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;

public class Main {

  public static void main(String args[]) {

    // Creates a string
    String name = "Programiz";
    System.out.println("String is: " + name);

    try {

      InputStream stream = new ByteArrayInputStream(name.getBytes(StandardCharsets.UTF_8));
      System.out.println("InputStream: " + stream);

      // Returns the available number of bytes
      System.out.println("Available bytes at the beginning: " + stream.available());

      // Reads 3 bytes from the stream stream
      stream.read();
      stream.read();
      stream.read();

      // After reading 3 bytes
      // Returns the available number of bytes
      System.out.println("Available bytes at the end: " + stream.available());

      stream.close();
    }

    catch (Exception e) {
      e.getStackTrace();
    }
  }
}

'`;

var java_code1 = `'
import java.util.Scanner;
import java.io.LineNumberReader;
import java.io.FileReader;
import java.io.IOException;

public class Main {

      public static void main(String[] args) throws IOException {
    System.out.println("enter one char");
    char c = (char) System.in.read();
    System.out.println("The char entered is :" + c);
    String userInput;
    System.out.println("Enter a string");
    Scanner s = new Scanner(System.in);
    userInput = s.next();
    System.out.println("the string inputted is:" + userInput);
}
}

'`;


var child3 = exec(`
cd /Users/sreedhar.k &&
echo ${java_code} > /tmp/TmpClass.java && java /tmp/TmpClass.java &&
echo ${java_code1} > /tmp/TmpClass.java && java /tmp/TmpClass.java

`);

child3.stdout.pipe(process.stdout);
child3.stderr.pipe(process.stderr);
process.stdin.pipe(child3.stdin);
child3.on('exit', () => process.exit());