package pl.treekt.medica.user.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import pl.treekt.medica.user.Document.User;

import java.util.List;

@Repository
public interface UserRepository extends MongoRepository<User, String> {

    User findUserById(String id);
    List<User> findAllByIsOfficeUser(boolean isOfficeUser);
    List<User> findAllByUserDetails_FirstNameContainsOrUserDetails_LastNameContains(String firstName, String lastName);
}
