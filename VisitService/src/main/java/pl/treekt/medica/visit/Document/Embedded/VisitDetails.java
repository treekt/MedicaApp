package pl.treekt.medica.visit.Document.Embedded;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class VisitDetails {

    private String interview;
    private String diagnosis;
    private String recommendation;
    private List<Integer> deseases;
    private List<VisitMedicine> medicines;

}
