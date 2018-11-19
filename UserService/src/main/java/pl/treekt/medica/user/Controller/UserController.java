package pl.treekt.medica.user.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.treekt.medica.user.Document.OfficeUser;
import pl.treekt.medica.user.Document.User;
import pl.treekt.medica.user.Repository.OfficeUserRepository;
import pl.treekt.medica.user.Repository.UserRepository;

import java.util.Collections;
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
    public User getUser(@PathVariable("id") final String id) {
        return userRepository.findUserById(id);
    }


    @PostMapping("/office")
    public void saveOfficeUser(@RequestBody OfficeUser officeUser) {
        officeUserRepository.save(officeUser);
    }

    @GetMapping("/office/{id}")
    public OfficeUser getOfficeUser(@PathVariable("id") final String id) {
        return officeUserRepository.findOfficeUserByUserId(id);
    }


}
