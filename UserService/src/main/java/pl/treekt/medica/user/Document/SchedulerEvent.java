package pl.treekt.medica.user.Document;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@Document(collection = "schedules")
public class SchedulerEvent {

    @Id
    private String id;
    private String title;
    private String description;
    private Integer type;
    private String start;
    private String end;
    private String color;
    private String userId;
}
