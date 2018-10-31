package pl.treekt.medica.user.Document;

import lombok.Data;
import org.springframework.data.annotation.Id;

import java.util.List;

@Data
public class Role {

    @Id
    private Integer id;
    private String name;
    private List<Integer> permissions;
}
