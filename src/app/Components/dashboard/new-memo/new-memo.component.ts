import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-new-memo',
  templateUrl: './new-memo.component.html',
  styleUrls: ['./new-memo.component.css']
})
export class NewMemoComponent implements OnInit {

  userId: any
  newMemoForm: FormGroup
  users:any[] = []
  loading = false

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private toastr: ToastrService,
  ) {
    this.newMemoForm =this.fb.group({
      userId: ['null', [Validators.required]],
      memo: ['', [Validators.required, Validators.maxLength(144)]]
    })
   }

  ngOnInit(): void {
    this.userId = sessionStorage.getItem('userId')
    this.dataService.getUsers().subscribe(data => {
      //console.log("data recibida desde la base de datos: ", data)
      this.users = data.filter( ( x:any ) => { return x.id != this.userId})
      //console.log('usuarios filtrados: ', this.users)
    })
  }

  newMemo() {
    this.loading = true
    //console.log('el formulario: ', this.newMemoForm)
    const memoData = {
      message: this.newMemoForm.get('memo')?.value,
      remitente: this.userId,
      destinatario: this.newMemoForm.get('userId')?.value
    }
    this.dataService.sendMemo(memoData).subscribe(res => {
      //console.log('Data recibida: ', res)
      this.toastr.success('El mensaje se ha enviado con Exito')
      this.newMemoForm.reset()
      this.loading = false
    },
    e => {
      console.log(e)
      const error = e.error
      console.log("Error: ", error.message)
      this.toastr.error('Se ha producido un error. Por favor intente nuevamente')
    })
  }

}
