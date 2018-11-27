package pl.treekt.medica.user.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.treekt.medica.user.Document.WorkScheduler;
import pl.treekt.medica.user.Repository.WorkSchedulerRepository;

import java.util.List;

@RestController
@RequestMapping("/workScheduler")
public class WorkSchedulerController {

    private final WorkSchedulerRepository workSchedulerRepository;

    @Autowired
    public WorkSchedulerController(WorkSchedulerRepository workSchedulerRepository) {
        this.workSchedulerRepository = workSchedulerRepository;
    }

    @PostMapping
    public void saveEvent(@RequestBody WorkScheduler workScheduler){
        workSchedulerRepository.save(workScheduler);
    }

    @GetMapping("/all/{userId}")
    public List<WorkScheduler> getAllSchedulesByUserId(@PathVariable() String userId){
        return workSchedulerRepository.getAllByUserId(userId);
    }

    @GetMapping("/all/{userId}/{type}")
    public List<WorkScheduler> getAllSchedulesByUserIdAndType(@PathVariable() String userId, @PathVariable() Integer type){
        return workSchedulerRepository.getAllByUserIdAndType(userId, type);
    }
}
