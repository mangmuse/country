import clsx from "clsx";
import { Country } from "../api/country.type";

interface CountryCardProps {
  country: Country;
  onClick: (country: Country) => void;
  isSelected: boolean;
}

export default function CountryCard({
  country,
  onClick,
  isSelected,
}: CountryCardProps) {
  return (
    <div
      onClick={() => onClick(country)}
      className={clsx("mx-auto p-6 ", {
        "border border-green-500 ": isSelected,
      })}
    >
      <div>{country.capital}</div>
      <img src={country.flags.png}></img>
      <div>{country.name.common}</div>
    </div>
  );
}
