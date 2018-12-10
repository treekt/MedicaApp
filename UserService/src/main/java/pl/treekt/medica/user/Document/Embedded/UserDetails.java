package pl.treekt.medica.user.Document.Embedded;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDetails {

    private String firstName;
    private String middleName;
    private String lastName;
    private String familyName;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date birthday;
    private String gender;
    private Long pesel;
    private Integer phone;
}
