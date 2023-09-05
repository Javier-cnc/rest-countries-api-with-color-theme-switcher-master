import { Component, Input } from '@angular/core';
import { Country } from 'src/app/models/country.model';

@Component({
  selector: 'app-country-list-item',
  templateUrl: './country-list-item.component.html',
  styleUrls: ['./country-list-item.component.sass'],
})
export class CountryListItemComponent {
  @Input()
  model: Country = new Country();
}
