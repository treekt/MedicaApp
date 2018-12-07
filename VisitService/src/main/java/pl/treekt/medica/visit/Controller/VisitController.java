package pl.treekt.medica.visit.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import pl.treekt.medica.visit.Document.Embedded.VisitType;
import pl.treekt.medica.visit.Document.Visit;
import pl.treekt.medica.visit.Entity.SchedulerEvent;
import pl.treekt.medica.visit.Entity.SearchVisitDate;
import pl.treekt.medica.visit.Repository.VisitRepository;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;

@RestController
@RequestMapping("/")
public class VisitController {

    private final VisitRepository visitRepository;
    private final RestTemplate restTemplate;
    private DateFormat dateFormat;

    @Autowired
    public VisitController(VisitRepository visitRepository, RestTemplate restTemplate) {
        this.visitRepository = visitRepository;
        this.restTemplate = restTemplate;

        this.dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm");
        this.dateFormat.setTimeZone(TimeZone.getTimeZone("GMT"));
    }

    @PostMapping()
    public void saveVisit(@RequestBody Visit visit) {
        System.out.println("saveVisit");
        this.visitRepository.save(visit);
    }

    @PostMapping("/{id}")
    public Visit getVisit(@PathVariable("id") Long id) {
        return this.visitRepository.findVisitById(id);
    }

    @GetMapping("/types")
    public List<VisitType> getAllVisitTypes() {
        List<VisitType> visitTypes = new ArrayList<>();

        VisitType visitType1 = new VisitType(0, "Konsultacja lekarska", 15);
        VisitType visitType2 = new VisitType(1, "Badanie", 20);
        visitTypes.add(visitType1);
        visitTypes.add(visitType2);

        return visitTypes;
    }

    @PostMapping("/dates/available")
    public List<String> getAvailableVisitDates(@RequestBody SearchVisitDate searchVisitDate) {
        List<SchedulerEvent> workEvents = getSchedulerEvents(searchVisitDate);
        Map<SchedulerEvent, List<Visit>> visitInEvents = new HashMap<>();

        //Fetching all visits in these work events
        for (SchedulerEvent event : workEvents) {
            visitInEvents.put(event, visitRepository.findVisitByDateBetween(event.getStart(), event.getEnd()));
        }

        int minuteMultiplier = (60 * 1000);
        List<String> availableDates = new ArrayList<>();

        //Searching available dates
        for (Map.Entry<SchedulerEvent, List<Visit>> pair : visitInEvents.entrySet()) {
            SchedulerEvent event = pair.getKey();
            List<Visit> visits = pair.getValue();

            long diff = event.getEnd().getTime() - event.getStart().getTime();
            int minutesBetweenDates = (int) (diff / minuteMultiplier);

            for (int minute = 0; minute <= minutesBetweenDates; minute++) {
                Date tempDate = new Date(event.getStart().getTime() + minute * minuteMultiplier);
                boolean visitExistsAlready = false;
                for (Visit visit : visits) {
                    if (visit.getDate().getTime() == tempDate.getTime()) {
                        visitExistsAlready = true;
                        minute += visit.getType().getDuration() -1;
                        visits.remove(visit);
                        break;
                    }
                }
                if (!visitExistsAlready) {
                    int minutePlusDuration = minute + searchVisitDate.getVisitType().getDuration();
                    if(minutePlusDuration <= minutesBetweenDates){
                        boolean canPutDate = true;
                        for(int insideMin = minute; insideMin <= minutePlusDuration; insideMin++){
                            for (Visit visit : visits) {
                                if (visit.getDate().getTime() == tempDate.getTime()) {
                                    canPutDate = false;
                                    visits.remove(visit);
                                    break;
                                }
                            }
                        }
                        availableDates.add(dateFormat.format(tempDate));
                        minute += searchVisitDate.getVisitType().getDuration() - 1;
                    }else{
                        break;
                    }
                }
            }
        }
        return availableDates;
    }


    private List<SchedulerEvent> getSchedulerEvents(SearchVisitDate searchVisitDate) {
        ResponseEntity<List<SchedulerEvent>> response = restTemplate.exchange("http://user-service/schedule/all/" + searchVisitDate.getOfficeUserId() + "/" + searchVisitDate.getVisitType().getId() + "/between/" + searchVisitDate.getDateFrom() + "/" + searchVisitDate.getDateTo(), HttpMethod.GET, null, new ParameterizedTypeReference<List<SchedulerEvent>>() {
        });
        return response.getBody();
    }

}
