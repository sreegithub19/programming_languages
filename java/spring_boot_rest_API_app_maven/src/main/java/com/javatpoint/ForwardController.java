package com.javatpoint;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ForwardController {

    // Forward all /angular/... routes (except files with dot) to Angular
    @GetMapping("/angular/{path:[^\\.]*}")
    public String forwardAngularRoutes() {
        return "forward:/angular/index.html";
    }
}