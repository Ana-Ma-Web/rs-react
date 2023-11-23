export interface IPagination {
  current_page: number;
  has_next_page: boolean;
  items: {
    count: number;
    per_page: number;
    total: number;
  };
  last_visible_page: number;
}
