import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/user/login/login.component'
import { DataService } from './Services/data.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: '', loadChildren: () => import('./Components/user/user.module').then(m => m.UserModule) },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [DataService]
})
export class AppRoutingModule { }
