package pl.treekt.medica.user.Document.Embedded;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDetails {

    private String firstName;
    private String lastName;
    private String familyName;
    private Date birthday;
    private String gender;
    private Integer pesel;
    private Integer phone;
}
