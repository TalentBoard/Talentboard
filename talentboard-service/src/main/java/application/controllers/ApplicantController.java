package application.controllers;

import application.database.ApplicantRepository;
import application.models.Applicant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ApplicantController {

    private final ApplicantRepository repository;

    @Autowired
    public ApplicantController(ApplicantRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/applicants")
    public List<Applicant> getApplicants()  {
        return repository.findAll();
    }

    @GetMapping("/applicant/{id}")
    public Applicant getApplicant(@PathVariable String id) {
        return repository.findById(id).get();
    }

    @PostMapping("/applicant")
    public Applicant addApplicant(@RequestBody Applicant applicant) {
        return repository.save(applicant);
    }

    @DeleteMapping("/applicant/{id}")
    public void deleteApplicant(@PathVariable String id) {
        repository.deleteById(id);
    }

}
