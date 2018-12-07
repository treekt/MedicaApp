package pl.treekt.medica.user.Controller;

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
        return schedulerEventRepository.save(schedulerEvent);
    }

    @DeleteMapping("/{id}")
    public void deleteEvent(@PathVariable String id) {
        schedulerEventRepository.deleteSchedulerEventById(id);
    }

    @GetMapping("/all")
    public List<SchedulerEvent> getAllSchedules() {
        return schedulerEventRepository.findAll();
    }

    @GetMapping("/all/{userId}")
    public List<SchedulerEvent> getAllSchedulesByUserId(@PathVariable() String userId) {
        return schedulerEventRepository.getAllByUserId(userId);
    }

    @GetMapping("/all/{userId}/{type}")
    public List<SchedulerEvent> getAllSchedulesByUserIdAndType(@PathVariable() String userId, @PathVariable() Integer type) {
        return schedulerEventRepository.getAllByUserIdAndType(userId, type);
    }

    @GetMapping("/all/{userId}/{type}/between/{minDate}/{maxDate}")
    public List<SchedulerEvent> getAllSchedulesByUserIdAndTypeAndBetweenDates(
            @PathVariable() String userId,
            @PathVariable() Integer type,
            @PathVariable @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm") Date minDate,
            @PathVariable @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm") Date maxDate) {

        System.out.println(minDate.toString() + " - " + maxDate.toString());
        return schedulerEventRepository.getAllByUserIdAndTypeAndStartAfterAndEndBefore(userId, type, minDate, maxDate);
    }
}
