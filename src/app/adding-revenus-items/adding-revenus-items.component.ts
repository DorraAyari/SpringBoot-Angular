import { Component, OnInit } from '@angular/core';
import { RevenuItem } from '../shared/item.model';

@Component({
  selector: 'app-adding-revenus-items',
  templateUrl: './adding-revenus-items.component.html',
  styleUrls: ['./adding-revenus-items.component.css']
})
export class AddingRevenusItemsComponent implements OnInit {
  revenuitems: RevenuItem[] = [
    new RevenuItem('pc', 5000),
    new RevenuItem('tel', 1000),
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onRevenuItemAdded(revenuitem: RevenuItem) {
    this.revenuitems.push(revenuitem);
  }

}
