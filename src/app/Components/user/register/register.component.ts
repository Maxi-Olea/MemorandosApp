import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/Models/User.model';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup
  loading = false

  countries:any[] = []
  cities:any[] = []


  constructor(private fb: FormBuilder,
              private dataService: DataService,
              private toastr: ToastrService,
              private router: Router) {
    this.registerForm = this.fb.group ({
      surname: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      cpassword: [''],
      country: ['null', [Validators.required]],
      city: ['null', [Validators.required]]

    }, { validator: this.checkPassword })
  }

  ngOnInit(): void {
    this.dataService.getcountries().subscribe(data => {
      this.countries = data
    })
  }

  fetchCities(event: Event) {
    const countryId = (<HTMLSelectElement>event.target).value
    this.dataService.getCities(countryId).subscribe(data => {
      this.cities = data
    })
  }

  register() {
    this.loading = true
    //console.log(this.registerForm)
    if(this.registerForm.status === 'VALID') {
      const user = this.registerForm.value
      //console.log(user)
      //console.log("Nombre:" + this.registerForm.get('name')?.value)
      const name = this.registerForm.get('name')?.value
      const lastName = this.registerForm.get('surname')?.value
      const email = this.registerForm.get('email')?.value
      const username = this.registerForm.get('username')?.value
      const password = this.registerForm.get('password')?.value
      const idPais = this.registerForm.get('country')?.value
      const idCiudad = this.registerForm.get('city')?.value
      const userData:User = new User (name, lastName, email, username, password, idPais, idCiudad)
      this.dataService.createUser(userData).subscribe(res => {
        console.log(res)
        this.toastr.success(`El usuario "${res.username}" para ${res.name} ${res.lastName} ha sido creado con exito!`, 'Usuario Creado!')
        this.router.navigate(['./'])
      },
      e => {
        console.log(e)
        const error = e.error
        console.log("Error: ", error.message)
        this.toastr.error('Ha ocurrido un problema con el registro del usuario', 'Fallo en el Registro!')
        this.loading = false
      })
    }
    else {
      //console.log("Formulario invalido")
      this.toastr.error('Lod datos ingresados no son validos', 'Fallo en el Registro!')
    }
  }

  checkPassword(group: FormGroup): any {
    const pass = group.controls.password?.value
    const cpass = group.controls.cpassword?.value
    return pass === cpass ? null : { notSame: true }
  }

}
