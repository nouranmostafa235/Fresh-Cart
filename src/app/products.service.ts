import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 seenCategory:any
  constructor(private _httpClient:HttpClient , private router:Router) {
  
   }
   getProducts():Observable<any>{
    return this._httpClient.get("https://ecommerce.routemisr.com/api/v1/products")
   }
   getCategories():Observable<any>{
    return this._httpClient.get("https://ecommerce.routemisr.com/api/v1/categories")
   }
   getSpecificProduct(id:string):Observable<any>{
    return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
   }
   link: any
   linkClicked(linkName: any):any {
     this.link = linkName
     this.router.navigate(['/categories'])
     this.seenCategory=this.link
     console.log(this.seenCategory);
     localStorage.setItem("categName",this.seenCategory)
     return this.seenCategory
   }
}
