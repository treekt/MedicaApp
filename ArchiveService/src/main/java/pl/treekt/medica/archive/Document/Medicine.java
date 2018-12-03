package pl.treekt.medica.archive.Document;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import pl.treekt.medica.archive.Document.Embedded.Package;

import java.util.List;

@Data
@Document(collection = "medicalProducts")
public class Medicine {

    @Id
    private String id;
    private String productName;
    private String productType;
    private String commonlyUsedName;
    private String power;
    private String form;
    private String entityResponsible;
    private String procedureType;
    private String licenseNumber;
    private String licenseValidity;
    private String codeATC;
    private List<String> activeSubstances;
    private List<Package> packages;
}
