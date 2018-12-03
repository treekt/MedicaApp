package pl.treekt.medica.visit.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import pl.treekt.medica.visit.Document.Embedded.VisitDetails;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "visits")
public class Visit {

    @Id
    private String id;
    private String date;
    private String status;
    private VisitDetails visitDetails;
    private String userId;
    private String officeUserId;

}
