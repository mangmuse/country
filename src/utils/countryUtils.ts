import { Countries, Country } from "../types/country.type";

export const filterUnselectedCountries = (
  countries: Countries,
  selectedCountries: Countries
): Countries => {
  return countries.filter(
    (country) =>
      !selectedCountries.some(
        (selected) => selected.name.common === country.name.common
      )
  );
};

export const isCountrySelected = (
  selectedCountries: Countries,
  country: Country
) => {
  return selectedCountries.some(
    (selected) => selected.name.common === country.name.common
  );
};
