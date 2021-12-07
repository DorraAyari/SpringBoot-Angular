import {  Component, OnInit , ViewChild, Output,EventEmitter,ElementRef } from '@angular/core';
import { RevenuItem } from 'src/app/shared/item.model';

@Component({
  selector: 'app-edditing-revenus-items',
  templateUrl: './edditing-revenus-items.component.html',
  styleUrls: ['./edditing-revenus-items.component.css']
})
export class EdditingRevenusItemsComponent implements OnInit {
  @ViewChild('nameInput', { static: false })
  nameInputRef!: ElementRef;
  @ViewChild('amountInput', { static: false })
  amountInputRef!: ElementRef;
  @Output() revenuitemAdded = new EventEmitter<RevenuItem>();
  constructor() { }

  ngOnInit(): void {
  }
  onRevenuItemAdded() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newItem = new RevenuItem(ingName, ingAmount);
    this.revenuitemAdded.emit(newItem);
  }
}
