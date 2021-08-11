import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder,
              private dataService: DataService,
              private toastr: ToastrService,
              private router: Router) {
    this.loginForm = this.fb.group ({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  login() {
    console.log(this.loginForm)
    this.loading = true
    if(this.loginForm.status === 'VALID') {
      const userLogin = this.loginForm.value
      console.log(userLogin)
      this.dataService.login(userLogin).subscribe(res => {
        console.log(res)
        const token = res.token
        const userId = res.id
        console.log("Imprmiendo el token: ", token)
        console.log("Imprimiendo el userId: ", userId)
        if(token) {
          sessionStorage.setItem('token', token)
          sessionStorage.setItem('userId', userId)
          this.router.navigate(['/dashboard'])
        }
      },
      e => {
        console.log(e)
        const error = e.error
        console.log("Error: ", error.message)
        this.toastr.error('El usuario y/o la contraseña ingresados no son válidos', 'Fallo en la Autenticación!')
      })
    }
    else {
      console.log("Datos no Validos")
    }
    setTimeout(()=> {
      this.loading = false
    }, 5000)
  }



}
