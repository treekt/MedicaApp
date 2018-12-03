package pl.treekt.medica.archive.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.treekt.medica.archive.Document.Desease;
import pl.treekt.medica.archive.Repository.DeseaseRepository;

import java.util.List;

@RestController
@RequestMapping("/desease")
public class DiseaseController {

    private final DeseaseRepository deseaseRepository;

    @Autowired
    public DiseaseController(DeseaseRepository deseaseRepository) {
        this.deseaseRepository = deseaseRepository;
    }

    @GetMapping("/categoryCode/{categoryCode}")
    public List<Desease> getAllByCategoryCode(@PathVariable String categoryCode) {
        return deseaseRepository.getAllByCategoryCode(categoryCode);
    }

    @GetMapping("/subcategoryCode/{subcategoryCode}")
    public Desease getDeseaseBySubcategoryCode(@PathVariable String subcategoryCode){
        return deseaseRepository.getDeseaseBySubcategoryCode(subcategoryCode);
    }

}
