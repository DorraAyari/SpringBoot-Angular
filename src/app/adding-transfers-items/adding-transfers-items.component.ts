import { Component, OnInit } from '@angular/core';
import { TransferItem } from '../shared/item.model';
@Component({
  selector: 'app-adding-transfers-items',
  templateUrl: './adding-transfers-items.component.html',
  styleUrls: ['./adding-transfers-items.component.css']
})
export class AddingTransfersItemsComponent implements OnInit {
  transferitems: TransferItem[] = [
    new TransferItem('monji', 5000),
    new TransferItem('selem', 1000),
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onTransferItemAdded(transferitem: TransferItem) {
    this.transferitems.push(transferitem);
  }
}
