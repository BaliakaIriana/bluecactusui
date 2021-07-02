import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployesComponent} from "./screens/employes/employes.component";
import {SigninComponent} from "./screens/signin/signin.component";

const routes: Routes = [
  { path: '', redirectTo: '/employes', pathMatch: 'full' },
  {path: 'employes', component: EmployesComponent},
  {path: 'signin', component: SigninComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
