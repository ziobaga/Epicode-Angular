import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Root, Product } from './Modules/iprodotti';

@Injectable({
  providedIn: 'root',
})
export class ProdottiServiceService {
  apiURL = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.http
      .get<Product[]>(this.apiURL)
      .pipe(map((response) => response));
  }
}
