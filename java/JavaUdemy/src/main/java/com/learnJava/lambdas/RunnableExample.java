package com.learnJava.lambdas;

/*
Notes:
1. Runnable is an interface that is to be implemented
by a class whose instances are intended to be executed
by a thread.
 */

public class RunnableExample {
    public static void main(String[] args) {
        /*
        prior java 8
         */
        Runnable runnable = new Runnable() {
            @Override
            public void run() {
                System.out.println("Inside runnable 1");
            }
        };
        new Thread(runnable).start();


        // java 8 lambda syntax
        Runnable runnablelambda = () -> {
            System.out.println("Inside runnable 2");
        };
        new Thread(runnablelambda).start();
        new Thread(runnablelambda).start();
        new Thread(
                () -> {
                    System.out.println("Inside runnable 4");
                    System.out.println("Inside runnable 4 again");
                }
        ).start();
    }
}
