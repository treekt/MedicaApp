package pl.treekt.medica.user.Enums;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

public enum Privileges {
    MAKE_VISIT(101, "Przeprowadzanie wizyt");

    private Permission permission;

    Privileges(int id, String name){
        permission = new Permission(id, name);
    }

    @Data
    @AllArgsConstructor
    private class Permission {
        private int id;
        private String name;
    }


   public List<Permission> getAllPermissions(){
       ArrayList<Permission> permissions = new ArrayList<>();
       for(Privileges privilege : Privileges.values()) {
           permissions.add(permission);
       }
        return permissions;
   }
}
