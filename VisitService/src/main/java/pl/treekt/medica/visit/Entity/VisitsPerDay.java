package pl.treekt.medica.visit.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class VisitsPerDay {
    private Integer day;
    private Integer value;
}
