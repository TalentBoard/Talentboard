package application.controllers;

import application.models.Applicant;
import org.springframework.web.bind.annotation.*;

import java.util.concurrent.atomic.AtomicLong;

@RestController
public class ApplicantController {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @RequestMapping("/greeting")
    public Applicant greeting(@RequestBody Applicant applicant)  {
        return applicant;
    }

    @GetMapping("/hello")
    public String hello() {
        return "hello";
    }

}
