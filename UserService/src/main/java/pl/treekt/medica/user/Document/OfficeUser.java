package pl.treekt.medica.user.Document;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "officeUsers")
public class OfficeUser {

    @Id
    private String id;
    private Integer pwz;
    private String degree;
    private String userId;
}
