package pl.treekt.medica.user.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import pl.treekt.medica.user.Document.User;

import java.util.List;

@Repository
public interface UserRepository extends MongoRepository<User, String> {

    User findUserById(String id);
    List<User> findAllByIsOfficeUser(boolean isOfficeUser);
    List<User> findAllByUserDetails_FirstNameContainsOrUserDetails_LastNameContainsAndIsOfficeUser(String userDetails_firstName, String userDetails_lastName, Boolean isOfficeUser);
    List<User> findAllByUserDetails_FirstNameContainsOrUserDetails_LastNameContainsAndIsOfficeUserAndOfficeDetails_IsSpecialist(String userDetails_firstName, String userDetails_lastName, Boolean isOfficeUser, Boolean officeDetails_isSpecialist);
    Integer countUsersByIsOfficeUser(Boolean isOfficeUser);
    void deleteUserById(String id);

}
