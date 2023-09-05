import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountryListItemComponent } from './components/country-list-item/country-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryListItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
