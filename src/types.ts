export interface Images {
  jpg: {
    image_url: string;
  };
  webp: {
    image_url: string;
    small_image_url: string;
  };
}
export interface SearchItem {
  mal_id: string;
  name: string;
  about: string | null;
  url: string;
  images: Images;
}

export interface PaginationData {
  current_page: number;
  has_next_page: boolean;
  items: {
    count: number;
    per_page: number;
    total: number;
  };
  last_visible_page: number;
}

export interface ItemDetails {
  about: string | null;
  name: string;
  favorites: number;
  images: Images;
  mal_id: string;
  name_kanji: string | null;
}

export interface PathData {
  page: number;
  limit: number;
  search: string;
}
