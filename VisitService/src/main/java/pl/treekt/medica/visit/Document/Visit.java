package pl.treekt.medica.visit.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import pl.treekt.medica.visit.Document.Embedded.VisitDetails;
import pl.treekt.medica.visit.Enums.VisitStatus;

import java.util.Date;
import java.util.List;

@Data

@AllArgsConstructor
@Document(collection = "visits")
public class Visit {

    @Id
    private Long id;
    private Date date;
    private VisitStatus status;
    private VisitDetails visitDetails;
    private String userId;
    private String officeUserId;

}
