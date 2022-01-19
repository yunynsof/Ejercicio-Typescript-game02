import {ItemAbs} from "./itemAbs";
import {Item} from "./item";

export class Conjured extends ItemAbs {

    name: string;
    sellIn: number;
    quality: number;

    constructor(items: Item) {
		super();
        this.name = items.name;
        this.sellIn = items.sellIn;
        this.quality = items.quality;
    }

	 result(): Item {
		if (this.quality > 0) {
			if (this.sellIn >= 0) {
				this.reduce(2);
			} else if (this.sellIn < 0) {
				this.reduce(4);
			}
		}
		this.sellIn = this.sellIn - 1;
		const items: Item = new Item(this.name, this.sellIn, this.quality);
		return items;
	}
	
	reduce(value: number) {
		this.quality = this.quality - value;
		if (this.quality < 0) {
			this.quality = 0;
		}
	}

}
