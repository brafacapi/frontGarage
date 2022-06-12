import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillsComponent } from './component/bills/bills.component';
import { GaleriaComponent } from './component/galeria/galeria.component';
import { IntroComponent } from './component/intro/intro.component';
import { LoginComponent } from './component/login/login.component';
import { PriceComponent } from './component/price/price.component';
import { RegisterComponent } from './component/register/register.component';
import { SeeBillsComponent } from './component/see-bills/see-bills.component';

const routes: Routes = [
  { path: '', component: IntroComponent},
  { path: 'bills', component: BillsComponent},
  { path: 'price', component: PriceComponent},
  { path: 'intro', component: IntroComponent},
  { path: 'login', component: LoginComponent},
  { path: 'galeria', component: GaleriaComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'listar' , component: SeeBillsComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
