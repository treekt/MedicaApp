package pl.treekt.medica.user.Document;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document(collection = "roles")
public class Role {

    @Id
    private String id;
    private String name;
    private List<Integer> permissions;
}
