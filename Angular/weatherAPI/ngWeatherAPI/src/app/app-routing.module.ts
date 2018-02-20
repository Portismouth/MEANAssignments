import { ChicagoComponent } from './chicago/chicago.component';
import { SeattleComponent } from './seattle/seattle.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { DcComponent } from './dc/dc.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'chicago', component: ChicagoComponent },
  { path: 'burbank', component: BurbankComponent },
  { path: 'dallas', component: DallasComponent },
  { path: 'san-jose', component: SanJoseComponent },
  { path: 'seattle', component: SeattleComponent },
  { path: 'washington-dc', component: DcComponent },
  { path: '', pathMatch: 'full', redirectTo: '/chicago' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
