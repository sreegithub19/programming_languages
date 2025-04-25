package com.example.demo.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
class HelloController {

    // http://localhost:8080/hello?name=test
    @GetMapping("/hello")
    fun sayHello(@RequestParam name: String): String {
        return "Hello, $name!"
    }
}