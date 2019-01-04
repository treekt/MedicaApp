package pl.treekt.medica.auth.Configuration;

import lombok.Data;
import org.springframework.beans.factory.annotation.Value;

@Data
public class JwtConfiguration {
    @Value("${security.jwt.uri:/auth/login}")
    private String Uri;

    @Value("${security.jwt.header:Authorization}")
    private String header;

    @Value("${security.jwt.prefix:Bearer }")
    private String prefix;

    @Value("${security.jwt.expiration:#{1*60*60}}")
    private int expiration;

    @Value("${security.jwt.secret:JwtSecretKey}")
    private String secret;

}
