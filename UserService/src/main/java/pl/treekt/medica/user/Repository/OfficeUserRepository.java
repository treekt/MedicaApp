package pl.treekt.medica.user.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import pl.treekt.medica.user.Document.OfficeUser;
import pl.treekt.medica.user.Document.User;

@Repository
public interface OfficeUserRepository extends MongoRepository<OfficeUser, String> {

    OfficeUser findOfficeUserById(String id);
}
