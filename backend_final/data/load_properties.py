import csv
from apartacho.properties.models import Property

with open('data/properties.csv') as csv_file:
    reader = csv.DictReader(csv_file)
    for row in reader:
        country = Property(
            price=row['price'],
            area=row['area'],
            bathroom_count=row['bathroom_count'],
            room_count=row['room_count'],
            has_furnished=row['has_furnished'],
            has_heated=row['has_heated'],
            has_pool=row['has_pool'],
            has_parking=row['has_parking'],
            has_security=row['has_security'],
            has_warehouse=row['has_warehouse'],
            has_elevator=row['has_elevator'],
            construction_year=row['construction_year'],
            overview=row['overview'],
            offer_type=row['offer_type'],
            service_type=row['service_type'],
            user=row['user'],
        )
        country.save()
