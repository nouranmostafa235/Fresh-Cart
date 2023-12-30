import { Component, Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  logged:boolean=false
  UserName:string=''
  DataValue:any
  search:any
 constructor(private _apiService:ApiService , private _router:Router){
    _apiService.data.subscribe({
      next:()=>{
        if(_apiService.data.getValue() !== null){
          this.logged=true
           this.DataValue=_apiService.data.getValue()
           this.UserName=this.DataValue.name   
        }
        else{
          this.logged=false;
        }
      
       }
    })      
 }
 
 logOut(){
  this._apiService.logout()
 }
 setSearchVal(){
  this._apiService.searchVal(this.search);
  this._router.navigate(['/searchProducts'])
  this.search=null

 }
 
}
