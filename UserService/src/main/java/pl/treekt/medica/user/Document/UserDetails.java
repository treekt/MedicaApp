package pl.treekt.medica.user.Document;

import lombok.Data;

import java.util.Date;

@Data
public class UserDetails {

    private String firstName;
    private String lastName;
    private String familyName;
    private Date birthday;
    private String gender;
    private Integer pesel;
    private Integer phoneNumber;
}
