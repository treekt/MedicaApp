package pl.treekt.medica.user.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.treekt.medica.user.Document.OfficeUser;
import pl.treekt.medica.user.Document.User;
import pl.treekt.medica.user.Repository.OfficeUserRepository;
import pl.treekt.medica.user.Repository.UserRepository;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/")
public class UserController {

    private final UserRepository userRepository;
    private final OfficeUserRepository officeUserRepository;


    @Autowired
    public UserController(UserRepository userRepository, OfficeUserRepository officeUserRepository) {
        this.userRepository = userRepository;
        this.officeUserRepository = officeUserRepository;
    }


    @PostMapping("/")
    public Map saveUser(@RequestBody User user) {
        user.setId(UUID.randomUUID().toString());
        userRepository.save(user);
        return Collections.singletonMap("id", user.getId());
    }

    @GetMapping("/{id}")
    public User getUser(@PathVariable() String id) {
        return userRepository.findUserById(id);
    }

    @GetMapping("/byEmail/{email}")
    public User getUserByEmail(@PathVariable() String email){
        return null;
    }

    @GetMapping("/all")
    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    @GetMapping("/allDefault")
    public List<User> getAllDefaultUsers(){
        return userRepository.findAllByIsOfficeUser(false);
    }

    @GetMapping("/allOffice")
    public List<User> getAllOfficeUsers(){
        return userRepository.findAllByIsOfficeUser(true);
    }

    @PostMapping("/office")
    public void saveOfficeUser(@RequestBody OfficeUser officeUser) {
        officeUserRepository.save(officeUser);
    }

    @GetMapping("/office/{id}")
    public OfficeUser getOfficeUser(@PathVariable() final String id) {
        return officeUserRepository.findOfficeUserByUserId(id);
    }


}
