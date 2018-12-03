package pl.treekt.medica.archive.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import pl.treekt.medica.archive.Document.Medicine;

import java.util.List;

public interface MedicineRepository extends MongoRepository<Medicine, String> {

    List<Medicine> getAllByProductType(String productType);
    List<Medicine> getAllByProductNameAndProductType(String productName, String productType);
}
