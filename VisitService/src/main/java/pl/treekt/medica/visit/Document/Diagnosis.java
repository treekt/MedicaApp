package pl.treekt.medica.visit.Document;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "diagnosis")
public class Diagnosis {

    @Id
    private Long id;
    private String note;
    private Integer deseaseId;
    private Long visitDetailsId;
}
