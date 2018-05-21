package application.controllers;

import application.models.Job;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class JobController {

    List<Job> jobs = new ArrayList<>();

    @GetMapping("/jobs")
    public List<Job> getJobs() {
        return jobs;
    }

    @GetMapping("/job/{id}")
    public Job getJob(@PathVariable String id) {
        for (Job job: jobs) {
            if (job.getId().equals(id)) {
                return job;
            }
        }
        return new Job();
    }

    @PostMapping("/job")
    public Job addJob(@RequestBody Job newJob) {
        jobs.add(newJob);
        return newJob;
    }

    @DeleteMapping("/job/{id}")
    public Job deleteJob(@PathVariable String id) {
        for (Job job: jobs) {
            if (job.getId().equals(id)) {
                jobs.remove(job);
                return job;
            }
        }

        return new Job();
    }


}
