package pl.treekt.medica.user.Document;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@Document(collection = "workScheduler")
public class WorkScheduler {

    @Id
    private String id;
    private String title;
    private Integer type;
    private Date start;
    private Date end;
    private String userId;
}
