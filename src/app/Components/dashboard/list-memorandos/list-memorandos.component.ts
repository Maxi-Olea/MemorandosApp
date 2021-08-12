import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-list-memorandos',
  templateUrl: './list-memorandos.component.html',
  styleUrls: ['./list-memorandos.component.css']
})
export class ListMemorandosComponent implements OnInit {

  userId: any;
  memorandos: any;
  loading= false;

  constructor(
    private dataService: DataService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.loading = true
    this.userId = sessionStorage.getItem('userId')
    this.getMemorandos()

  }

  getMemorandos() {
    this.dataService.getMemorandos(this.userId).subscribe(data => {
      console.log('data recibida: ', data)
      this.memorandos = data
      this.loading = false
    },
    e => {
      console.log(e)
      const error = e.error
      console.log("Error: ", error.message)
      this.toastr.error('Ha ocurrido un error, No se pueden recuperar los mensajes')
    })
  }

  deleteMemo(idMemo: any) {
    console.log('Eliminar el memorando id: ', idMemo)
    this.dataService.deleteMemo(idMemo).subscribe(res => {
      console.log('respuesta de la api: ', res)
      if(res === 1) {
        this.toastr.success('Mensaje eliminado')
        this.getMemorandos()
      }
    },
    e => {
      console.log(e)
      const error = e.error
      console.log("Error: ", error.message)
      this.toastr.error('Ha ocurrido un error, el mensaje no pudo ser eliminado')
    })
  }

}
