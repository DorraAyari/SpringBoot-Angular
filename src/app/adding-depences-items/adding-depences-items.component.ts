import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/item.model';
@Component({
  selector: 'app-adding-depences-items',
  templateUrl: './adding-depences-items.component.html',
  styleUrls: ['./adding-depences-items.component.css'],
})
export class AddingDepencesItemsComponent implements OnInit {
  items: Item[] = [new Item('Apples', 5000), new Item('Tomatoes', 1000)];
  constructor() {}

  ngOnInit(): void {}
  onItemAdded(item: Item) {
    this.items.push(item);
  }
}
