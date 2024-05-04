import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
 
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public baseUrl = environment.api_url;
  public Currency = { name: 'Dollar', currency: 'USD', price: 1 } // Default Currency

  constructor(private http: HttpClient) {}

  getProducts(){
    return this.http.get(`${this.baseUrl}products_details/read.php`);
  }

  getProduct(id:string) {
    return this.http.get(`${this.baseUrl}products_details/read.php?id=${id}`);
  }

}