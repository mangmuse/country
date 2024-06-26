import { useEffect, useState } from "react";
import CountryList from "./components/CountryList";
import { Countries, Country } from "./api/country.type";
import countryApi from "./api/country.api";
import {
  filterUnselectedCountries,
  isCountrySelected,
} from "./utils/countryUtils";

function App() {
  const [countries, setCountries] = useState<Countries>([]);
  const [error, setError] = useState<string | null>(null);

  const [selectedCountries, setSelectedCountries] = useState<Countries>([]);

  useEffect(() => {
    (async (): Promise<void> => {
      try {
        const data = await countryApi.getCountries();
        setCountries(data);
      } catch (e) {
        setError("실패!");
      }
    })();
  }, []);

  const unselectedCountries = filterUnselectedCountries(
    countries,
    selectedCountries
  );

  const handleToggleCountrySelection = (country: Country) => {
    setSelectedCountries((prevSelected) => {
      if (isCountrySelected(prevSelected, country)) {
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
      <>
        <CountryList
          countries={selectedCountries}
          onClick={handleToggleCountrySelection}
          isSelected={true}
        />
        <CountryList
          countries={unselectedCountries}
          onClick={handleToggleCountrySelection}
          isSelected={false}
        />
      </>
    );
}

export default App;
