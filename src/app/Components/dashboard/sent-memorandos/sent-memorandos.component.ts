import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-sent-memorandos',
  templateUrl: './sent-memorandos.component.html',
  styleUrls: ['./sent-memorandos.component.css']
})
export class SentMemorandosComponent implements OnInit {

  userId: any;
  memos: any;

  constructor(
    private dataService: DataService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.userId = sessionStorage.getItem('userId')
    console.log('El userId recuperado del session storage: ', this.userId)
    this.getSentMemos()
  }

  getSentMemos() {
    this.dataService.getSentMemos(this.userId).subscribe(data => {
      console.log('data recibida: ', data)
      this.memos = data
    })
  }

}
