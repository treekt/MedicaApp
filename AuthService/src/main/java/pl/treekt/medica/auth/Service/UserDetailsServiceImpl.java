package pl.treekt.medica.auth.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import pl.treekt.medica.auth.Document.Credentials;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private final RestTemplate restTemplate;
    private final BCryptPasswordEncoder encoder;

    @Autowired
    public UserDetailsServiceImpl(RestTemplate restTemplate, BCryptPasswordEncoder encoder) {
        this.restTemplate = restTemplate;
        this.encoder = encoder;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        ResponseEntity<List<Credentials>> response = restTemplate.exchange(
                "http://user-service/credentials/all",
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<List<Credentials>>(){});
        List<Credentials> credentials = response.getBody();
        final List<Credentials> adminCreds = Collections.singletonList(
                new Credentials("admin", "admin", encoder.encode("admin"))
        );
        credentials.addAll(adminCreds);

        for(Credentials creds : credentials) {
            if(creds.getEmail().equals(email)) {

                // Remember that Spring needs roles to be in this format: "ROLE_" + userRole (i.e. "ROLE_ADMIN")
                // So, we need to set it to that format, so we can verify and compare roles (i.e. hasRole("ADMIN")).
                List<GrantedAuthority> grantedAuthorities = AuthorityUtils
                        .commaSeparatedStringToAuthorityList(
                                creds.getUserId().equals("admin") ? "admin, user" : fetchRoleNameByUserId(creds.getUserId())
                        );

                // The "Credentials" class is provided by Spring and represents a model class for user to be returned by UserDetailsService
                // And used by auth manager to verify and check user authentication.
                return new User(creds.getEmail(), creds.getPassword(), grantedAuthorities);
            }
        }

        // If user not found. Throw this exception.
        throw new UsernameNotFoundException("Email: " + email + " not found");
    }



    private String fetchRoleNameByUserId(String userId) {
        return restTemplate.getForObject("http://user-service/roleName/" + userId, String.class);
    }
}
