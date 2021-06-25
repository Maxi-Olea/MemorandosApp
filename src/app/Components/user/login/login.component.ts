import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private dataservice: DataService) {
    this.loginForm = this.fb.group ({
      userName: ['', [Validators.required]],
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
      this.dataservice.login(userLogin).subscribe(res => {
        console.log(res)
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
