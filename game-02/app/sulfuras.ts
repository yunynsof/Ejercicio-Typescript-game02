import {ItemAbs} from "./itemAbs";
import {Item} from "./item";

export class Sulfuras extends ItemAbs {

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
		this.quality = 80;
		this.sellIn = this.sellIn - 1;
		const items: Item = new Item(this.name, this.sellIn, this.quality);
		return items;
	}

}
