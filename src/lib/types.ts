export type Product = {
  name: string;
  description: string;
  image: string;
  hint: string;
  specs: {
    name: string;
    value: string;
  }[];
};
