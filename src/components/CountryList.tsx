import CountryCard from "./CountryCard";
import { Countries, CountryBaseProps } from "../types/country.type";

interface CountryListProps extends CountryBaseProps {
  countries: Countries;
}
export default function CountryList({
  countries,
  onClick,
  isSelected,
}: CountryListProps) {
  return (
    <section className="flex flex-col items-center p-8">
      <h2 className="text-2xl font-bold mb-4">
        {isSelected ? "SelectedList" : "CountryList"}
      </h2>
      {countries.length === 0 && (
        <p className="w-full text-center">선택된 국가가 없습니다.</p>
      )}
      <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {countries?.map((country, idx) => (
          <CountryCard
            onClick={onClick}
            key={idx}
            country={country}
            isSelected={isSelected}
          />
        ))}
      </ul>
    </section>
  );
}
