package pl.treekt.medica.visit.Document.Embedded;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

public class VisitDetails {


    private String interview;
    private String diagnosis;
    private String recommendation;
    private List<Integer> deseases;
    private List<String> medicines;

}
