package pl.treekt.medica.user.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import pl.treekt.medica.user.Document.SchedulerEvent;

import java.util.Date;
import java.util.List;

@Repository
public interface SchedulerEventRepository extends MongoRepository<SchedulerEvent, Long> {

    List<SchedulerEvent> findAllByUserIdAndType(String userId, Integer type);

    List<SchedulerEvent> findAllByUserIdAndTypeAndStartGreaterThanEqualAndEndLessThanEqual(String userId, Integer type, Date start, Date end);

    List<SchedulerEvent> findAllByUserId(String userId);

    void deleteSchedulerEventById(String id);
}
