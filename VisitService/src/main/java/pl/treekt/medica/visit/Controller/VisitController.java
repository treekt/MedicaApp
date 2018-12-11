package pl.treekt.medica.visit.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import pl.treekt.medica.visit.Document.Visit;
import pl.treekt.medica.visit.Document.VisitType;
import pl.treekt.medica.visit.Entity.SchedulerEvent;
import pl.treekt.medica.visit.Entity.SearchVisitDateRequest;
import pl.treekt.medica.visit.Repository.VisitRepository;
import pl.treekt.medica.visit.Repository.VisitTypeRepository;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;

@RestController
@RequestMapping("/")
public class VisitController {

    private final VisitRepository visitRepository;
    private final VisitTypeRepository visitTypeRepository;

    private final RestTemplate restTemplate;
    private DateFormat dateFormat;

    @Autowired
    public VisitController(VisitRepository visitRepository, RestTemplate restTemplate, VisitTypeRepository visitTypeRepository) {
        this.visitRepository = visitRepository;
        this.visitTypeRepository = visitTypeRepository;
        this.restTemplate = restTemplate;

        this.dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm");
        this.dateFormat.setTimeZone(TimeZone.getTimeZone("GMT"));
    }

    @PostMapping()
    public Visit saveVisit(@RequestBody Visit visit) {
        return this.visitRepository.save(visit);
    }

    @GetMapping("/{id}")
    public Visit findVisitById(@PathVariable String id) {
        return this.visitRepository.findVisitById(id);
    }

    @PostMapping("/status/during/{id}")
    public Visit setDuringStatusOfVisit(@PathVariable String id){
        Visit visit = findVisitById(id);
        visit.setStatus("during");
        return saveVisit(visit);
    }

    @GetMapping("/all/office/{officeUserId}/{status}/{visitAll}")
    public List<Visit> getAllVisitsByOfficeUserIdAndStatusAndVisitAll(@PathVariable String officeUserId, @PathVariable String status, @PathVariable Boolean visitAll) {
        if(!visitAll){
            return visitRepository.findAllByStatus(status);
        }
        return visitRepository.findAllByOfficeUserIdAndStatus(officeUserId, status);
    }

    @GetMapping("/all/default/{userId}/{status}")
    public List<Visit> getAllVisitsByUserIdAndStatus(@PathVariable String userId, @PathVariable String status) {
        return visitRepository.findAllByUserIdAndStatus(userId, status);
    }

    @GetMapping("/all/office/today/{officeUserId}")
    public List<Visit> getAllPlannedAndDuringVisitsToday(@PathVariable String officeUserId) {
        Long time = new Date().getTime();
        Date thisDay = new Date(time - time % (24 * 60 * 60 * 1000));
        Date nextDay = new Date(thisDay.getTime() + 24 * 60 * 60 * 1000);
        return visitRepository.findAllByOfficeUserIdAndStatusOrStatusAndDateBetween(officeUserId, "planned", "during", thisDay, nextDay);
    }

    @PostMapping("/types")
    public VisitType saveVisitType(@RequestBody VisitType visitType) {
        return visitTypeRepository.save(visitType);
    }

    @DeleteMapping("/types/{id}")
    public void deleteVisitType(@PathVariable String id) {
        visitTypeRepository.deleteById(id);
    }

    @GetMapping("/types/{id}")
    public VisitType getVisitTypeById(@PathVariable String id) {
        return visitTypeRepository.findVisitTypeById(id);
    }

    @GetMapping("/types/all")
    public List<VisitType> findAllVisitTypes() {
        return visitTypeRepository.findAll();
    }

    @PostMapping("/dates/available")
    public List<String> getAvailableVisitDates(@RequestBody SearchVisitDateRequest searchVisitDateRequest) {
        List<SchedulerEvent> workEvents = getSchedulerEvents(searchVisitDateRequest);
        Map<SchedulerEvent, List<Visit>> visitInEvents = new HashMap<>();
        VisitType visitType = getVisitTypeById(searchVisitDateRequest.getVisitTypeId());

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
                        minute += visitType.getDuration() - 1;
                        visits.remove(visit);
                        break;
                    }
                }
                if (!visitExistsAlready) {
                    int minutePlusDuration = minute + visitType.getDuration();
                    if (minutePlusDuration <= minutesBetweenDates) {
                        boolean canPutDate = true;
                        for (int insideMin = minute; insideMin <= minutePlusDuration; insideMin++) {
                            for (Visit visit : visits) {
                                if (visit.getDate().getTime() == tempDate.getTime()) {
                                    canPutDate = false;
                                    visits.remove(visit);
                                    break;
                                }
                            }
                        }
                        availableDates.add(dateFormat.format(tempDate));
                        minute += visitType.getDuration() - 1;
                    } else {
                        break;
                    }
                }
            }
        }
        return availableDates;
    }


    private List<SchedulerEvent> getSchedulerEvents(SearchVisitDateRequest searchVisitDateRequest) {
        ResponseEntity<List<SchedulerEvent>> response = restTemplate.exchange("http://user-service/schedule/all/" + searchVisitDateRequest.getOfficeUserId() + "/" + searchVisitDateRequest.getEventTypeId() + "/between/" + searchVisitDateRequest.getDateFrom() + "/" + searchVisitDateRequest.getDateTo(), HttpMethod.GET, null, new ParameterizedTypeReference<List<SchedulerEvent>>() {
        });
        //TODO: It should be changed to POST method in the future
        return response.getBody();
    }

}
