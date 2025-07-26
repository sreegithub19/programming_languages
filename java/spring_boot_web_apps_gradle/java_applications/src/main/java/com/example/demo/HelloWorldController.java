package com.example.demo;

import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.InputStream;
import java.io.IOException;
import java.nio.charset.StandardCharsets;

import java.util.Map;
import java.util.HashMap;
import java.util.Arrays;

@RestController
public class HelloWorldController {

    // 1A
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> pairIdx = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            int num = nums[i];
            if (pairIdx.containsKey(target - num)) {
                return new int[] { i, pairIdx.get(target - num) };
            }
            pairIdx.put(num, i);
        }

        return new int[] {};        
    }

    private String loadHtml(String filename) throws IOException {
        try (InputStream is = getClass().getClassLoader().getResourceAsStream("static/" + filename)) {
            if (is == null) {
                throw new IOException("File not found in classpath: static/" + filename);
            }
            return StreamUtils.copyToString(is, StandardCharsets.UTF_8);
        }
    }

    @RequestMapping("/add")
    public String addNumbers() throws IOException {
        int a = 7;
        int b = 5;
        int sum = a + b;
        return String.valueOf(sum);
    }

    @RequestMapping
    public String helloWorld() throws IOException {
        return loadHtml("helloWorld.html");
    }

    @RequestMapping("/chess")
    public String chess() throws IOException {
        return loadHtml("chess.html");
    }

    @RequestMapping("/calculator")
    public String calculator() throws IOException {
        return loadHtml("calculator.html");
    }

    @RequestMapping("/sass_")
    public String sass_() throws IOException {
        return loadHtml("sass_.html");
    }

    @RequestMapping("/maze")
    public String maze() throws IOException {
        return loadHtml("maze.html");
    }

    @RequestMapping("/codepen")
    public String codepen() throws IOException {
        return loadHtml("codepen.html");
    }

    @RequestMapping("/tilt_maze")
    public String tilt_maze() throws IOException {
        return loadHtml("tilt_maze.html");
    }

    @RequestMapping("/tic_tac_toe")
    public String tic_tac_toe() throws IOException {
        return loadHtml("tic_tac_toe.html");
    }

    @RequestMapping("/clock")
    public String clock() throws IOException {
        return loadHtml("clock.html");
    }

    @RequestMapping("/hangman")
    public String hangman() throws IOException {
        return loadHtml("hangman.html");
    }

    @RequestMapping("/puzzles")
    public String puzzles() throws IOException {
        return loadHtml("puzzles.html");
    }

    @RequestMapping("/sudoku")
    public String sudoku() throws IOException {
        return loadHtml("sudoku.html");
    }

    @RequestMapping("/virtual_keyboard")
    public String virtual_keyboard() throws IOException {
        return loadHtml("virtual_keyboard.html");
    }

    @RequestMapping("/solitaire")
    public String solitaire() throws IOException {
        return loadHtml("solitaire.html");
    }

    @RequestMapping("/dino")
    public String dino() throws IOException {
        return loadHtml("dino.html");
    }

    @RequestMapping("/1A")
    public String testTwoSum() throws IOException {
        int[][] testInputs = {
                {3, 3},
                {-1, -2, -3, -4},
                {1000000000, 1000000000},
                {1, 5, 7, 9},
                {1, 2, 3, 4, 5, 6, 7, 8, 9, 10},
                {0, 4, 3, 0},
        };

        StringBuilder result = new StringBuilder();

        for (int[] input : testInputs) {
            int target = input.length > 1 ? input[0] + input[1] : 0;
            int[] res = twoSum(input, target);
            result.append("Input: ").append(Arrays.toString(input))
                  .append(" => Output (target ").append(target).append("): ");
            result.append(res.length == 0 ? "None" : Arrays.toString(res)).append("<br>");
        }

        return result.toString();
    }

}
