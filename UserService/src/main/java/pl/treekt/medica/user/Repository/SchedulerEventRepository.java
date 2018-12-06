package pl.treekt.medica.user.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import pl.treekt.medica.user.Document.SchedulerEvent;

import java.util.List;

@Repository
public interface SchedulerEventRepository extends MongoRepository<SchedulerEvent, Long> {

    List<SchedulerEvent> getAllByUserIdAndType(String userId, Integer type);
    List<SchedulerEvent> getAllByUserId(String userId);
    void deleteSchedulerEventById(String id);
}
