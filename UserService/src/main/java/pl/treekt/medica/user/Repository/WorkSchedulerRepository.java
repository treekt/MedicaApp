package pl.treekt.medica.user.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import pl.treekt.medica.user.Document.WorkScheduler;

import java.util.List;

public interface WorkSchedulerRepository extends MongoRepository<WorkScheduler, Long> {


    List<WorkScheduler> getAllByUserIdAndType(String userId, Integer type);
    List<WorkScheduler> getAllByUserId(String userId);
}
