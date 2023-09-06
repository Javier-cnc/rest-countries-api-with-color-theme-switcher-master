import { Component } from '@angular/core';
import { Country } from 'src/app/models/country.model';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.sass'],
})
export class CountryListComponent {
  countries: Country[];

  constructor() {
    // set initial value
    // TODO: Change this using a request to the server...
    this.countries = [new Country(), new Country(), new Country()];
  }
}
