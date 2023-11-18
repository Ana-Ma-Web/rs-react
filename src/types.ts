export interface Images {
  jpg: {
    image_url: string;
  };
  webp: {
    image_url: string;
    small_image_url: string;
  };
}

export interface PathData {
  page: number;
  limit: number;
  search: string;
}
