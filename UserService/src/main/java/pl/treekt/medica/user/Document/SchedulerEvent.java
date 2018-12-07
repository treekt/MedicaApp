package pl.treekt.medica.user.Document;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Data
@Document(collection = "schedules")
public class SchedulerEvent {

    @Id
    private String id;
    private String title;
    private String description;
    private Integer type;
    @JsonFormat
    private Date start;
    @JsonFormat
    private Date end;
    private String color;
    private String userId;
}
