# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class RootItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    price = scrapy.Field()
    area = scrapy.Field()
    bathroom_count = scrapy.Field()
    room_count = scrapy.Field()
    door_count = scrapy.Field()

    has_furnished = scrapy.Field()
    has_heated = scrapy.Field()
    has_pool = scrapy.Field()
    has_parking = scrapy.Field()
    has_security = scrapy.Field()
    has_warehouse = scrapy.Field()
    has_elevator = scrapy.Field()
    construction_year = scrapy.Field()
    property_condition = scrapy.Field()
    overview = scrapy.Field()

    code_root = scrapy.Field()
