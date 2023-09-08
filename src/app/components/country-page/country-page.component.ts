import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/models/country.model';
import { BackgroundAppService } from 'src/app/services/background-app.service';
import { RepositoryService } from 'src/app/services/repository.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.sass'],
})
export class CountryPageComponent {
  model: Country | undefined;
  darkMode: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private repo: RepositoryService,
    private appService: BackgroundAppService
  ) {
    // get country name from url to load the corresponding info from the server
    let countryName = activatedRoute.snapshot.params['countryName'];

    // load country from server
    this.repo.getCountryByName(countryName).subscribe({
      next: (result) => {
        this.model = result;
        console.log(this.model);
      },
      error: (err) => {
        console.log(
          'An error ocurred retriving information from the server: ' + err
        );
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

  getNativeName(): string {
    let nativeName: string = '';

    if (this.model) {
      nativeName = Object.values(this.model.name.nativeName)[0].common;
    }
    return nativeName;
  }

  getObjectsValue(object: any): any[] {
    let values: any[] = [];

    if (object) {
      values = Object.values(object);
    }

    return values;
  }
}
