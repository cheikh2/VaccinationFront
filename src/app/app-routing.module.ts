import { DefaultComponent } from './layout/default/default.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginComponent } from './authentification/login/login.component';
import { ActivateGuard } from './activate.guard';
import { RegistreComponent } from './component/registre/registre.component';


const routes: Routes = [
  {path:'', component:DefaultComponent,
children:[
  {path:'dashboard', component:DashboardComponent, canActivate: [ActivateGuard]},
  {path:'login', component:LoginComponent},
  {path:'registre', component:RegistreComponent}

]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
