import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CrudlistingComponent } from './crudlisting/crudlisting.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'listings', component: CrudlistingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
