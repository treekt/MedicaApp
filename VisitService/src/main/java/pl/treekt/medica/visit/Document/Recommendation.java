package pl.treekt.medica.visit.Document;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "recommendation")
public class Recommendation {

    @Id
    private Long id;
    private String note;
    private Integer medicineId;
    private Long visitDetailsId;
}
