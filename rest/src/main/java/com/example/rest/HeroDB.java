package com.example.rest;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HeroDB {

    @GetMapping("/heronames")
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
}
