package com.learnJava.lambdas;

import java.util.Comparator;

public class ComparatorExample {
    public static void main(String[] args) {

        // Before Java 1.8
        Comparator<Integer> comparator = new Comparator<Integer>() {
            @Override
            public int compare(Integer o1, Integer o2) {
                return o1.compareTo(o2);
                // 0 -> o1==o2
                // 1 -> o1>o2
                // -1 -> o1<o2
            }
        };
        System.out.println(comparator.compare(3,5));

        // Java 1.8
        Comparator<Integer> comparatorlambda = (a,b) -> a.compareTo(b);
        System.out.println(comparatorlambda.compare(3,5));
        System.out.println(comparatorlambda.compare(3,5));
    }
}
