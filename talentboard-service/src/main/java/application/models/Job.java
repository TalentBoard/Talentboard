package application.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
public class Job {

    @Id
    private String id;

    private String title;

    @DBRef
    private List<Column> columns;

    public Job() {}

    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public List<Column> getColumnIds() {
        return columns;
    }
}
