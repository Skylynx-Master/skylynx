import json
from apartacho.properties.models import Property
from apartacho.users.models import User

with open("data/properties.json", "r") as read_it:
    data = json.load(read_it)
    for row in data:
        user = User.objects.get(id=row['user'])
        new_property = Property(
            price=row['price'],
            area=row['area'],
            price_mts=row['price_mts'],
            bathroom_count=row['bathroom_count'],
            room_count=row['room_count'],
            has_furnished=row['has_furnished'],
            has_heated=row['has_heated'],
            has_pool=row['has_pool'],
            has_parking=row['has_parking'],
            has_security=row['has_security'],
            has_warehouse=row['has_warehouse'],
            has_elevator=row['has_elevator'],
            is_active=row['is_active'],
            overview=row['overview'],
            offer_type=row['offer_type'],
            service_type=row['service_type'],
            user=user,
        )
        new_property.save()
