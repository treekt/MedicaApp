package pl.treekt.medica.visit.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DiagnosisRepository extends MongoRepository<Diagnosis, String> {
}
