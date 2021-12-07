import { Component, OnInit ,Output ,EventEmitter} from '@angular/core';
import { Transfer } from '../transfer.model';

@Component({
  selector: 'app-transfer-list',
  templateUrl: './transfer-list.component.html',
  styleUrls: ['./transfer-list.component.css']
})
export class TransferListComponent implements OnInit {

  @Output() transferWasSelected = new EventEmitter<Transfer>();

  transfers: Transfer[] = [
    new Transfer(
      'A Test Transfer',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
    ),
    new Transfer(
      'A Test Transfer',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
    ),
    new Transfer(
      'A Test Transfer',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
    ),
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onTransferSelected(transfer: Transfer) {
    this.transferWasSelected.emit(transfer);
  }


}
