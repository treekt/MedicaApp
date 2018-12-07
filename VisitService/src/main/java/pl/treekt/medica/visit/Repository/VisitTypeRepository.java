package pl.treekt.medica.visit.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import pl.treekt.medica.visit.Document.VisitType;

public interface VisitTypeRepository extends MongoRepository<VisitType, String> {

    VisitType findVisitTypeById(String id);
}
