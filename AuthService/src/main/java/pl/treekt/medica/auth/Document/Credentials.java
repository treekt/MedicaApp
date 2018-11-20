package pl.treekt.medica.auth.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@Document(collection = "credentials")
public class Credentials {

    @Id
    private String userId;
    private String email;
    private String password;
}
