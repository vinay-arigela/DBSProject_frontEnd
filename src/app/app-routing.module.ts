import { Component, NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { BalanceComponent } from './balance/balance.component';
import { CalenderComponent } from './calender/calender.component';
import { LoginComponent } from './login/login.component';
import { ReceiverComponent } from './receiver/receiver.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'receiver', component:ReceiverComponent},
  {path:'transfer', component:BalanceComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
