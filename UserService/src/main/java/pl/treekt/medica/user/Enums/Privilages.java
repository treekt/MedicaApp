package pl.treekt.medica.user.Enums;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

public enum Privilages {
    MAKE_VISIT(101, "Przeprowadzanie wizyt"),
    CREATE_PATIENT_ACCOUNT(102, "Tworzenie kont pacjentów");

    private int id;
    private String name;

    Privilages(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    @Data
    @AllArgsConstructor
    public static class Permission {
        private int id;
        private String name;

        public static List<Permission> getAllPermissions(){
            ArrayList<Permission> permissions = new ArrayList<>();
            for(Privilages privilage : Privilages.values()){
                permissions.add(new Permission(privilage.getId(), privilage.getName()));
            }
            return permissions;
        }
    }




}
