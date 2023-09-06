import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountryListItemComponent } from './components/country-list-item/country-list-item.component';
import { AppRoutingModule } from './app-routing.module';
import { CountryPageComponent } from './components/country-page/country-page.component';
import { CountryListComponent } from './components/country-list/country-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryListItemComponent,
    CountryPageComponent,
    CountryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
