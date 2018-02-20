import { BuyComponent } from './buy/buy.component';
import { HomeComponent } from './home/home.component';
import { LedgerComponent } from './ledger/ledger.component';
import { MineComponent } from './mine/mine.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: 'buy', component: BuyComponent },
    { path: 'home', component: HomeComponent },
    { path: 'ledger', component: LedgerComponent },
    { path: 'mine', component: MineComponent },
    { path: '', pathMatch: 'full', redirectTo: '/home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }