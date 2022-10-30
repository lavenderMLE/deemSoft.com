import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [  
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : '',
    component : MainComponent
  },
  {
    path: 'register',
    component : RegisterComponent
  },
  {
    path: 'main',
    component : MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
