import { Component } from '@angular/core';
import { Country } from './models/country.model';
import { BackgroundAppService } from './services/background-app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  darkMode: boolean = false;

  constructor(private appService: BackgroundAppService) {
    // update local darkMode with application dark mode status
    this.darkMode = appService.DarkMode;

    // link the local value of darkMode to future changes of dark mode of application
    appService.DarkModeChanged.subscribe({
      next: (value) => {
        this.darkMode = value;
        // change color of body element in application
        // workaround to set body color from this component
        document.body.style.backgroundColor = this.darkMode
          ? '#212e37'
          : 'white';
      },
    });
  }

  toggleDarkMode() {
    this.appService.DarkMode = !this.appService.DarkMode;
  }
}
