import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/models/country.model';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.sass'],
})
export class CountryPageComponent {
  model: Country;

  constructor(private activatedRoute: ActivatedRoute) {
    // get country name from url to load the corresponding info from the server
    let countryName = activatedRoute.snapshot.params['countryName'];

    // load country from server
    // TODO: replace this with a request to the server...
    this.model = new Country(); // dummy action
  }
}
