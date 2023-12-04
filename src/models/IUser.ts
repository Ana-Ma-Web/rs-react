export interface IUser {
  age: number;
  country: string;
  email: string;
  gender: 'male' | 'female' | 'cat' | 'other';
  imgBase64: string;
  name: string;
  password: string;
  tcAccept: boolean;
}
