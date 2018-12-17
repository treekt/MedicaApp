package pl.treekt.medica.user.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import pl.treekt.medica.user.Document.User;
import pl.treekt.medica.user.Repository.UserRepository;

import java.util.Iterator;
import java.util.List;

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

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable String id ){
        userRepository.deleteById(id);
    }

    @GetMapping("/email/{email}")
    public User getUserByEmail(@PathVariable() String email) {
        String userId = restTemplate.getForObject("http://auth-service/auth/credentials/userId/" + email, String.class);
        return userRepository.findUserById(userId);
    }

    @GetMapping("/all/{firstNameOrLastName}/{isOfficeUser}/{isSpecialist}")
    public List<User> getAllUsersContainsFirstNameOrLastName(@PathVariable String firstNameOrLastName, @PathVariable Boolean isOfficeUser, @PathVariable Boolean isSpecialist) {
        if(isOfficeUser) {
            System.out.println("office User");
            return administratorAccountFilter(userRepository.findAllByUserDetails_FirstNameContainsAndIsOfficeUserAndOfficeDetails_IsSpecialistOrUserDetails_LastNameContainsAndIsOfficeUserAndOfficeDetails_IsSpecialist(firstNameOrLastName, true, isSpecialist, firstNameOrLastName, true, isSpecialist));
        }else{
            System.out.println("no office User");
            return administratorAccountFilter(userRepository.findAllByUserDetails_FirstNameContainsAndIsOfficeUserOrUserDetails_LastNameContainsAndIsOfficeUser(firstNameOrLastName, false, firstNameOrLastName, false));

        }
    }

    @GetMapping("/all")
    public List<User> getAllUsers() {
        return administratorAccountFilter(userRepository.findAll());
    }

    @GetMapping("/default/all")
    public List<User> getAllDefaultUsers() {
        return userRepository.findAllByIsOfficeUser(false);
    }

    @GetMapping("/office/all")
    public List<User> getAllOfficeUsers() {
        return administratorAccountFilter(userRepository.findAllByIsOfficeUser(true));
    }

    @GetMapping("/count/all/office")
    public Integer countOfficeUsers() {
        return userRepository.countUsersByIsOfficeUser(true);
    }


    @GetMapping("/roleName/{userId}")
    public String getRoleNameForUser(@PathVariable String userId) {
        return userRepository.findUserById(userId).getRoleName();
    }

    private List<User> administratorAccountFilter(List<User> users){
        users.removeIf(user -> user.getId().equals("admin"));
        return users;
    }


}
