import { Component, Input } from '@angular/core';
import { Country } from 'src/app/models/country.model';
import { BackgroundAppService } from 'src/app/services/background-app.service';

@Component({
  selector: 'app-country-list-item',
  templateUrl: './country-list-item.component.html',
  styleUrls: ['./country-list-item.component.sass'],
})
export class CountryListItemComponent {
  @Input()
  model: Country = new Country();

  darkMode: boolean;

  constructor(private appService: BackgroundAppService) {
    this.darkMode = appService.DarkMode;
    this.appService.DarkModeChanged.subscribe({
      next: (value) => {
        this.darkMode = value;
      },
    });
  }
}
