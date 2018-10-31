package pl.treekt.medica.user.Controller;

import com.netflix.discovery.converters.Auto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.treekt.medica.user.Document.OfficeUser;
import pl.treekt.medica.user.Document.Role;
import pl.treekt.medica.user.Document.User;
import pl.treekt.medica.user.Repository.OfficeUserRepository;
import pl.treekt.medica.user.Repository.RoleRepository;
import pl.treekt.medica.user.Repository.UserRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/")
public class UserController {

    private final UserRepository userRepository;
    private final OfficeUserRepository officeUserRepository;

    private final RoleRepository roleRepository;

    @Autowired
    public UserController(UserRepository userRepository, OfficeUserRepository officeUserRepository, RoleRepository roleRepository) {
        this.userRepository = userRepository;
        this.officeUserRepository = officeUserRepository;
        this.roleRepository = roleRepository;
    }


    @PostMapping("/")
    public String saveUser(@RequestBody User user){
        user.setId(UUID.randomUUID().toString());
        userRepository.save(user);
        return user.getId();
    }


    @PostMapping("/office")
    public String saveOfficeUser(@RequestBody OfficeUser officeUser){
        officeUser.setId(UUID.randomUUID().toString());
        officeUserRepository.save(officeUser);
        return officeUser.getId();
    }

    @PostMapping("/role")
    public Integer saveRole(@RequestBody Role role){
        roleRepository.save(role);
        return role.getId();
    }


}
