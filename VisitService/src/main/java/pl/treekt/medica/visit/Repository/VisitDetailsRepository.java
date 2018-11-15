package pl.treekt.medica.visit.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import pl.treekt.medica.visit.Document.VisitDetails;

@Repository
public interface VisitDetailsRepository extends MongoRepository<VisitDetails, String> {
}
