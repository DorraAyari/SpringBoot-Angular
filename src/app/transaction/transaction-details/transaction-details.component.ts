import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Transaction } from 'src/app/transaction';
import { TransactionService } from 'src/app/transaction.service';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css']
})
export class TransactionDetailsComponent implements OnInit {

 
  idtran: string;
  transaction: Transaction;

  constructor(private route: ActivatedRoute,private router: Router,
    private transactionService: TransactionService) { }

  ngOnInit() {
    this.transaction = new Transaction();

    this.idtran = this.route.snapshot.params['id'];
    
    this.transactionService.getTransaction(this.idtran)
      .subscribe(data => {
        console.log(data)
        this.transaction = data;
      }, error => console.log(error));
  }
  update(){
    this.router.navigate(['updateTransaction',this.idtran]);
  }
  list(){
    this.router.navigate(['transaction']);
  }

}
