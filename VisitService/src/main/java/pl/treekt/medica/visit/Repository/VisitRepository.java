package pl.treekt.medica.visit.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import pl.treekt.medica.visit.Document.Visit;

import java.util.Date;
import java.util.List;

@Repository
public interface VisitRepository extends MongoRepository<Visit, String> {

    Visit findVisitById(String id);
    List<Visit> findVisitByDateBetween(Date dateFrom, Date dateTo);
    List<Visit> findAllByUserIdAndStatus(String userId, String status);
    List<Visit> findAllByStatus(String status);
    List<Visit> findAllByOfficeUserIdAndStatus(String officeUserId, String status);
    List<Visit> findAllByOfficeUserIdAndStatusOrStatusAndDateBetween(String officeUserId, String status, String status2, Date date, Date date2);
    Integer countVisitsByStatus(String status);
}
