import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CartComponent } from './cart/cart.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';
import { BrandsComponent } from './brands/brands.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { authGuard } from './auth.guard';
import { DetailsComponent } from './details/details.component';
import { SearcProductsComponent } from './searc-products/searc-products.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",canActivate:[authGuard],component:HomeComponent},
  {path:"cart",canActivate:[authGuard],component:CartComponent},
  {path:"details/:id",canActivate:[authGuard],component:DetailsComponent},
  {path:"wishList",canActivate:[authGuard],component:WishListComponent},
  {path:"categories",canActivate:[authGuard],component:CategoryComponent},
  {path:"products",canActivate:[authGuard],component:ProductsComponent},
  {path:"searchProducts",canActivate:[authGuard],component:SearcProductsComponent},
  {path:"brands",canActivate:[authGuard],component:BrandsComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"**",component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
