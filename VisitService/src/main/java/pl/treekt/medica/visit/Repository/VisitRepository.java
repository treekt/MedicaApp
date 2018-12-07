package pl.treekt.medica.visit.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import pl.treekt.medica.visit.Document.Visit;

import java.util.Date;
import java.util.List;

@Repository
public interface VisitRepository extends MongoRepository<Visit, String> {

    Visit findVisitById(Long id);
    List<Visit> findVisitByDateBetween(Date dateFrom, Date dateTo);
}
