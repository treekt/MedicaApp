_Aby zainicjować dane niezbędne do poprawnego funkcjonowania aplikacji
należy w katalogu zawierającym pliki **(credentials.json, roles.json, users.json)** wykonać następujące komendy:_

`mongoimport --db userdb --collection users --type json --file users.json --jsonArray`

`mongoimport --db authdb --collection credentials --type json --file credentials.json --jsonArray`

`mongoimport --db userdb --collection roles --type json --file roles.json --jsonArray`