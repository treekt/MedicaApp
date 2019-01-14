_Aby zainicjować dane słownikowe niezbędne do poprawnego działania aplikacji
należy w katalogu zawierającym pliki **(deseases.json, medicines.json)** wykonać następujące komendy:_

`mongoimport --db archivedb --collection deseases --type json --file deseases.json --jsonArray`

`mongoimport --db archivedb --collection deseaseCategories --type json --file deseaseCategories.json --jsonArray`

`mongoimport --db archivedb --collection medicines --type json --file medicines.json --jsonArray`