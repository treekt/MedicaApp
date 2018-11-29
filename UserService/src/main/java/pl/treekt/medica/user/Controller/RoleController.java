package pl.treekt.medica.user.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.treekt.medica.user.Document.Role;
import pl.treekt.medica.user.Repository.RoleRepository;

import java.util.List;

@RestController
@RequestMapping("/role")
public class RoleController {


    private final RoleRepository roleRepository;

    @Autowired
    public RoleController(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }


    @PostMapping()
    public void saveRole(@RequestBody Role role) {
        roleRepository.save(role);
    }

    @GetMapping("/{name}")
    public Role getRole(@PathVariable() String name){
        return roleRepository.getRoleByName(name);
    }

    @DeleteMapping("/{name}")
    public void deleteRole(@PathVariable() String name){
        roleRepository.deleteByName(name);
    }

    @GetMapping("/all")
    public List<Role> getAllRoles(){
        return roleRepository.findAll();
    }


    @GetMapping("/permissions/{name}")
    public List<Integer> getAllPermissions(@PathVariable() String name) {
        return roleRepository.getRoleByName(name).getPermissions();
    }


}
