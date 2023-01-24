import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  getProducts(){
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(console.log);
  }
  getProduct=(id : number)=>{
    const urlDetail = 'https://dummyjson.com/products/'+id;
    fetch(urlDetail)
      .then(res => res.json())
      .then(console.log);
  }
  searchProducts(productPrefix: string): Observable<Product[]> {
    const url = 'https://dummyjson.com/products/search?q='+productPrefix;
    fetch(url)
    .then(res => res.json())
      .then(console.log);
  }
  searchProduct(){

  }
  constructor() { }
}
