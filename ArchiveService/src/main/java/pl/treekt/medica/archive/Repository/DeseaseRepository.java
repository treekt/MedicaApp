package pl.treekt.medica.archive.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import pl.treekt.medica.archive.Document.Desease;

import java.util.List;

public interface DeseaseRepository extends MongoRepository<Desease, String> {

    List<Desease> getAllByCategoryCode(String categoryCode);
    Desease getDeseaseBySubcategoryCode(String subcategoryCode);
}
