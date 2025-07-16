// package com.example.demo;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;
// import java.nio.charset.StandardCharsets;
// import java.nio.file.Paths;
// import java.io.IOException;
// import java.nio.file.Files;


// @RestController
// public class HelloWorldController {

// 	@RequestMapping
// 	public String helloWorld() throws IOException {
// 		return new String(Files.readAllBytes(Paths.get("./src/main/resources/static/helloWorld.html")), StandardCharsets.UTF_8);
// 	}

// 	@RequestMapping("/chess")
// 	public String chess() throws IOException {
// 		return new String(Files.readAllBytes(Paths.get("./src/main/resources/static/chess.html")), StandardCharsets.UTF_8);
// 	}

// 	@RequestMapping("/calculator")
// 	public String calculator() throws IOException {
// 		return new String(Files.readAllBytes(Paths.get("./src/main/resources/static/calculator.html")), StandardCharsets.UTF_8);
// 	}

// 	@RequestMapping("/sass_")
// 	public String sass_() throws IOException {
// 		return new String(Files.readAllBytes(Paths.get("./src/main/resources/static/sass_.html")), StandardCharsets.UTF_8);
// 	}

// 	@RequestMapping("/maze")
// 	public String maze() throws IOException {
// 		return new String(Files.readAllBytes(Paths.get("./src/main/resources/static/maze.html")), StandardCharsets.UTF_8);
// 	}

// 	@RequestMapping("/codepen")
// 	public String codepen() throws IOException {
// 		return new String(Files.readAllBytes(Paths.get("./src/main/resources/static/codepen.html")), StandardCharsets.UTF_8);
// 	}

// 	@RequestMapping("/tilt_maze")
// 	public String tilt_maze() throws IOException {
// 		return new String(Files.readAllBytes(Paths.get("./src/main/resources/static/tilt_maze.html")), StandardCharsets.UTF_8);
// 	}

// 	@RequestMapping("/tic_tac_toe")
// 	public String tic_tac_toe() throws IOException {
// 		return new String(Files.readAllBytes(Paths.get("./src/main/resources/static/tic_tac_toe.html")), StandardCharsets.UTF_8);
// 	}

// 	@RequestMapping("/clock")
// 	public String clock() throws IOException {
// 		return new String(Files.readAllBytes(Paths.get("./src/main/resources/static/clock.html")), StandardCharsets.UTF_8);
// 	}

// 	@RequestMapping("/hangman")
// 	public String hangman() throws IOException {
// 		return new String(Files.readAllBytes(Paths.get("./src/main/resources/static/hangman.html")), StandardCharsets.UTF_8);
// 	}

// 	@RequestMapping("/puzzles")
// 	public String puzzles() throws IOException {
// 		return new String(Files.readAllBytes(Paths.get("./src/main/resources/static/puzzles.html")), StandardCharsets.UTF_8);
// 	}

// 	@RequestMapping("/sudoku")
// 	public String sudoku() throws IOException {
// 		return new String(Files.readAllBytes(Paths.get("./src/main/resources/static/sudoku.html")), StandardCharsets.UTF_8);
// 	}

// 	@RequestMapping("/virtual_keyboard")
// 	public String virtual_keyboard() throws IOException {
// 		return new String(Files.readAllBytes(Paths.get("./src/main/resources/static/virtual_keyboard.html")), StandardCharsets.UTF_8);
// 	}

// 	@RequestMapping("/solitaire")
// 	public String solitaire() throws IOException {
// 		return new String(Files.readAllBytes(Paths.get("./src/main/resources/static/solitaire.html")), StandardCharsets.UTF_8);
// 	}

// 	@RequestMapping("/dino")
// 	public String dino() throws IOException {
// 		return new String(Files.readAllBytes(Paths.get("./src/main/resources/static/dino.html")), StandardCharsets.UTF_8);
// 	}

// }



package com.example.demo;

import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.InputStream;
import java.io.IOException;
import java.nio.charset.StandardCharsets;

@RestController
public class HelloWorldController {

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
}
