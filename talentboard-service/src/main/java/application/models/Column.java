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
    private List<Applicant> applicants;

    public Column() {}

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public List<Applicant> getApplicants() {
        return applicants;
    }
}
