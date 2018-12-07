package pl.treekt.medica.visit.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "visitTypes")
public class VisitType {

    @Id
    private String id;
    private String name;
    private Integer duration;
}
