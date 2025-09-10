package com.javatpoint;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.sun.java.accessibility.util.*;
import com.sun.jdi.*;
import com.sun.management.*;
import com.sun.net.httpserver.*;
import com.sun.nio.sctp.*;
import com.sun.security.auth.*;
import com.sun.security.jgss.*;
import com.sun.source.doctree.*;
import com.sun.source.tree.*;
import com.sun.source.util.*;
import com.sun.tools.attach.*;
import com.sun.tools.javac.*;
import com.sun.tools.jconsole.*;
import java.applet.*;
import java.awt.*;
import java.beans.*;
import java.io.*;
import java.lang.*;
import java.math.*;
import java.net.*;
import java.nio.*;
import java.rmi.*;
import java.security.*;
import java.sql.*;
import java.text.*;
import java.time.*;
import java.util.*;
import java.util.stream.Collectors;
import javax.accessibility.*;
import javax.annotation.processing.*;
import javax.crypto.*;
import javax.imageio.*;
import javax.lang.model.*;
import javax.management.*;
import javax.net.*;
import javax.naming.*;
import javax.print.*;
import javax.script.*;
import javax.security.auth.*;
import javax.security.cert.*;
import javax.security.sasl.*;
import javax.smartcardio.*;
import javax.sound.midi.*;
import javax.sound.sampled.*;
import javax.sql.*;
import javax.swing.*;
import javax.tools.*;
import javax.transaction.xa.*;
import javax.xml.*;
import jdk.net.*;
import jdk.nio.*;
import jdk.jfr.*;
import jdk.dynalink.*;
import jdk.jshell.*;
import jdk.javadoc.doclet.*;
import jdk.management.jfr.*;
import jdk.security.jarsigner.*;
import netscape.javascript.*;
import org.ietf.jgss.*;
import org.w3c.dom.*;
import org.xml.sax.*;


@RestController
public class ProductController 
{
    @Autowired
    private IProductService productService;
    //mapping the getProduct() method to /product
    @GetMapping(value = "/product")
    public List<Product> getProduct()
    {
        //finds all the products
        List<Product> products = productService.findAll();
        //returns the product list
        return products;
    }

    /*************************************************** 1  (Leetcode) ********************************************************/

    public int[] twoSum(int[] nums, int target) {
        var hash = new HashMap<Integer, Integer>();
        for(int i=0;i<nums.length;i++){
            if(hash.keySet().contains(target-nums[i]))return new int[]{i,hash.get(target-nums[i])};
            hash.put(nums[i],i);
        }
        return new int[]{0,0};
    }

    @GetMapping("/1")
    public List<int[]> twoSum1() {
        List<int[]> results = new ArrayList<>();
        results.addAll(Arrays.asList(
                twoSum(new int[]{2,7,11,15}, 9),
                twoSum(new int[]{3,2,4}, 6),
                twoSum(new int[]{3,3}, 6)
        ));
        return results;
    }

    /*************************************************  3  **********************************************************/

    public int lengthOfLongestSubstring(String s) {var li = new ArrayList<String>();
        String s1 = "";
        for(int i=0;i<s.length();i++){if(!s1.contains(String.valueOf(s.charAt(i)))) s1 = s1 + s.charAt(i);
        else{li.add(s1);
            s1 = s1.substring( s1.indexOf(s.charAt(i))+1, s1.length()) + s.charAt(i);}}
        li.add(s1);
        return Collections.max(li.stream().map(i->i.length()).collect(Collectors.toList())); }

    @GetMapping("/3")
    public List<Integer> lengthOfLongestSubstring1() {
        List<Integer> results = new ArrayList<>();
        results.add(lengthOfLongestSubstring("abcabcbb"));   // expected 3
        results.add(lengthOfLongestSubstring("bbbbb"));      // expected 1
        results.add(lengthOfLongestSubstring("pwwkew"));     // expected 3
        results.add(lengthOfLongestSubstring("aabaab!bb"));  // expected 3
        return results;
    }
    /*************************************************  5  **********************************************************/

    public String longestPalindrome(String s) {
        String li = "";
        for(int i=0;i<s.length();i++){
            for(int j=s.length()+1;j>=(i+1);j--){
                if(s.substring(i,j).equals(new StringBuilder(s.substring(i,j)).reverse().toString())){
                    li = s.substring(i,j);
                    break;
                }
            }
        }
        return li;
    }

    @GetMapping("/5")
    public List<String> longestPalindrome1() {
        List<String> results = new ArrayList<>();
        results.add(longestPalindrome("abcabcbb"));
        results.add(longestPalindrome("bbbbb"));
        return results;
    }
    /***********************************************************************************************************/


}
