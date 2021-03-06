package pl.treekt.medica.user.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import pl.treekt.medica.user.Document.Role;

import java.util.List;

@Repository
public interface RoleRepository extends MongoRepository<Role, String> {

    Role getRoleByName(String name);
    void deleteByName(String name);
    boolean existsByName(String name);

}
