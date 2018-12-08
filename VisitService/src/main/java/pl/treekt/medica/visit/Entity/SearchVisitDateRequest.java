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
    private Integer eventTypeId;
    private String dateFrom;
    private String dateTo;
}
