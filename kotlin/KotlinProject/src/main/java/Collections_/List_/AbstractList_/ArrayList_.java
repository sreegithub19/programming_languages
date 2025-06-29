package Collections_.List_.AbstractList_;

import java.util.*;

public class ArrayList_ {
    public static void main(String[] args) {
        methods();
    }

    public static void methods(){
        System.out.println("/********************  Java  *************************/");
        ArrayList<String> arl = new ArrayList<>();
        repeat(arl);

        arl.clear();
        repeat(arl);
        System.out.println("arl:" + arl);

        System.out.println("arl.clone():" + arl.clone());
        System.out.println(System.identityHashCode(arl) + "," + System.identityHashCode(arl.clone()));

        System.out.println("arl.contains():" + arl.contains("C"));
        System.out.println("arl.containsAll():" + arl.containsAll(Collections.singleton("C.")));
        System.out.println("arl.containsAll():" + arl.containsAll(Arrays.asList("C")));
        System.out.println("arl.equals():" + arl.equals(arl.clone()));
        arl.forEach(arl1 ->System.out.println(arl1));
        System.out.println("arl.get():" + arl.get(3) + "," + arl.getFirst() + "," + arl.getLast() + "," + arl.getClass());
        System.out.println("arl.hashCode() , arl.isEmpty():" + arl.hashCode() + "," + arl.isEmpty());
        System.out.println("arl.indexOf():" + arl.indexOf("G") + "," + arl.indexOf("A"));
        System.out.println("arl.indexOf():" + arl.indexOf("G"));
        System.out.println("arl.iterator()");
        Iterator<String> iter = arl.iterator();
        while (iter.hasNext()) System.out.println(iter.next());

    }

    public static void repeat(ArrayList<String> arl) {
        arl.add("A");
        arl.add(0, "B");
        arl.addFirst("C");
        arl.addLast("E");
        arl.addAll(Collections.singleton("D"));
        arl.addAll(Arrays.asList("D.", "F"));
        arl.addAll(Arrays.asList("D!"));
        arl.addAll(List.of("D.."));
    }
}
