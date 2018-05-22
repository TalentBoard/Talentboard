package application.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Applicant {

    @Id
    private String id;
    private String fullName;
    private String email;
    private String state;

    public Applicant() {}

    public String getId() {
        return id;
    }

    public String getFullName() {
        return fullName;
    }

    public String getEmail() {
        return email;
    }

    public String getState() {
        return state;
    }

    @Override
    public String toString() {
        return String.format(
                "Applicant[id=%s, fullName='%s', email='%s', state='%s'",
                id, fullName, email, state
        );
    }
}
