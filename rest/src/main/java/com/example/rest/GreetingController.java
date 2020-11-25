package com.example.rest;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.atomic.AtomicLong;

@RestController
public class GreetingController {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @GetMapping("/greeting")
    public Greeting greeting(@RequestParam(value = "name", defaultValue = "World") String name) {
        return new Greeting(counter.incrementAndGet(), String.format(template, name));
    }

    @GetMapping("/heroname")
    public String[][] database()
    {
        return new String[][]{{"i" , "Dr Nice"},
                {"2" , "Narco"},
                {"3" , "Bombasto"},
                {"4" , "Celeritas"},
                {"5" , "Magneta"},
                {"6" , "RubberMan"},
                {"7" , "Dynama"},
                {"8" , "Dr IQ"},
                {"9" , "Magma"},
                {"10", "Tornado"}};
    }
}