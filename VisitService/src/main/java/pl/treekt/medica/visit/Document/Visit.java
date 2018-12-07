package pl.treekt.medica.visit.Document;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import pl.treekt.medica.visit.Document.Embedded.VisitDetails;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "visits")
public class Visit {

    @Id
    private String id;
    @JsonFormat
    private Date date;
    private String status;
    private VisitType type;
    private VisitDetails visitDetails;
    private String userId;
    private String officeUserId;

}
