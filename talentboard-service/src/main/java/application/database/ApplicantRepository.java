package application.database;

import application.models.Applicant;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ApplicantRepository extends MongoRepository<Applicant, String> {

}
