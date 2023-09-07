export class Country {
  population: number;
  region: string;
  capital: string;
  name: {
    common: string;
    official: string;
    nativeName: {
      spa: {
        common: string;
        official: string;
      };
    };
  };
  nativeName: string;
  subregion: string;
  tld: string[];
  currencies: { code: string; name: string; symbol: string }[];
  languages: {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
  }[];
  borders: string[];
  flags: {
    svg: string;
    alt: string;
    png: string;
  };

  constructor() {
    // #region Set default value
    this.name = {
      common: 'Afganistan',
      official: 'Afganistan',
      nativeName: {
        spa: {
          common: 'Afganistan',
          official: 'Afganistan',
        },
      },
    };
    this.tld = ['.af'];
    this.capital = 'Kabul';
    this.subregion = 'Southern Asia';
    this.region = 'Asia';
    (this.population = 40218234),
      (this.borders = ['IRN', 'PAK', 'TKM', 'UZB', 'TJK', 'CHN']);
    this.nativeName = 'افغانستان';
    this.currencies = [
      {
        code: 'AFN',
        name: 'Afghan afghani',
        symbol: '؋',
      },
    ];
    this.languages = [
      {
        iso639_1: 'ps',
        iso639_2: 'pus',
        name: 'Pashto',
        nativeName: 'پښتو',
      },
      {
        iso639_1: 'uz',
        iso639_2: 'uzb',
        name: 'Uzbek',
        nativeName: 'Oʻzbek',
      },
      {
        iso639_1: 'tk',
        iso639_2: 'tuk',
        name: 'Turkmen',
        nativeName: 'Türkmen',
      },
    ];
    this.flags = {
      alt: 'testing text',
      svg: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg',
      png: '',
    };
    // #endregion
  }
}
