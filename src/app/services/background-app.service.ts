import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BackgroundAppService {
  private darkMode: boolean = false;

  private darkModeChanged: ReplaySubject<boolean> =
    new ReplaySubject<boolean>();

  get DarkModeChanged(): Observable<boolean> {
    return this.darkModeChanged;
  }

  get DarkMode(): boolean {
    return this.darkMode;
  }
  set DarkMode(value: boolean) {
    if (value != this.darkMode) {
      this.darkMode = value;

      // notify the rest of the application about the change of darkMode
      this.darkModeChanged.next(value);
    }
  }
  constructor() {}
}
