import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  isloading: boolean = false
  apiError:string=''
  isError:boolean=false
  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required,Validators.pattern(/^[a-zA-Z]{3,}/),Validators.minLength(3)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Za-z][a-z0-9A-Z]{6,9}$/)]),
    rePassword: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Za-z][a-z0-9A-Z]{6,9}$/)]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
  });
  constructor(private _apiService: ApiService, private _router: Router) {
    if(localStorage.getItem("useData")!==null){
      _router.navigate(['/home'])
    }
  }
  handleRegister(data: FormGroup) {

    this.isloading = true
    if (data.valid) {
      this._apiService.register(data.value).subscribe({
        next: (responce) => {
          if (responce.message === 'success') {
            this.isloading=false
            this._router.navigate(['/login'])
          }
        },
        error: (err) => {
          this.isloading=false
          this.isError=true
          this.apiError=err.error.errors.msg
         }
      })

    }
  }

}
