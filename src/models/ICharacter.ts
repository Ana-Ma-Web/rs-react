import { Images } from '../types';

export interface ICharacter {
  mal_id: string;
  name: string;
  about: string | null;
  url: string;
  images: Images;
  favorites?: number;
  name_kanji?: string | null;
  nicknames?: string[];
}
