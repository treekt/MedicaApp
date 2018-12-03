package pl.treekt.medica.archive.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import pl.treekt.medica.archive.Document.Desease;

import java.util.List;

@Repository
public interface DeseaseRepository extends MongoRepository<Desease, String> {


    List<Desease> findAllByNameContaining(String name);
    List<Desease> findAllByCodeContaining(String code);
}
