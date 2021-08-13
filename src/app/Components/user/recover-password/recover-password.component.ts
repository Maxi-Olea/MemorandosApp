import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/Services/data.service';


@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {

  recoverForm: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private toastr: ToastrService,
    private router: Router
    ) {
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
    //console.log(this.recoverForm)
    if(this.recoverForm.status === 'VALID'){
      const data = this.recoverForm.value
      //console.log("Data: " + data)
      const username = this.recoverForm.get('username')?.value
      await this.dataService.updatePassword(username, data).subscribe(res => {
        //console.log(res)
        this.loading = false
        this.toastr.success('La contraseña a sido restablecida con exito', 'Contraseña Restablecida')
        this.router.navigate(['/login'])
      },
      e => {
        console.log(e)
        const error = e.error
        console.log("Error: ", error.message)
        this.toastr.error('Ha ocurrido un problema con el cambio de contraseña', 'Fallo en el cambio de Contraseña!')
        this.loading = false
      })
    } else {
      this.toastr.error('El formulario no es valido', 'Fallo en el cambio de Contraseña!')
      //console.log("Formulario invalido")
    }

  }

  checkPassword(group: FormGroup): any {
    const pass = group.controls.password?.value
    const cpass = group.controls.cpassword?.value
    return pass === cpass ? null : { notSame: true }
  }

}
