import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { TransactionComponent } from './transaction/transaction.component';
import { CreateTransactionComponent } from './transaction/create-transaction/create-transaction.component';
import { TransactionDetailsComponent } from './transaction/transaction-details/transaction-details.component';
import { TransactionsStatComponent } from './transaction/transactions-stat/transactions-stat.component';
import { UpdateTransactionComponent } from './transaction/update-transaction/update-transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    TransactionComponent,
    CreateTransactionComponent,
    TransactionDetailsComponent,
    TransactionsStatComponent,
    UpdateTransactionComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
     HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
