import clsx from "clsx";
import { Country, CountryBaseProps } from "../types/country.type";

interface CountryCardProps extends CountryBaseProps {
  country: Country;
}

export default function CountryCard({
  country,
  onClick,
  isSelected,
}: CountryCardProps) {
  return (
    <div
      onClick={() => onClick(country)}
      className={clsx(
        "mx-auto p-6 rounded-xl shadow-md w-full cursor-pointer",
        {
          "border border-green-500 ": isSelected,
        }
      )}
    >
      <img className="w-28 mx-auto mb-4" src={country.flags.png}></img>
      <div className="flex flex-col gap-1">
        <span className="text-xl">{country.name.common}</span>
        <span>{country.capital}</span>
      </div>
    </div>
  );
}
