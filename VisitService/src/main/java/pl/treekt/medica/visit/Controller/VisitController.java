package pl.treekt.medica.visit.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import pl.treekt.medica.visit.Entity.SchedulerEvent;
import pl.treekt.medica.visit.Entity.SearchVisitDate;
import pl.treekt.medica.visit.Document.Visit;
import pl.treekt.medica.visit.Document.VisitType;
import pl.treekt.medica.visit.Repository.VisitRepository;
import rx.Scheduler;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/")
public class VisitController {

    private final VisitRepository visitRepo;

    @Autowired
    public VisitController(VisitRepository visitRepo) {
        this.visitRepo = visitRepo;
    }

    @PostMapping()
    public void saveVisit(@RequestBody Visit visit) {
        System.out.println("saveVisit");
        this.visitRepo.save(visit);
    }

    @PostMapping("/{id}")
    public Visit getVisit(@PathVariable("id") Long id) {
        return this.visitRepo.findVisitById(id);
    }

    @GetMapping("/types")
    public List<VisitType> getAllVisitTypes(){
        List<VisitType> visitTypes = new ArrayList<>();

        VisitType visitType1 = new VisitType(0, "Konsultacja lekarska", 15);
        VisitType visitType2 = new VisitType(1, "Badanie", 20);
        visitTypes.add(visitType1);
        visitTypes.add(visitType2);

        return visitTypes;
    }

    @GetMapping("/availableDates")
    public List<String> getAvailableVisitDates(@PathVariable SearchVisitDate searchVisitDate){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List<SchedulerEvent>> response = restTemplate.exchange(
                "http://user-service/schedule/all/" + searchVisitDate.getOfficeUserId() + "/" + searchVisitDate.getVisitTypeId(),
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<List<SchedulerEvent>>(){});
        List<SchedulerEvent> workEvents = response.getBody();
        return null;
    }

}
