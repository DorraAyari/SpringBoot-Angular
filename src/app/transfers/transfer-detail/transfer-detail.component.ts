import { Component, OnInit ,Input } from '@angular/core';
import { Transfer } from '../transfer.model';

@Component({
  selector: 'app-transfer-detail',
  templateUrl: './transfer-detail.component.html',
  styleUrls: ['./transfer-detail.component.css']
})
export class TransferDetailComponent implements OnInit {
  @Input()
  transfer!: Transfer;
  constructor() { }

  ngOnInit(): void {
  }

}
