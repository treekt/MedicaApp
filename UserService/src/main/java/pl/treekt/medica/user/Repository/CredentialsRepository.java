package pl.treekt.medica.user.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import pl.treekt.medica.user.Document.Credentials;

public interface CredentialsRepository extends MongoRepository<Credentials, String> {

    Credentials getCredentialsByEmail(String email);
}
