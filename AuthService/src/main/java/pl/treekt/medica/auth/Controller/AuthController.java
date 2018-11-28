package pl.treekt.medica.auth.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.treekt.medica.auth.Document.AuthHistory;
import pl.treekt.medica.auth.Document.Credentials;
import pl.treekt.medica.auth.Repository.AuthHistoryRepository;
import pl.treekt.medica.auth.Repository.CredentialsRepository;

import java.util.List;

@RestController
@RequestMapping("/credentials")
public class AuthController {

    private final CredentialsRepository credentialsRepository;

    private final AuthHistoryRepository authHistoryRepository;

    @Autowired
    public AuthController(CredentialsRepository credentialsRepository, AuthHistoryRepository authHistoryRepository) {
        this.credentialsRepository = credentialsRepository;
        this.authHistoryRepository = authHistoryRepository;
    }


    @GetMapping()
    public String getSomething(){
        return "BANG!";
    }


    @GetMapping("/creds/{userId}")
    public Credentials getCredentials(@PathVariable("userId") final int userId){
        return credentialsRepository.findCredentialsByUserId(userId);
    }

    @PostMapping("/creds")
    public void saveCredentials(@RequestBody Credentials credentials){
        credentialsRepository.save(credentials);
    }

    @GetMapping("/history/{credsId}")
    public List<AuthHistory> getAllAuthenticationHistoryFor(@PathVariable("credsId") final int credsId){
        return authHistoryRepository.getAllByCredentialsId(credsId);
    }

    @GetMapping("/history/all")
    public List<AuthHistory> getAllAuthenticationHistory(){
        return authHistoryRepository.findAll();
    }
}
