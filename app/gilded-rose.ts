export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

   //Metodo que genera la reduccion de Quality y SellIn, como tambien el aumento en ciertos productos especiales
    updateQuality() {
     for(let i=0; i<this.items.length; i++){
	   if(this.items[i].name == 'Aged Brie'){
	     if(this.items[i].quality < 50){
		   if(this.items[i].sellIn < 0){
		     this.items[i].quality = this.items[i].quality+2
			 if(this.items[i].quality > 50){
			   this.items[i].quality = 50
			 }
		   }else {
		     this.items[i].quality = this.items[i].quality+1
		   }
		 }
		 this.items[i].sellIn = this.items[i].sellIn-1
	   }else if(this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert'){
	     if(this.items[i].quality < 50){
		   if(this.items[i].sellIn <=10 && this.items[i].sellIn >5){
		     this.items[i].quality = this.items[i].quality+2
			 if(this.items[i].quality >50){
			   this.items[i].quality = 50
			 }
		   }else if(this.items[i].sellIn <=5 && this.items[i].sellIn >=0){
		     this.items[i].quality = this.items[i].quality+3
			 if(this.items[i].quality >50){
			   this.items[i].quality = 50
			 }
		   }else if(this.items[i].sellIn >10){
		     this.items[i].quality = this.items[i].quality+1
		   }else if(this.items[i].sellIn <0){
		     this.items[i].quality = 0
		   }
		 }
		 this.items[i].sellIn = this.items[i].sellIn-1
	   }else if(this.items[i].name == 'Conjured'){
	       if(this.items[i].quality > 0){
	         if(this.items[i].sellIn >=0){
			   this.items[i].quality = this.items[i].quality-2
			   if(this.items[i].quality <0){
			     this.items[i].quality = 0
			   }
		     }else if(this.items[i].sellIn <0){
			   this.items[i].quality = this.items[i].quality-4
			   if(this.items[i].quality <0){
			     this.items[i].quality = 0
			   }
			 }
	       }
		   this.items[i].sellIn = this.items[i].sellIn-1
		}else if(this.items[i].name == 'Sulfuras, Hand of Ragnaros'){
		  this.items[i].quality = 80
		  this.items[i].sellIn = this.items[i].sellIn-1
		}else {
		   if(this.items[i].quality > 0){
		      if(this.items[i].sellIn >=0){
			     this.items[i].quality = this.items[i].quality-1
			  }else{
			     this.items[i].quality = this.items[i].quality-2
				  if(this.items[i].quality <0){
			         this.items[i].quality = 0
			    }
			  }
		   }
		   this.items[i].sellIn = this.items[i].sellIn-1
		}
	 }
	 return this.items;
   }
}