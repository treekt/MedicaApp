package pl.treekt.medica.auth.Security;

import lombok.Data;

@Data
class UserCredentialsRequest {

    private String email;
    private String password;
}
