package pl.treekt.medica.visit.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.treekt.medica.visit.Document.Visit;
import pl.treekt.medica.visit.Enums.VisitStatus;
import pl.treekt.medica.visit.Repository.VisitRepository;

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
        this.visitRepo.save(visit);
    }

    @PostMapping("/{id}")
    public Visit getVisit(@PathVariable("id") Long id) {
        return this.visitRepo.findVisitById(id);
    }

}
