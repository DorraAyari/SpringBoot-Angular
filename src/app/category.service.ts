import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { category } from './category';

@Injectable({
  providedIn: 'root'
})
export class categoryService {

  private baseUrl = "http://localhost:8088/api/category";

  constructor(private http: HttpClient) { }

  getCategory(): Observable<category[]>{
    return this.http.get<category[]>(`${this.baseUrl}`);
  }
}