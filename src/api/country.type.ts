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
