package pl.treekt.medica.user.Controller;

import org.apache.commons.lang.time.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.ServletRequestDataBinder;
import org.springframework.web.bind.annotation.*;
import pl.treekt.medica.user.Document.SchedulerEvent;
import pl.treekt.medica.user.Repository.SchedulerEventRepository;

import javax.servlet.http.HttpServletRequest;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/schedule")
public class ScheduleController {

    private final SchedulerEventRepository schedulerEventRepository;

    @Autowired
    public ScheduleController(SchedulerEventRepository schedulerEventRepository) {
        this.schedulerEventRepository = schedulerEventRepository;
    }

    @PostMapping
    public SchedulerEvent saveEvent(@RequestBody SchedulerEvent schedulerEvent) {
        SchedulerEvent event = schedulerEventRepository.save(schedulerEvent);
        System.out.println(event.getStart() + " -- " + event.getEnd() + "(" + event.getStart().getTime());
        return event;
    }

    @DeleteMapping("/{id}")
    public void deleteEvent(@PathVariable String id) {
        schedulerEventRepository.deleteSchedulerEventById(id);
    }

    @GetMapping("/all")
    public List<SchedulerEvent> findAllSchedules() {
        return schedulerEventRepository.findAll();
    }

    @GetMapping("/all/{userId}")
    public List<SchedulerEvent> findAllSchedulesByUserId(@PathVariable() String userId) {
        return schedulerEventRepository.findAllByUserId(userId);
    }

    @GetMapping("/all/{userId}/{type}")
    public List<SchedulerEvent> findAllSchedulesByUserIdAndType(@PathVariable() String userId, @PathVariable() Integer type) {
        return schedulerEventRepository.findAllByUserIdAndType(userId, type);
    }

    @GetMapping("/all/{userId}/{type}/between/{minDate}/{maxDate}")
    public List<SchedulerEvent> findAllSchedulesByUserIdAndTypeAndBetweenDates(
            @PathVariable() String userId,
            @PathVariable() Integer type,
            @PathVariable @DateTimeFormat(pattern = "yyyy-MM-dd") Date minDate,
            @PathVariable @DateTimeFormat(pattern = "yyyy-MM-dd") Date maxDate) {

        minDate = DateUtils.addHours(minDate, 1);
        maxDate = DateUtils.addHours(maxDate, 1);
        System.out.println("wyszło");
        return schedulerEventRepository.findAllByUserIdAndTypeAndStartGreaterThanEqualAndEndLessThanEqual(userId, type, minDate, maxDate);
    }
}
