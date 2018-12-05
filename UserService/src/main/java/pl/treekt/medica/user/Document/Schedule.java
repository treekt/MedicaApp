package pl.treekt.medica.user.Document;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@Document(collection = "schedules")
public class Schedule {

    @Id
    private String id;
    private String title;
    private Integer type;
    private String start;
    private String end;
    private String userId;
}
