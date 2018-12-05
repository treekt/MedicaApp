package pl.treekt.medica.user.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.treekt.medica.user.Document.Schedule;
import pl.treekt.medica.user.Repository.ScheduleRepository;

import java.util.List;

@RestController
@RequestMapping("/schedule")
public class ScheduleController {

    private final ScheduleRepository scheduleRepository;

    @Autowired
    public ScheduleController(ScheduleRepository scheduleRepository) {
        this.scheduleRepository = scheduleRepository;
    }

    @PostMapping
    public Schedule saveEvent(@RequestBody Schedule schedule){
         return scheduleRepository.save(schedule);
    }

    @GetMapping("/all/{userId}")
    public List<Schedule> getAllSchedulesByUserId(@PathVariable() String userId){
        return scheduleRepository.getAllByUserId(userId);
    }

    @GetMapping("/all/{userId}/{type}")
    public List<Schedule> getAllSchedulesByUserIdAndType(@PathVariable() String userId, @PathVariable() Integer type){
        return scheduleRepository.getAllByUserIdAndType(userId, type);
    }
}
