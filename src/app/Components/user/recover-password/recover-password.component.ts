import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {

  recoverForm: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder) {
    this.recoverForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  resetPassword() {
    console.log(this.recoverForm)
    this.loading = true
    setTimeout(()=>{
      this.loading = false
    }, 5000)
  }

}
