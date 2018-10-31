package pl.treekt.medica.user.Document.Embedded;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Address {

    private String city;
    private String street;
    private String houseNumber;
    private String apartmentNumber;
    private String voivodeship;
    private String zip;

}
