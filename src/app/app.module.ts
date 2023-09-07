import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CountryListItemComponent } from './components/country-list-item/country-list-item.component';
import { AppRoutingModule } from './app-routing.module';
import { CountryPageComponent } from './components/country-page/country-page.component';
import { CountryListComponent } from './components/country-list/country-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CountryListItemComponent,
    CountryPageComponent,
    CountryListComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
