export type Country = {
  name: {
    common: string;
    official: string;
  };
  capital: string[];
  flags: {
    png: string;
    svg: string;
  };
};

export type Countries = Country[];

export interface CountryBaseProps {
  onClick: (country: Country) => void;
  isSelected: boolean;
}
