package pl.treekt.medica.visit.Entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import pl.treekt.medica.visit.Document.Embedded.VisitDetails;
import pl.treekt.medica.visit.Document.VisitType;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class VisitCompact {

    private String id;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private Date date;
    private String status;
    private VisitDetails visitDetails;
    private VisitType visitType;
    private Object user;
    private Object officeUser;

}
