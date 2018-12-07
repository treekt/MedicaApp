package pl.treekt.medica.visit.Entity;

import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Data
public class SchedulerEvent {

    private String id;
    private String title;
    private String description;
    private Integer type;
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm")
    private Date start;
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm")
    private Date end;
    private String color;
    private String userId;
}
