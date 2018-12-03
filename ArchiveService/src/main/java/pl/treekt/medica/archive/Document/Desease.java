package pl.treekt.medica.archive.Document;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "diseasesClassification")
public class Desease {

    @Id
    private String id;
    private String chapter;
    private String classifications;
    private String code;
    private String group;
    private String groupCode;
    private String subgroup;
    private String subgroupCode;
    private String secondSubgroup;
    private String secondSubgroupCode;
    private String category;
    private String categoryCode;
    private String subcategory;
    private String subcategoryCode;
    private String firstLevel;
    private String secondLevel;
    private String thirdLevel;
}
