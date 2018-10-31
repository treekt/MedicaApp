package pl.treekt.medica.auth.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import pl.treekt.medica.auth.Entity.AuthHistory;

import java.util.List;


@Repository
public interface AuthHistoryRepository extends MongoRepository<AuthHistory, String> {

    List<AuthHistory> getAllByCredentialsId(Integer credsId);
}
