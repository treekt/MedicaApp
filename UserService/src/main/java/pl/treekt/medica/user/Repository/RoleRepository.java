package pl.treekt.medica.user.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import pl.treekt.medica.user.Document.Role;

@Repository
public interface RoleRepository extends MongoRepository<Role, String> {
}
