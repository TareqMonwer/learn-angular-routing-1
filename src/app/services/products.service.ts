import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl = 'https://fakestoreapi.com/products'
  private productsUrl = (limit: number = 10): string => `${this.baseUrl}?limit=${limit}`;

  constructor(private httpClient: HttpClient) { }

  getProducts(limit: number = 10): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.productsUrl(limit));
  }

  getProduct(id: number): Observable<Product> { 
    return this.httpClient.get<Product>(`${this.baseUrl}/${id}`);
  }
}
