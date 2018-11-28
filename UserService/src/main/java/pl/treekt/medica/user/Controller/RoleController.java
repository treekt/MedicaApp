package pl.treekt.medica.user.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.treekt.medica.user.Document.Role;
import pl.treekt.medica.user.Enums.Privilages;
import pl.treekt.medica.user.Repository.RoleRepository;
import pl.treekt.medica.user.Repository.UserRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/role")
public class RoleController {


    private final RoleRepository roleRepository;
    private final UserRepository userRepository;

    @Autowired
    public RoleController(RoleRepository roleRepository, UserRepository userRepository) {
        this.roleRepository = roleRepository;
        this.userRepository = userRepository;
    }


    @PostMapping()
    public void saveRole(@RequestBody Role role) {
        role.setId(UUID.randomUUID().toString());
        roleRepository.save(role);
    }

    @GetMapping("/{id}")
    public Role getRole(@PathVariable() String id){
        return roleRepository.getRoleById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteRole(@PathVariable() String id){
        if(roleRepository.existsById(id)){
            roleRepository.deleteById(id);
        }
    }

    @GetMapping("/name/user/{userId}")
    public String getRoleNameForUser(@PathVariable String userId){
        String roleId = userRepository.findUserById(userId).getRoleId();
        return roleRepository.getRoleById(roleId).getName();
    }

    @GetMapping("/all")
    public List<Role> getAllRoles(){
        return roleRepository.findAll();
    }


    @GetMapping("/permissions")
    public List<Privilages.Permission> getAllPermissions() {
        return Privilages.Permission.getAllPermissions();
    }


}
