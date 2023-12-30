import { Component } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  catergoryName:any
  products:any[]=[]
constructor(private _productService:ProductsService){
this.linked()
_productService.getProducts().subscribe({
  next:(res)=>{
    this.products=res.data
  }
})
}
linked(){
  this.catergoryName=localStorage.getItem("categName")
}
}
