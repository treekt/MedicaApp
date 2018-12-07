package pl.treekt.medica.visit.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SearchVisitDate {

    private String officeUserId;
    private Integer visitTypeId;
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm")
    private Date dateFrom;
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm")
    private Date dateTo;
}
