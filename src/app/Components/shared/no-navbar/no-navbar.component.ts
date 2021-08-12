import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-navbar',
  templateUrl: './no-navbar.component.html',
  styleUrls: ['./no-navbar.component.css']
})
export class NoNavbarComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.router.navigate(['/'])
  }
}
