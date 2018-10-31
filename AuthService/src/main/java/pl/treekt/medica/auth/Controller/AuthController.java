package pl.treekt.medica.auth.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.treekt.medica.auth.Entity.AuthHistory;
import pl.treekt.medica.auth.Entity.Credentials;
import pl.treekt.medica.auth.Repository.AuthHistoryRepository;
import pl.treekt.medica.auth.Repository.CredentialsRepository;

import java.util.List;

@RestController
@RequestMapping("/")
public class AuthController {

    @Autowired
    private CredentialsRepository credentialsRepository;

    @Autowired
    private AuthHistoryRepository authHistoryRepository;


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
