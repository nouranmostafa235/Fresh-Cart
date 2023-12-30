import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  search=new BehaviorSubject(null)
  data = new BehaviorSubject(null)
  constructor(private _ApiService: HttpClient, private _router: Router) {
    if (localStorage.getItem('userData') !== null) {
      this.decodeData()
    }

  }
  searchVal(x:any){
    this.search.next(x)
    return this.search;
  }
  decodeData() {
    let encode = JSON.stringify(localStorage.getItem('userData'))
    let decode: any = jwtDecode(encode)
    this.data.next(decode)
  }
  register(userData: object): Observable<any> {
    return this._ApiService.post('https://ecommerce.routemisr.com/api/v1/auth/signup', userData)
  }
  login(userData: object): Observable<any> {
    return this._ApiService.post('https://ecommerce.routemisr.com/api/v1/auth/signin', userData)
  }
  logout() {
    localStorage.removeItem('userData')
    this.data.next(null)
    this._router.navigate(['/login'])
  }

}
