export interface IUser {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'editor' | 'admin';
  isActive: boolean;
}

export interface IUserMutation {
  name: string;
  email: string;
  role: 'user' | 'editor' | 'admin';
  isActive: boolean;
}
