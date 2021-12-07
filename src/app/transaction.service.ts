import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { transaction } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class transactionService {

  private baseUrl = "http://localhost:8088/api/transaction";

  constructor(private http: HttpClient) { }

  getTransaction(): Observable<transaction[]>{
    return this.http.get<transaction[]>(`${this.baseUrl}`);
  }
}