package application.controllers;

import application.models.Applicant;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@RestController
public class ApplicantController {

    @GetMapping("/applicants")
    public List<Applicant> getApplicants()  {
        return new ArrayList<>();
    }

    @GetMapping("/applicant/{id}")
    public Applicant getApplicant(@PathVariable String id) {
        return new Applicant();
    }

    @PostMapping("/applicant")
    public Applicant addApplicant(@RequestBody Applicant applicant) {
        return applicant;
    }

    @DeleteMapping("/applicant/{id}")
    public Applicant deleteApplicant(@PathVariable String id) {
        return new Applicant();
    }

}
