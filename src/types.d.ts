export interface IUser {
  id: string;
  name: string;
  email: string;
  urlImage: string;
  price: number;
}

export interface IUserMutation {
  name: string;
  email: string;
  urlImage: string;
  price: number;
}