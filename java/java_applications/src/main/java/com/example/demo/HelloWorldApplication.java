//Vert.x and Spring Boot comparison


package com.example.demo;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class HelloWorldApplication {

	public static void main(String[] args) {
		SpringApplication.run(HelloWorldApplication.class, args);
	}

}

//@RestController
//class HelloWorldController {
//
//	@RequestMapping
//	public String helloWorld(){
//		return
//				"""
//				Hello from Vert.x!
//				""";
//	}
//
//}