_Aby zainicjować kolekcje **"diseasesClassification"** zawierającą międzynarodową klasyfikacje chorób
oraz **"medicalProducts"** zawierającą spis produktów medycznych
należy w katalogu zawierającym pliki **(diseasesClassification.json, medicalProducts.json)** wykonać następujące komendy:_

`mongoimport --db archivedb --collection diseasesClassification --type json --file diseasesClassification.json --jsonArra`

`mongoimport --db archivedb --collection medicalProducts --type json --file medicalProducts.json --jsonArray`