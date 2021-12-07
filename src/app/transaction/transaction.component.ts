import { Component, OnInit } from '@angular/core';
import { transaction } from '../transaction';
import { transactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  trans: transaction[];
  constructor(private tranService: transactionService) { }

  ngOnInit(): void {
    this.tranService.getTransaction().subscribe((data: transaction[]) => {
      console.log(data);
      this.trans = data;
    });
  }

}
