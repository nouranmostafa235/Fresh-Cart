import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
constructor(private _productServics:ProductsService , private _activated:ActivatedRoute){

}
productId:any
productDetails:any

customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    }
  },
  nav: true
}

ngOnInit(): void {
  this._activated.paramMap.subscribe({
    next:(param)=>{
      console.log(param.get("id"));
      this.productId=param.get("id")
    }
  })
  this._productServics.getSpecificProduct(this.productId).subscribe({
    next:(data)=>{
      this.productDetails=data.data
      console.log(data.data);
      
    },
    error:(err)=>{
console.log(err);

    }
  })
}

}
