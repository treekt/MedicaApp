package pl.treekt.medica.user.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import pl.treekt.medica.user.Document.Embedded.Address;
import pl.treekt.medica.user.Document.Embedded.UserDetails;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "users")
public class User {

    @Id
    private String id;
    private Boolean isOfficeUser;
    private UserDetails userDetails;
    private Address address;
    private Integer roleId;
}
