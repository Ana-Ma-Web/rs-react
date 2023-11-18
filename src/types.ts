export interface Images {
  jpg: {
    image_url: string;
  };
  webp: {
    image_url: string;
    small_image_url: string;
  };
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

export interface PathData {
  page: number;
  limit: number;
  search: string;
}
