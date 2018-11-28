package pl.treekt.medica.user.Document;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "credentials")
public class Credentials {
    @Id
    private String userId;
    private String email;
    private String password;
}
