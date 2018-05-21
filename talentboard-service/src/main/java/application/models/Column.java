package application.models;

import java.util.List;

public class Column {

    private String id;
    private String name;
    private String jobId;
    private List<String> applicantIds;

    public Column() {}

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getJobId() {
        return jobId;
    }

    public void setJobId(String jobId) {
        this.jobId = jobId;
    }

    public List<String> getApplicantIds() {
        return applicantIds;
    }

    public void setApplicantIds(List<String> applicantIds) {
        this.applicantIds = applicantIds;
    }
}
