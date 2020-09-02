import countries from 'i18n-iso-countries';
import flag from 'country-code-emoji';

countries.registerLocale(require('i18n-iso-countries/langs/en.json'));

const Countries = {
  // Array of all countries with name and emoji
  getAll: () => {
    const countryCodes = Object.values(countries.getNumericCodes());
    return countryCodes.map((code) => {
      return {
        code,
        name: countries.getName(code, 'en'),
        emoji: flag(code),
      };
    });
  },
  fromAlpha2Code: (code) => {
    return {
      code,
      name: countries.getName(code, 'en'),
      emoji: flag(code),
    };
  },
};

export default Countries;
