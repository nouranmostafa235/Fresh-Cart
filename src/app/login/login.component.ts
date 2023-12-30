import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isloading: boolean = false
  apiError:string=''
  isError:boolean=false
 loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Za-z][a-z0-9A-Z]{6,9}$/)]),
  });
  constructor(private _apiService: ApiService, private _router: Router) {
    if(localStorage.getItem('userData')!==null){
      _router.navigate(['/home'])
    }
  }
  handleLogin(data: FormGroup) {

    this.isloading = true
    if (data.valid) {
      this._apiService.login(data.value).subscribe({
        next: (responce) => {
          if (responce.message === 'success') {
            localStorage.setItem('userData',responce.token)
            this._apiService.decodeData()
            this.isloading=false
            this._router.navigate(['/home'])
          }
        },
        error: (err) => {
          console.log(err);
          
          this.isloading=false
          this.isError=true
          this.apiError=err.error.message
         }
      })

    }
  }

}
