import csv
from apartacho.countries.models import Country

with open('data/countries.csv') as csv_file:
    reader = csv.DictReader(csv_file)
    for row in reader:
        country = Country(
            name=row['name'],
            iso_2=row['iso2'],
            iso_3=row['iso3']
        )
        country.save()
