import { Component, OnInit } from '@angular/core';

export enum StockGroupLabel {
  WITH = 'Com estoque',
  WITHOUT = 'Sem estoque'
}

export class StockGroup {
  label: StockGroupLabel;
  items: Product[];
}

export class Product {
  description: string;
  quantity: number;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  title = 'Selecione um conjunto'
  selected = this.title;

  list = [
    { description: 'title 1', quantity: 1 },
    { description: 'title 2', quantity: 10 },
    { description: 'title 3', quantity: 0 },
    { description: 'title 4', quantity: 0 },
    { description: 'title 5', quantity: 0 },
  ]

  stockGroup = new Array<StockGroup>()

  ngOnInit(): void {

    this.createStockGroup();
    this.filterStockProducts();

  }

  private createStockGroup(): void {

    Object.keys(StockGroupLabel).forEach(key => {
      const stockGroup = new StockGroup()
      stockGroup.label = StockGroupLabel[key]
      stockGroup.items = new Array<Product>()
      this.stockGroup.push(stockGroup)
    });

  }

  private filterStockProducts(): void {

      const positive = this.stockGroup[0].items
      const negative = this.stockGroup[1].items
      this.list.forEach(item => item.quantity > 0 ? positive.push(item) : negative.push(item));

  }


}
