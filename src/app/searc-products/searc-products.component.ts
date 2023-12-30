import { Component, OnInit  } from '@angular/core';
import { ApiService } from '../api.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-searc-products',
  templateUrl: './searc-products.component.html',
  styleUrls: ['./searc-products.component.css']
})
export class SearcProductsComponent {
  search:any
  products:any[]=[]
  page: number = 1
  count: number = 0
  size: number = 12
  category: any
  name: any
constructor(private _api:ApiService , private _products:ProductsService){

}
ngOnInit(): void {
  this._api.search.subscribe({
    next:(res)=>{
      this.search=res
      console.log(res);
    }
  })
  this.GetProducts()
}
GetProducts() {
  this._products.getProducts().subscribe({
    next: (responce) => {
      console.log(responce.data);
      this.products = responce.data
    },
    error: (err) => {
      console.log(err);
    }
  })
}
onTableDataChange(event: any) {
  this.page = event
  this.GetProducts()
}
}
