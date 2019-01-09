package pl.treekt.medica.auth.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import pl.treekt.medica.auth.Document.AuthHistory;
import pl.treekt.medica.auth.Document.Credentials;
import pl.treekt.medica.auth.Repository.AuthHistoryRepository;
import pl.treekt.medica.auth.Repository.CredentialsRepository;

import java.util.List;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private BCryptPasswordEncoder passwordEncoder;
    private final CredentialsRepository credentialsRepository;

    @Autowired
    public AuthController(CredentialsRepository credentialsRepository, BCryptPasswordEncoder passwordEncoder) {
        this.credentialsRepository = credentialsRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @GetMapping
    public String getSometing(){
        return "BANG!!";
    }


    @PostMapping("/credentials")
    public void saveCredentials(@RequestBody Credentials credentials){
        credentials.setPassword(passwordEncoder.encode(credentials.getPassword()));
        credentialsRepository.save(credentials);
    }

    @GetMapping("/credentials/userId/{email}")
    public String getEmailOfCredentials(@PathVariable String email){
        if(credentialsRepository.existsCredentialsByEmail(email)){
            return credentialsRepository.findCredentialsByEmail(email).getUserId();
        }
        return "none";
    }

}
