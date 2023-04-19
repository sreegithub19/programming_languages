import java.util.*;

public class train {
    public static void main(String[] args){
        String[] arrays = "profile openid".split("\\s+");
        Arrays.sort(arrays);

        String str1 = "";
        for(int i=0;i<arrays.length;i++) {
            System.out.println(arrays[i]);
            str1 += (arrays[i] + " ");
        }
        System.out.println(str1.substring(0,str1.length()-1 ));

        Arrays.sort("profile openid".split("\\s+"));
        System.out.println(
                String.join(" ","profile openid".split("\\s+"))
        );
    }
}
