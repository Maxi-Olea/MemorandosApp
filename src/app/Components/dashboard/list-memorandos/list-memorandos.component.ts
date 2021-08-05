import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-list-memorandos',
  templateUrl: './list-memorandos.component.html',
  styleUrls: ['./list-memorandos.component.css']
})
export class ListMemorandosComponent implements OnInit {

  userId: any;
  memorandos: any;

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userId = sessionStorage.getItem('userId')
    console.log('El userId recuperado del session storage: ', this.userId)
    this.getMemorandos()

  }

  getMemorandos() {
    this.dataService.getMemorandos(this.userId).subscribe(data => {
      console.log('data recibida: ', data)
      this.memorandos = data
    })
  }

}
