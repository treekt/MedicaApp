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


    @GetMapping("/all/name/{name}")
    public List<Desease> getAllContainsName(@PathVariable String name){
        return deseaseRepository.findAllByNameContaining(name);
    }

    @GetMapping("/all/code/{code}")
    public List<Desease> getAllContainsCode(@PathVariable String code){
        return deseaseRepository.findAllByCodeContaining(code);
    }

    @GetMapping("/all/{codeOrName}")
    public List<Desease> getAllContainsCodeOrName(@PathVariable String codeOrName) {
        return deseaseRepository.findAllByCodeContainingOrNameContaining(codeOrName, codeOrName);
    }

}
