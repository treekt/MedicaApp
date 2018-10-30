package pl.treekt.medica.user.Controller;

import org.springframework.web.bind.annotation.*;
import pl.treekt.medica.user.Entity.User;

import java.util.ArrayList;
import java.util.List;

@RestController
public class MainController {

    @RequestMapping(value = "/{id}")
    public User getUser(@PathVariable final int id){
        List<User> users = new ArrayList<>();
        users.add(new User("Adam", "Kowalski"));
        users.add(new User("Anna", "Szczypiorek"));
        users.add(new User("Witalij", "Schevcenko"));

        return users.get(id);
    }

}
