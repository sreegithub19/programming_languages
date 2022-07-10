/*
Important links:

1. https://unicode-table.com/en/

Topics covered:
1. Print
2. Input
3. Primitive data types - (8) - boolean, byte, char, double, float, int, long, short
    i. Casting
    ii. Strings
    iii. Char and Boolean
 */

import java.util.*;
public class intro {
    // for nested functions
    interface input_interface1 {
        int subtract(int a , int b);
    }
    interface primitive_interface2 {
        void integers();
        void bytes();
        void shorts();
        void longs();
        void doubles();
    }
    interface strings_interface3 {
        void intro();
        void formatting();
    }

    public static void main(String[] args) {
        //input();      // input_interface1
        //primitive();  // primitive_interface2
        //casting();
        stringsMethod();   // strings_interface3
        //charBoolean();

    }
    // functions

    public static void input(){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter your name:");
        String name = sc.next();
        System.out.println("Hello world!! " + name);
        System.out.println("Enter first number:");
        int first = sc.nextInt();
        System.out.println("Enter second number:");
        int second = sc.nextInt();
        System.out.println(add(first,second));

        // nested functions
        input_interface1 fun2 = new input_interface1() {
            public int subtract(int a, int b) {
                return a-b;
            }
        };

        System.out.println(fun2.subtract(first,second));
    }

    public static int add(int a, int b) {
        return a+b;
    }

    // primitive types - 8 - boolean, byte, char, double, float, int, long, short
    public static void primitive() {
        primitive_interface2 fun2 = new primitive_interface2() {
            public void integers() {
                System.out.println(Integer.MIN_VALUE); // -2147483648
                System.out.println(Integer.MAX_VALUE); // 2147483647 == 2_147_483_647
                System.out.println("Busted MIN_VALUE:"+(Integer.MIN_VALUE-1)); // 2147483647
                System.out.println("Busted MAX_VALUE:"+(Integer.MAX_VALUE+1)); // -2147483648
            }
            public void shorts() {
                System.out.println(Short.MIN_VALUE); // -32768
                System.out.println(Short.MAX_VALUE); // 32767
                System.out.println("Busted MIN_VALUE:"+(Short.MIN_VALUE-1)); // -32769
                System.out.println("Busted MAX_VALUE:"+(Short.MAX_VALUE+1)); // 32768
            }
            public void bytes() {
                System.out.println(Byte.MIN_VALUE); // -128
                System.out.println(Byte.MAX_VALUE); // 127
                System.out.println("Busted MIN_VALUE:"+(Byte.MIN_VALUE-1)); // -129
                System.out.println("Busted MAX_VALUE:"+(Byte.MAX_VALUE+1)); // 128
            }
            public void longs() {
                long longValue = 100l; // or even 100
                System.out.println(longValue); // 100
                System.out.println(Long.MIN_VALUE); // -9223372036854775808
                System.out.println(Long.MAX_VALUE); // 9223372036854775807
                System.out.println("Busted MIN_VALUE:"+(Long.MIN_VALUE-1)); // 9223372036854775807
                System.out.println("Busted MAX_VALUE:"+(Long.MAX_VALUE+1)); // -9223372036854775808
            }
            public void doubles() {
                double doubleValue = 5; // or 5d
                System.out.println(Double.MIN_VALUE);
                System.out.println(Double.MAX_VALUE);
                System.out.println("Busted MIN_VALUE:"+(Double.MIN_VALUE-1));
                System.out.println("Busted MAX_VALUE:"+(Double.MAX_VALUE+1));
                /*
                4.9E-324
                1.7976931348623157E308
                Busted MIN_VALUE:-1.0
                Busted MAX_VALUE:1.7976931348623157E308
                 */
            }
        };

        //fun2.integers();
        //fun2.bytes();
        //fun2.shorts();
        //fun2.longs();
        //fun2.doubles();
    }

    public static void casting(){
        System.out.println((Integer)(Byte.MIN_VALUE/1));   // -128
        System.out.println(((Object) Byte.MIN_VALUE).getClass()); // class java.lang.Byte
        System.out.println(((Integer)(Byte.MIN_VALUE / 1)).getClass()); // class java.lang.Integer

        float b =
        4.4657658688454654754757575676586586787696797976888686585688687688585835f;
        System.out.println(((Object) b).getClass());  // class java.lang.Float


    }

    public static void stringsMethod(){
        strings_interface3 str1 = new strings_interface3(){
            public void intro(){
                String a= "345";
                int b= 345;
                System.out.println(a+b);  // 345345
                System.out.println(a.substring(0,1));  // 3  (slicing with step has no inbuilt method in Java)
            }
            public void formatting(){
                int a = 5;
                System.out.println(String.format("The number is %d",a));
                System.out.println(String.format("The number is %f",5f/3f));
                System.out.println(String.format("The number is %.2f",5f/3f)); // The number is 1.67
                System.out.println(String.format("The number is %f",5.0/3.0)); // The number is 1.666667
                System.out.println(String.format("The number is %s",a));  // The number is 5

            }
        };
        str1.intro();
        str1.formatting();

    }

    public static void charBoolean(){
        char myChar = 'D';
        char myUnicodeChar = '\u0044';
        char myCopyrightChar = '\u00A9';
        System.out.println(myChar);   // D
        System.out.println(myCopyrightChar);  // ©
        System.out.println(myUnicodeChar);   // D
        System.out.println(myUnicodeChar == myChar);  // true
    }


}
