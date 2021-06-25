import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';

//Componentes
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { DataService } from 'src/app/Services/data.service';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RecoverPasswordComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    RecoverPasswordComponent,
  ],
  providers: [
    DataService
  ]
})
export class UserModule { }
