package pl.treekt.medica.user.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import pl.treekt.medica.user.Document.Embedded.OfficeDetails;
import pl.treekt.medica.user.Document.User;
import pl.treekt.medica.user.Repository.UserRepository;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/")
public class UserController {

    private final RestTemplate restTemplate;

    private final UserRepository userRepository;

    @Autowired
    public UserController(UserRepository userRepository, RestTemplate restTemplate) {
        this.userRepository = userRepository;
        this.restTemplate = restTemplate;
    }


    @PostMapping("/")
    public User saveUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    @GetMapping("/{id}")
    public User getUser(@PathVariable() String id) {
        return userRepository.findUserById(id);
    }

    @GetMapping("/email/{email}")
    public User getUserByEmail(@PathVariable() String email) {
        String userId = restTemplate.getForObject("http://auth-service/auth/credentials/userId/" + email, String.class);
        return userRepository.findUserById(userId);
    }

    @GetMapping("/all")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/default/all")
    public List<User> getAllDefaultUsers() {
        return userRepository.findAllByIsOfficeUser(false);
    }

    @GetMapping("/office/all")
    public List<User> getAllOfficeUsers() {
        return userRepository.findAllByIsOfficeUser(true);
    }


    @GetMapping("/roleName/{userId}")
    public String getRoleNameForUser(@PathVariable String userId){
        return userRepository.findUserById(userId).getRoleName();
    }



}
