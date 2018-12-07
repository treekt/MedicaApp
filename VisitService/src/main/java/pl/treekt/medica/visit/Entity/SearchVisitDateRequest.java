package pl.treekt.medica.visit.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SearchVisitDateRequest {

    private String officeUserId;
    private String visitTypeId;
    private String dateFrom;
    private String dateTo;
}
