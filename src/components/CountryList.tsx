import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import countryApi from "../api/country.api";
import { Countries, Country } from "../api/country.type";
import { filterUnselectedCountries } from "../utils/countryFilters";

export default function CountryList() {
  const [countries, setCountries] = useState<Countries>([]);
  const [error, setError] = useState<string | null>(null);
  const [selectedCountries, setSelectedCountries] = useState<Countries>([]);
  useEffect(() => {
    (async () => {
      try {
        const data = await countryApi.getCountries();
        setCountries(data);
      } catch (e) {
        setError("실패!");
      }
    })();
  }, []);
  console.log(countries);
  console.log(selectedCountries);
  const unselectedCountries = filterUnselectedCountries(
    countries,
    selectedCountries
  );
  console.log(unselectedCountries);
  const handleToggleCountrySelection = (country: Country) => {
    setSelectedCountries((prevSelected) => {
      if (
        prevSelected.some(
          (selected) => selected.name.common === country.name.common
        )
      ) {
        return prevSelected.filter(
          (selected) => selected.name.common !== country.name.common
        );
      } else {
        return [...prevSelected, country];
      }
    });
  };

  if (!error)
    return (
      <section className="">
        <h2>Selected CountryList</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {selectedCountries.map((selectedCountry, idx) => (
            <CountryCard
              onClick={handleToggleCountrySelection}
              key={idx}
              country={selectedCountry}
              isSelected={true}
            />
          ))}
        </ul>
        <h2>CountryList</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {unselectedCountries.map((country, idx) => (
            <CountryCard
              onClick={handleToggleCountrySelection}
              key={idx}
              country={country}
              isSelected={false}
            />
          ))}
        </ul>
      </section>
    );
}
