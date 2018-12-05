package pl.treekt.medica.user.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import pl.treekt.medica.user.Document.Schedule;

import java.util.List;

@Repository
public interface ScheduleRepository extends MongoRepository<Schedule, Long> {


    List<Schedule> getAllByUserIdAndType(String userId, Integer type);
    List<Schedule> getAllByUserId(String userId);
}
