//components
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { ShowQuotesComponent } from './show-quotes/show-quotes.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'edit/:userId', component: EditComponent },
    { path: 'new', component: NewComponent },
    { path: 'quotes/:userId', component: ShowQuotesComponent },
    { path: 'write/:userId', component: NewQuoteComponent },
    { path: '', pathMatch: 'full', redirectTo: '/home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }