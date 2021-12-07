import { Component, OnInit , Output ,Input,EventEmitter} from '@angular/core';
import { Transfer } from '../../transfer.model';

@Component({
  selector: 'app-transfer-item',
  templateUrl: './transfer-item.component.html',
  styleUrls: ['./transfer-item.component.css']
})
export class TransferItemComponent implements OnInit {

  @Input()
  transfer!: Transfer;

  @Output()
  transferSelected = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}
  onSelected() {
    this.transferSelected.emit();
  }
}
