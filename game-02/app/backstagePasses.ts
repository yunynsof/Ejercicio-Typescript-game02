import {ItemAbs} from "./itemAbs";
import {Item} from "./item";

export class BackstagePasses extends ItemAbs {

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
		if (this.quality < 50) {
			if (this.sellIn <= 10 && this.sellIn > 5) {
				this.increase(2);
			} else if (this.sellIn <= 5 && this.sellIn > 0) {
				this.increase(3);
			} else if (this.sellIn > 10) {
				this.quality = this.quality + 1;
			} else if (this.sellIn <= 0) {
				this.quality = 0;
			}
		}
		this.sellIn = this.sellIn - 1;
		const items: Item = new Item(this.name, this.sellIn, this.quality);
		return items;
	}

	increase(value: number) {
		this.quality = this.quality + value;
		if (this.quality > 50) {
			this.quality = 50;
		}
	}
}
