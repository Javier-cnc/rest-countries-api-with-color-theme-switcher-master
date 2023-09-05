export class Country {
  population: string;
  region: string;
  capital: string;
  name: string;
  imageAddress: string;

  constructor() {
    this.imageAddress = 'https://flagcdn.com/de.svg';
    this.population = '81,770,900';
    this.name = 'Germany';
    this.region = 'Europe';
    this.capital = 'Berlin';
  }
}
