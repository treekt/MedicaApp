package pl.treekt.medica.user.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
@AllArgsConstructor
public class User {

    @Id
    private String id;
    private Boolean isOfficeUser;
    private UserDetails userDetails;
    private Address address;
    private Integer roleId;
}
