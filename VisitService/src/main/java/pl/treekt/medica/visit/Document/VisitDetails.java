package pl.treekt.medica.visit.Document;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document(collection = "visitDetails")
public class VisitDetails {

    @Id
    private Long id;
    private String interview;
    private String opinion;
    private List<Long> diagnosis;
    private List<Long> recommendation;

}
