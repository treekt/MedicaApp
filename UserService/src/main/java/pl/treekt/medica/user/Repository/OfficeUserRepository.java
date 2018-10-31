package pl.treekt.medica.user.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import pl.treekt.medica.user.Document.OfficeUser;

@Repository
public interface OfficeUserRepository extends MongoRepository<OfficeUser, String> {
}
