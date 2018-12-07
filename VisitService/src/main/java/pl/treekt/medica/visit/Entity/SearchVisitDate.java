package pl.treekt.medica.visit.Entity;

import com.fasterxml.jackson.annotation.JsonFormat;
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
    @JsonFormat
    private Date dateFrom;
    @JsonFormat
    private Date dateTo;
}
