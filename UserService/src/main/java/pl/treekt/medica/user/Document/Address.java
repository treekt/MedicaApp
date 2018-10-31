package pl.treekt.medica.user.Document;

import lombok.Data;

@Data
public class Address {

    private String city;
    private String street;
    private String houseNumber;
    private String apartmentNumber;
    private String voivodeship;
    private String zipCode;

}
