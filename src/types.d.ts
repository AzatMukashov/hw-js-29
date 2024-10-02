export interface IUser {
  id: string;
  name: string;
  email: string;
  urlImage: string;
  isActive: boolean;
}

export interface IUserMutation {
  name: string;
  email: string;
  urlImage: string;
  isActive: boolean;
}