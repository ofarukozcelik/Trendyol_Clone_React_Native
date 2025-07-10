interface Name {
  firstname: string;
  lastname: string;
}

interface Geolocation {
  lat: string;
  long: string;
}

interface Address {
  street: string;
  city: string;
  zipcode: string;
  number: number;
  geolocation: Geolocation;
}

interface User {
  id: number;
  name: Name;
  email: string;
  address: Address;
  phone: string;
}

interface UserState {
  user: User | null;
  pending: boolean;
  error: any;
}

export type {UserState};
