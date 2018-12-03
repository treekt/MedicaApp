package pl.treekt.medica.archive.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.treekt.medica.archive.Document.Medicine;
import pl.treekt.medica.archive.Repository.MedicineRepository;

import java.util.List;

@RestController
@RequestMapping("/medicine")
public class MedicineController {

    private final MedicineRepository medicineRepository;

    @Autowired
    public MedicineController(MedicineRepository medicineRepository) {
        this.medicineRepository = medicineRepository;
    }

    @GetMapping("/name/{productName}")
    public List<Medicine> getMedicineByName(@PathVariable String productName){
        return medicineRepository.getAllByProductNameAndProductType(productName, "ludzki");
    }
}
