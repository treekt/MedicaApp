package pl.treekt.medica.auth.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@Document(collection = "credentials")
public class Credentials {

    @Id
    private Integer userId;
    private String email;
    private String password;
}
