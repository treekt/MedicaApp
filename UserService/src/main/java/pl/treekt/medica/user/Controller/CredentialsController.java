package pl.treekt.medica.user.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import pl.treekt.medica.user.Document.Credentials;
import pl.treekt.medica.user.Repository.CredentialsRepository;

import java.util.List;

@RestController
@RequestMapping("/credentials")
public class CredentialsController {

    private final CredentialsRepository credentialsRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    @Autowired
    public CredentialsController(CredentialsRepository credentialsRepository, BCryptPasswordEncoder passwordEncoder) {
        this.credentialsRepository = credentialsRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("")
    public void saveCredentials(@RequestBody Credentials credentials) {
        credentials.setPassword(passwordEncoder.encode(credentials.getPassword()));
        credentialsRepository.save(credentials);
    }

    @GetMapping("/all")
    public List<Credentials> getAllCredentials(){
        return credentialsRepository.findAll();
    }

    public String getUserIdByEmail(String email){
        return credentialsRepository.getCredentialsByEmail(email).getUserId();
    }

}
