package pl.treekt.medica.auth.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import pl.treekt.medica.auth.Document.Credentials;

@Repository
public interface CredentialsRepository extends MongoRepository<Credentials, String> {

    Credentials findCredentialsByEmail(String email);
    Boolean existsCredentialsByEmail(String email);

}
