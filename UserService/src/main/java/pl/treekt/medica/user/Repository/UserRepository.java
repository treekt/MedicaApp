package pl.treekt.medica.user.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import pl.treekt.medica.user.Document.User;

import java.util.List;

@Repository
public interface UserRepository extends MongoRepository<User, String> {

    User findUserById(String id);
    List<User> findAllByIsOfficeUser(boolean isOfficeUser);
    List<User> findAllByUserDetails_FirstNameContainsAndIsOfficeUserOrUserDetails_LastNameContainsAndIsOfficeUser(String userDetails_firstName, Boolean isOfficeUser, String userDetails_lastName, Boolean isOfficeUser2);
    List<User> findAllByUserDetails_FirstNameContainsAndIsOfficeUserAndOfficeDetails_IsSpecialistOrUserDetails_LastNameContainsAndIsOfficeUserAndOfficeDetails_IsSpecialist(String userDetails_firstName, Boolean isOfficeUser, Boolean officeDetails_isSpecialist, String userDetails_lastName, Boolean isOfficeUser2, Boolean officeDetails_isSpecialist2);
    Integer countUsersByIsOfficeUser(Boolean isOfficeUser);
    Integer countUsersByIsOfficeUserAndOfficeDetails_IsSpecialist(Boolean isOfficeUser, Boolean officeDetails_isSpecialist);

}
