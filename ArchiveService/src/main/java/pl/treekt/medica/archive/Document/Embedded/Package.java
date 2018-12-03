package pl.treekt.medica.archive.Document.Embedded;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Package {

    private String id;
    private String size;
    private String unitSize;
}
