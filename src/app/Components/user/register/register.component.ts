import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  //Arreglos para pruebas
  //countries = ['Argentina','Uruguay','Brasil','Chile','Bolivia','Paraguay','Colombia','Venezuela']
  //cities = ['Cordoba','Capital Federal','Santa Fe','Rosario','Mendoza','Neuquen']
  countries:any[] = []
  cities:any[] = []


  constructor(private fb: FormBuilder, private dataService: DataService) {
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
    console.log(this.registerForm)
    if(this.registerForm.status === 'VALID') {
      const user = this.registerForm.value
      console.log(user)
      console.log("Nombre:" + this.registerForm.get('name')?.value)
      const name = this.registerForm.get('name')?.value
      const lastName = this.registerForm.get('surname')?.value
      const email = this.registerForm.get('email')?.value
      const userName = this.registerForm.get('username')?.value
      const password = this.registerForm.get('password')?.value
      const idPais = this.registerForm.get('country')?.value
      const idCiudad = this.registerForm.get('city')?.value
      const userData:User = new User (name, lastName, email, userName, password, idPais, idCiudad)
      this.dataService.createUser(userData).subscribe(res => {
        console.log(res)
      })
    }
    else {
      console.log("Formulario invalido")
    }
    this.loading = true
    setTimeout(() => {
      this.loading = false
    }, 3000)
  }

  checkPassword(group: FormGroup): any {
    const pass = group.controls.password?.value
    const cpass = group.controls.cpassword?.value
    return pass === cpass ? null : { notSame: true }
  }

}
