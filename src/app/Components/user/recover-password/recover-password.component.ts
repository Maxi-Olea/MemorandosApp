import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/Services/data.service';


@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {

  recoverForm: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.recoverForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      cpassword: ['']
    }, {validator: this.checkPassword})
  }

  ngOnInit(): void {
  }

  resetPassword = async () => {
    this.loading = true
    console.log(this.recoverForm)
    if(this.recoverForm.status === 'VALID'){
      const data = this.recoverForm.value
      console.log("Data: " + data)
      const userName = this.recoverForm.get('username')?.value
      await this.dataService.updatePassword(userName, data).subscribe(res => {
        console.log(res)
        this.loading = false
      })
    } else {
      console.log("Formulario invalido")
    }


    // setTimeout(()=>{
    //   this.loading = false
    // }, 5000)
  }

  checkPassword(group: FormGroup): any {
    const pass = group.controls.password?.value
    const cpass = group.controls.cpassword?.value
    return pass === cpass ? null : { notSame: true }
  }

}
