import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';
import { TransactionService } from '../transaction.service';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  transactions: Observable<Transaction[]>;

  constructor(private transationsService: TransactionService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.transactions = this.transationsService.getTransactionsList();
  }
  deleteTransaction(idtrans: string) {
    this.transationsService.deleteTransaction(idtrans)
      .subscribe(
        ( data) => {
          console.log(data);
          this.reloadData();
        },
        (error) => console.log(error));
  }

  TransactionDetails(idtrans : string){
    this.router.navigate(['transactiondetails/', idtrans]);
  }
 

}
