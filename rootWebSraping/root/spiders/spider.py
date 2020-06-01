# Spider

# scrapy
from scrapy.spiders import CrawlSpider, Rule
from scrapy.linkextractors import LinkExtractor
from scrapy.exceptions import CloseSpider

# Item
from root.items import RootItem


class RootSpider(CrawlSpider):
    name = 'root'
    item_count = 0
    allowed_domains = ['www.fincaraiz.com.co']
    start_urls = [
        'https://www.fincaraiz.com.co/apartamentos/venta/bogota/?ad=30|1||||1||8|||67|3630001|||||||||||||||||||1||griddate%20desc||||-1||',
        'https://www.fincaraiz.com.co/apartamentos/venta/bogota/?ad=30|2||||1||8|||67|3630001|||||||||||||||||||1||griddate%20desc||||-1||',
        'https://www.fincaraiz.com.co/apartamentos/venta/bogota/?ad=30|3||||1||8|||67|3630001|||||||||||||||||||1||griddate%20desc||||-1||',
        'https://www.fincaraiz.com.co/apartamentos/venta/bogota/?ad=30|4||||1||8|||67|3630001|||||||||||||||||||1||griddate%20desc||||-1||',
    ]
    rules = {
        Rule(
            LinkExtractor(
                allow=(),
                restrict_xpaths='//div[@class="span-title"]/a'
            ),
            callback='parse_item',
            follow=False
        ),
    }

    def parse_item(self, response):
        rl_item = RootItem()

        # info real estate
        rl_item['price'] = response.xpath('normalize-space(//div[@class="price"]/h2/text())').extract()
        rl_item['area'] = response.xpath('normalize-space(//ul[@class="boxcube"]/li[1]/text())').extract()
        rl_item['bathroom_count'] = response.xpath('normalize-space(//span[@class="advertBaths"])').extract()
        rl_item['room_count'] = response.xpath('normalize-space(//span[@class="advertRooms"])').extract()
        in_house = response.xpath('//ul[@id="tblInitialInteriores"]/li/text()').extract()
        out_house = response.xpath('//ul[@id="tblInitialExteriores"]/li/text()').extract()
        rl_item['has_furnished'] = 'Amoblado' in in_house
        rl_item['has_heated'] = 'Calentador' in in_house
        rl_item['has_pool'] = 'Piscina' in out_house
        rl_item['has_parking'] = 'Garaje(s)' in out_house
        rl_item['has_security'] = 'Vigilancia' in out_house
        rl_item['has_warehouse'] = 'Bodega' in out_house
        rl_item['has_elevator'] = 'Ascensor' in out_house
        rl_item['construction_year'] = response.xpath('normalize-space(//ul[@class="boxcube"]/li[5]/text())').extract()
        rl_item['overview'] = response.xpath('normalize-space(//div[@class="boxcube"]/p/text())').extract()
        rl_item['code_root'] = response.xpath('normalize-space(//h2[@class="description"]/span/b/text())').extract()
        self.item_count += 1

        # Limit the add register
        if self.item_count > 100:
            raise CloseSpider('item_exceeded')
        yield rl_item
