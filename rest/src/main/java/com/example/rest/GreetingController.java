package com.example.rest;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.concurrent.atomic.AtomicLong;

@RestController
public class GreetingController {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @GetMapping("/greeting")
    public Greeting greeting(@RequestParam(value = "name", defaultValue = "World") String name) {
        return new Greeting(counter.incrementAndGet(), String.format(template, name));
    }
    @CrossOrigin
    @GetMapping("/heroname")
    public Hero[] getHeroes()
    {
        return new Hero[]{  new Hero(1, "Dr Nice"),
                            new Hero(2,"Narco"),
                            new Hero(3,"Bombasto"),
                            new Hero(4,"Celeritas"),
                            new Hero(5,"Magneta"),
                            new Hero(6,"Magneta"),
                            new Hero(7,"Dynama"),
                            new Hero(8,"Dr IQ"),
                            new Hero(9,"Magma"),
                            new Hero(10,"Tornado")};
        }
       /* return new String[][]{{"i" , "Dr Nice"},
                {"2" , "Narco"},
                {"3" , "Bombasto"},
                {"4" , "Celeritas"},
                {"5" , "Magneta"},
                {"6" , "RMagneta"},
                {"7" , "Dynama"},
                {"8" , "Dr IQ"},
                {"9" , "Magma"},
                {"10", "Tornado"}}.stream();
    }*/
}