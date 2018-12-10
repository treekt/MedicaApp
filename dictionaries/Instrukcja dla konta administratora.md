`mongoimport --db userdb --collection users --type json --file adminUser.json --jsonArray`

`mongoimport --db authdb --collection credentials --type json --file adminCredentials.json --jsonArray`

`mongoimport --db userdb --collection roles --type json --file adminRole.json --jsonArray`