import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loading= false
  userId: any
  userData: any

  constructor(
    private router: Router,
    private dataService: DataService
    ) { }

  ngOnInit(): void {
    this.loading = true
    this.userId = sessionStorage.getItem('userId')
    this.getUserInfo()
  }

  getUserInfo() {
    this.dataService.getUserById(this.userId).subscribe(data => {
      console.log('Data del usuario recibida: ', data)
      this.userData = data
      this.loading = false
    })
  }

  logout() {
    sessionStorage.clear()
    this.router.navigate(['/'])
  }
}
