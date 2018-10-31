package pl.treekt.medica.auth.Repository;

import com.sun.org.apache.xpath.internal.operations.Bool;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import pl.treekt.medica.auth.Entity.Credentials;

@Repository
public interface CredentialsRepository extends MongoRepository<Credentials, String> {


    Credentials findCredentialsByUserId(Integer userId);
    Credentials findCredentialsByEmail(String email);
}
