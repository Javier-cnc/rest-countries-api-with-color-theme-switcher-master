import { AppComponent } from './../../app.component';
import { Component } from '@angular/core';
import { Country } from 'src/app/models/country.model';
import { RepositoryService } from 'src/app/services/repository.service';
import * as levenshtein from 'fastest-levenshtein';
import { BackgroundAppService } from 'src/app/services/background-app.service';
@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.sass'],
})
export class CountryListComponent {
  countries: Country[] = [];
  filteredCountries: Country[] = [];
  regionFilter: string = '';
  darkMode: boolean;

  // used to define the country to show using the name property
  nameFilter: string = '';

  constructor(
    private repo: RepositoryService,
    private appService: BackgroundAppService
  ) {
    // set initial value
    // TODO: Change this using a request to the server...
    repo.getAllCountries().subscribe({
      next: (result) => {
        this.countries = result;

        // update filtered list
        this.filteredCountries = result;
      },
      error: (err) => {
        console.log('The request operation to the server failed: ' + err);
      },
      complete: () => {},
    });

    this.darkMode = appService.DarkMode;
    appService.DarkModeChanged.subscribe({
      next: (value) => {
        this.darkMode = value;
      },
    });
  }

  filterList() {
    // filter by name
    if (this.nameFilter === '') {
      this.filteredCountries = this.countries;
    } else {
      this.filteredCountries = this.countries.filter(
        (country) =>
          levenshtein.distance(country.name.common, this.nameFilter) < 3
      );
    }

    // filter by region
    if (this.regionFilter != '') {
      this.filteredCountries = this.filteredCountries.filter(
        (country) => country.region === this.regionFilter
      );
    }
  }

  filterByRegion(event: any) {
    console.log('Filter by region: ' + event.target.value);
    this.regionFilter = event.target.value;
    this.filterList();
  }
}
