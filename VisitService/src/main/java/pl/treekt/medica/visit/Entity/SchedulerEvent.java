package pl.treekt.medica.visit.Entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Data
public class SchedulerEvent {

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
