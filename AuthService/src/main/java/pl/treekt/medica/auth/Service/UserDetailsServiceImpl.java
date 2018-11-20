package pl.treekt.medica.auth.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import pl.treekt.medica.auth.Document.Credentials;

import java.util.Arrays;
import java.util.List;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private BCryptPasswordEncoder encoder;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {


        // hard coding the credentials. All passwords must be encoded.
        final List<Credentials> credentials = Arrays.asList(
                new Credentials("asdad", "treekt@gmail.com", encoder.encode("12345")),
                new Credentials("ASdasdd", "admin", encoder.encode("12345"))
        );

        for(Credentials creds : credentials) {
            if(creds.getEmail().equals(email)) {

                // Remember that Spring needs roles to be in this format: "ROLE_" + userRole (i.e. "ROLE_ADMIN")
                // So, we need to set it to that format, so we can verify and compare roles (i.e. hasRole("ADMIN")).
                List<GrantedAuthority> grantedAuthorities = AuthorityUtils
                        .commaSeparatedStringToAuthorityList("user, admin");

                // The "Credentials" class is provided by Spring and represents a model class for user to be returned by UserDetailsService
                // And used by auth manager to verify and check user authentication.
                return new User(creds.getEmail(), creds.getPassword(), grantedAuthorities);
            }
        }

        // If user not found. Throw this exception.
        throw new UsernameNotFoundException("Email: " + email + " not found");
    }
}
