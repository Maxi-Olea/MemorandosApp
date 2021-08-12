import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './spinner/spinner.component';
import { FooterComponent } from './footer/footer.component';
import { NoNavbarComponent } from './no-navbar/no-navbar.component';



@NgModule({
  declarations: [
    SpinnerComponent,
    FooterComponent,
    NoNavbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    SpinnerComponent,
    FooterComponent,
    NoNavbarComponent
  ]
})
export class SharedModule { }
