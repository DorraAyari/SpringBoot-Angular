import { Component, OnInit } from '@angular/core';
import { Transfer } from './transfer.model';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.css']
})
export class TransfersComponent implements OnInit {
  selectedTransfer!: Transfer;
  constructor() { }

  ngOnInit(): void {
  }

}
