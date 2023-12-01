export interface IUser {
  name: string;
  age: number;
  email: string;
  password: string;
  gender: 'male' | 'female' | 'cat' | 'other';
  tcAccept: boolean;
  imgBase64: string;
  country: string;
}
