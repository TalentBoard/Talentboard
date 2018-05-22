package application.controllers;

import application.database.JobRepository;
import application.models.Job;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class JobController {

    private final JobRepository repository;

    public JobController(JobRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/jobs")
    public List<Job> getJobs() {
        return repository.findAll();
    }

    @GetMapping("/job/{id}")
    public Job getJob(@PathVariable String id) {
        return repository.findById(id).get();
    }

    @PostMapping("/job")
    public Job addJob(@RequestBody Job job) {
        return repository.save(job);
    }

    @DeleteMapping("/job/{id}")
    public void deleteJob(@PathVariable String id) {
        repository.deleteById(id);
    }


}
