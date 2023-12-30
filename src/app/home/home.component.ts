import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ApiService } from '../api.service';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }
  customOptions2: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 8
      },
      400: {
        items: 8
      },
      740: {
        items: 8
      },
      940: {
        items: 8
      }
    },
    nav: false,

  }
  products: any[] = []
  categories: any[] = []
  index: any
  indexArray: number[] = []
  page: number = 1
  count: number = 0
  size: number = 12
  category: any
  name: any
  search:any
  constructor(private _ProducrService: ProductsService, private api: ApiService) {

  }
  randomIndex() {
    for (let i = 0; i < 6; i++) {
      this.index = Math.floor(Math.random() * 39)
      this.indexArray[i] = this.index
    }
  }
  ngOnInit(): void {
    this.GetProducts()
    this._ProducrService.getCategories().subscribe({
      next: (response) => {
        this.categories = response.data
      },
      error: (err) => {
        console.log(err);
      }
    })
    this.randomIndex()   
  }

  linkClicked(x: any) {
    this._ProducrService.linkClicked(x)
  }
  GetProducts() {
    this._ProducrService.getProducts().subscribe({
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
