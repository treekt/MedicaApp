package pl.treekt.medica.auth.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@AllArgsConstructor
@Document(collection = "authHistories")
public class AuthHistory {

    @Id
    private Integer id;
    private Date date;
    private Integer credentialsId;
}
