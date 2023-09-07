import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, map } from 'rxjs';
import { Country } from '../models/country.model';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  constructor(private httpClient: HttpClient) {}

  getAllFakeCountries(): Observable<Country[]> {
    // create a fake observable
    let fakeResult = new ReplaySubject<Country[]>();

    setTimeout(() => {
      // set the new value using the observable object
      fakeResult.next([
        new Country(),
        new Country(),
        new Country(),
        new Country(),
        new Country(),
        new Country(),
      ]);
    }, 1000);

    return fakeResult;
  }

  getAllCountries(): Observable<Country[]> {
    return this.httpClient.get<Country[]>(
      'https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags'
    );
  }

  getCountryByName(name: string): Observable<Country> {
    return this.httpClient
      .get<Country[]>(
        `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,region,subregion,flags,tld,currencies,languages,borders`
      )
      .pipe(
        map((collection) => {
          return collection[0];
        })
      );
  }
}
