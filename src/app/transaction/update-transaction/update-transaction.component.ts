import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Transaction } from 'src/app/transaction';
import { TransactionService } from 'src/app/transaction.service';

@Component({
  selector: 'app-update-transaction',
  templateUrl: './update-transaction.component.html',
  styleUrls: ['./update-transaction.component.css']
})
export class UpdateTransactionComponent implements OnInit {
  idcat: string;
  transaction: Transaction;
  submitted = false;
  constructor(private route: ActivatedRoute,private router: Router,
    private transactionService: TransactionService) { }

  ngOnInit() {
    this.transaction = new Transaction();

    this.idcat = this.route.snapshot.params['id'];
    
    this.transactionService.getTransaction(this.idcat)
      .subscribe(data => {
        console.log(data)
        this.transaction = data;
      }, error => console.log(error));
  }

  updateTransaction() {
    this.transactionService.updateTransaction(this.idcat, this.transaction)
      .subscribe(data => {
        console.log(data);
        this.transaction = new Transaction();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.updateTransaction();    
  }

  gotoList() {
    this.router.navigate(['/transaction']);
  }

}
