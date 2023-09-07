import { Component } from '@angular/core';
import { Country } from 'src/app/models/country.model';
import { RepositoryService } from 'src/app/services/repository.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.sass'],
})
export class CountryListComponent {
  countries: Country[] = [];

  constructor(private repo: RepositoryService) {
    // set initial value
    // TODO: Change this using a request to the server...
    repo.getAllCountries().subscribe({
      next: (result) => {
        this.countries = result;
        console.log(this.countries);
      },
      error: (err) => {
        console.log('The request operation to the server failed: ' + err);
      },
      complete: () => {},
    });
  }
}
