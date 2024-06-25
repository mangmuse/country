import { Countries } from "../api/country.type";

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
