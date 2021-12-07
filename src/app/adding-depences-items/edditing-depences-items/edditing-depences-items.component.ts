import { Component, OnInit, ViewChild, Output,EventEmitter,ElementRef } from '@angular/core';
import { Item } from '../../shared/item.model';

@Component({
  selector: 'app-edditing-depences-items',
  templateUrl: './edditing-depences-items.component.html',
  styleUrls: ['./edditing-depences-items.component.css'],
})
export class EdditingDepencesItemsComponent implements OnInit {
  @ViewChild('nameInput', { static: false })
  nameInputRef!: ElementRef;
  @ViewChild('amountInput', { static: false })
  amountInputRef!: ElementRef;
  @Output() itemAdded = new EventEmitter<Item>();
  constructor() {}

  ngOnInit(): void {}
  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newItem = new Item(ingName, ingAmount);
    this.itemAdded.emit(newItem);
  }
}
