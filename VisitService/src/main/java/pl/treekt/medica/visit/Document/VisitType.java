package pl.treekt.medica.visit.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class VisitType {

    private Integer id;
    private String name;
    private Integer duration;
}
