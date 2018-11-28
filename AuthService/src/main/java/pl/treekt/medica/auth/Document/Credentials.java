package pl.treekt.medica.auth.Document;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "credentials")
@JsonIgnoreProperties(ignoreUnknown = true)
public class Credentials {

    @Id
    private String userId;
    private String email;
    private String password;

    public Credentials(String userId, String email, String password) {
        this.userId = userId;
        this.email = email;
        this.password = password;
    }
}
