import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from 'src/app/transaction';
import { TransactionService } from 'src/app/transaction.service';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.css']
})
export class CreateTransactionComponent implements OnInit {
  favoriteSeason: string;
  trans: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  transaction: Transaction = new Transaction();
  submitted = false;
  constructor(private transactionService: TransactionService,
    private router: Router) { }

  ngOnInit(): void {
  }

  newCategory(): void {
    this.submitted = false;
    this.transaction = new Transaction();
  }



  save() {
    this.transactionService
    .createTransaction(this.transaction).subscribe((data: any) => {
      console.log(data)
      this.transaction = new Transaction();
      this.gotoList();
    }, 
      (    error: any) => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/transaction']);
  }


}
