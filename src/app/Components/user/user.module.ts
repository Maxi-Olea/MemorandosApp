import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';

//Componentes
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RecoverPasswordComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    RecoverPasswordComponent,
  ]
})
export class UserModule { }
