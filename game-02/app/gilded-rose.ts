import { ItemAbs } from './itemAbs';
import { Item } from './item';
import { AgedBrie } from './agedBrie';
import { BackstagePasses } from './backstagePasses';
import { Conjured } from './conjured';
import { Sulfuras } from './sulfuras';
import { GenericItem } from './genericItem';

export class GildedRose {
   items: Array<Item>=[];

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    //Metodo que genera la reduccion de Quality y SellIn, como tambien el aumento en ciertos productos especiales
    updateQuality() {
      for(let i=0; i<this.items.length; i++){
	   	switch(this.items[i].name) {
			case "Aged Brie":
				const agedBrie: ItemAbs = new AgedBrie(this.items[i]);
				this.items[i] = agedBrie.result();
				break;
			case "Backstage passes to a TAFKAL80ETC concert":
				const backstagePasses: ItemAbs = new BackstagePasses(this.items[i]);
				this.items[i] = backstagePasses.result();
				break;
			case "Conjured":
				const conjured: ItemAbs = new Conjured(this.items[i]);
				this.items[i] = conjured.result();
				break;
			case "Sulfuras, Hand of Ragnaros":
				const sulfuras: ItemAbs = new Sulfuras(this.items[i]);
				this.items[i] = sulfuras.result();
				break;
			default:
				const genericItem: ItemAbs = new GenericItem(this.items[i]);
				this.items[i] = genericItem.result();
			}
	 }
	 return this.items;
   }
}
