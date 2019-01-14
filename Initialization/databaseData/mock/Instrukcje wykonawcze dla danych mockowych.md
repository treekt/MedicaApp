_Aby zainicjować dane testowe pozwalające na przetestowanie działania aplikacji
należy w katalogu zawierającym pliki **(credentials.json, roles.json, schedules.json, users.json, visitTypes.json, visits.json)** wykonać następujące komendy:_

`mongoimport --db authdb --collection credentials --type json --file credentials.json --jsonArray`

`mongoimport --db userdb --collection roles --type json --file roles.json --jsonArray`

`mongoimport --db userdb --collection schedules --type json --file schedules.json --jsonArray`

`mongoimport --db userdb --collection users --type json --file users.json --jsonArray`

`mongoimport --db visitdb --collection visitTypes --type json --file visitTypes.json --jsonArray`

`mongoimport --db visitdb --collection visits --type json --file visits.json --jsonArray`