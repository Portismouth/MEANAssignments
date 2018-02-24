import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MarketplaceService } from './marketplace.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { ListingComponent } from './listing/listing.component';
import { BrowseComponent } from './browse/browse.component';
import { CrudlistingComponent } from './crudlisting/crudlisting.component';
import { NewlistingComponent } from './newlisting/newlisting.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IndexComponent,
    ListingComponent,
    BrowseComponent,
    CrudlistingComponent,
    NewlistingComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MarketplaceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
