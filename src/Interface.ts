export interface UserCardItem {
  name: string;
  age: number;
  image: string;
  marital_stat: "Married" | "Single";
  numb_of_kids: number;
  contactInfo: {
    address: string;
    city: string;
    country: string;
  };
}
