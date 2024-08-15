package com.example.demo;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.nio.charset.StandardCharsets;
import java.nio.file.Paths;
import java.io.IOException;
import java.nio.file.Files;


@RestController
public class HelloWorldController {

	@RequestMapping
	public String helloWorld() throws IOException {
		return new String(Files.readAllBytes(Paths.get("./src/main/resources/static/helloWorld.html")), StandardCharsets.UTF_8);
	}

	@RequestMapping("/chess")
	public String chess() throws IOException {
		return new String(Files.readAllBytes(Paths.get("./src/main/resources/static/chess.html")), StandardCharsets.UTF_8);
	}

	@RequestMapping("/calculator")
	public String calculator() throws IOException {
		return new String(Files.readAllBytes(Paths.get("./src/main/resources/static/calculator.html")), StandardCharsets.UTF_8);
	}

	@RequestMapping("/sass_")
	public String sass_() throws IOException {
		return new String(Files.readAllBytes(Paths.get("./src/main/resources/static/sass_.html")), StandardCharsets.UTF_8);
	}

	@RequestMapping("/maze")
	public String maze() throws IOException {
		return new String(Files.readAllBytes(Paths.get("./src/main/resources/static/maze.html")), StandardCharsets.UTF_8);
	}

	@RequestMapping("/codepen")
	public String codepen() throws IOException {
		return new String(Files.readAllBytes(Paths.get("./src/main/resources/static/codepen.html")), StandardCharsets.UTF_8);
	}

	@RequestMapping("/tilt_maze")
	public String tilt_maze() throws IOException {
		return new String(Files.readAllBytes(Paths.get("./src/main/resources/static/tilt_maze.html")), StandardCharsets.UTF_8);
	}

	@RequestMapping("/tic_tac_toe")
	public String tic_tac_toe() throws IOException {
		return new String(Files.readAllBytes(Paths.get("./src/main/resources/static/tic_tac_toe.html")), StandardCharsets.UTF_8);
	}

	@RequestMapping("/clock")
	public String clock() throws IOException {
		return new String(Files.readAllBytes(Paths.get("./src/main/resources/static/clock.html")), StandardCharsets.UTF_8);
	}

	@RequestMapping("/hangman")
	public String hangman() throws IOException {
		return new String(Files.readAllBytes(Paths.get("./src/main/resources/static/hangman.html")), StandardCharsets.UTF_8);
	}

	@RequestMapping("/puzzles")
	public String puzzles() throws IOException {
		return new String(Files.readAllBytes(Paths.get("./src/main/resources/static/puzzles.html")), StandardCharsets.UTF_8);
	}

	@RequestMapping("/sudoku")
	public String sudoku() throws IOException {
		return new String(Files.readAllBytes(Paths.get("./src/main/resources/static/sudoku.html")), StandardCharsets.UTF_8);
	}

	@RequestMapping("/virtual_keyboard")
	public String virtual_keyboard() throws IOException {
		return new String(Files.readAllBytes(Paths.get("./src/main/resources/static/virtual_keyboard.html")), StandardCharsets.UTF_8);
	}

	@RequestMapping("/solitaire")
	public String solitaire() throws IOException {
		return new String(Files.readAllBytes(Paths.get("./src/main/resources/static/solitaire.html")), StandardCharsets.UTF_8);
	}

	@RequestMapping("/dino")
	public String dino() throws IOException {
		return new String(Files.readAllBytes(Paths.get("./src/main/resources/static/dino.html")), StandardCharsets.UTF_8);
	}

}

