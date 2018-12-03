package pl.treekt.medica.archive.Document;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "deseases")
public class Desease {

    @Id
    private Integer id;
    private String code;
    private String name;
    private String description;
}
