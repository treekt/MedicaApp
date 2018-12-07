package pl.treekt.medica.visit.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import pl.treekt.medica.visit.Document.Embedded.VisitType;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SearchVisitDate {

    private String officeUserId;
    private VisitType visitType;
    private String dateFrom;
    private String dateTo;
}
