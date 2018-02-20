import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ShintoService } from './shinto.service';

import { AppComponent } from './app.component';
import { BuyComponent } from './buy/buy.component';
import { HomeComponent } from './home/home.component';
import { LedgerComponent } from './ledger/ledger.component';
import { MineComponent } from './mine/mine.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MineComponent,
    LedgerComponent,
    BuyComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule, 
    FormsModule
  ],
  providers: [ShintoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
