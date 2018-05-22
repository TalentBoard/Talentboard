package application.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
public class Column {

    @Id
    private String id;

    private String name;

    @DBRef
    private Job job;

    @DBRef
    private List<Applicant> applicants;

    public Column() {}

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Job getJob() {
        return job;
    }

    public List<Applicant> getApplicants() {
        return applicants;
    }
}
