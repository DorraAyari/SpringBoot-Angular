import { Component, OnInit , ViewChild, Output,EventEmitter,ElementRef } from '@angular/core';
import { TransferItem } from 'src/app/shared/item.model';

@Component({
  selector: 'app-edditing-transfers-items',
  templateUrl: './edditing-transfers-items.component.html',
  styleUrls: ['./edditing-transfers-items.component.css']
})
export class EdditingTransfersItemsComponent implements OnInit {
  @ViewChild('nameInput', { static: false })
  nameInputRef!: ElementRef;
  @ViewChild('amountInput', { static: false })
  amountInputRef!: ElementRef;
  @Output() transferitemAdded = new EventEmitter<TransferItem>();
  constructor() { }

  ngOnInit(): void {
  }
  onTransferItemAdded() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newItem = new TransferItem(ingName, ingAmount);
    this.transferitemAdded.emit(newItem);
  }
}
