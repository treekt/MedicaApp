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
import org.springframework.web.client.RestTemplate;
import pl.treekt.medica.auth.Document.Credentials;
import pl.treekt.medica.auth.Repository.CredentialsRepository;

import java.util.List;

@Service
public class UserService implements UserDetailsService {

    private final RestTemplate restTemplate;
    private final CredentialsRepository credentialsRepository;

    @Autowired
    public UserService(RestTemplate restTemplate, CredentialsRepository credentialsRepository) {
        this.restTemplate = restTemplate;
        this.credentialsRepository = credentialsRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        List<Credentials> credentials = credentialsRepository.findAll();

        for (Credentials creds : credentials) {
            if (creds.getEmail().equals(email)) {

                List<GrantedAuthority> grantedAuthorities = AuthorityUtils.commaSeparatedStringToAuthorityList(fetchRoleNameByUserId(creds.getUserId()));

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
