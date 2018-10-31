package pl.treekt.medica.user.Document;

import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
public class OfficeUser {

    @Id
    private Integer id;
    private Integer pwz;
    private String degree;
    private String userId;
}
