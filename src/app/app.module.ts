import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NotfoundComponent } from './notfound/notfound.component';
import{BrowserAnimationsModule}from'@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { ProductsComponent } from './products/products.component';
import { CategoryComponent } from './category/category.component';
import { BrandsComponent } from './brands/brands.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DetailsComponent } from './details/details.component';
import { SearchPipe } from './search.pipe';
import { SearchBarPipe } from './search-bar.pipe';
import { SearcProductsComponent } from './searc-products/searc-products.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GalleryComponent,
    NotfoundComponent,
    CartComponent,
    WishListComponent,
    ProductsComponent,
    CategoryComponent,
    BrandsComponent,
    LoginComponent,
    RegisterComponent,
    DetailsComponent,
    SearchPipe,
    SearchBarPipe,
    SearcProductsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
