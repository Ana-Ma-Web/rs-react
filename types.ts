import { ICharacter } from './models/ICharacter';
import { IPagination } from './models/IPagination';

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

export interface GetServerSidePropsParams {
  params: {
    id: string;
  };
  query: {
    limit: string;
    page: string;
    searchText: string;
  };
}

export interface DataProps {
  itemData: { data: ICharacter; status?: string };
  data: {
    pagination: IPagination;
    data: ICharacter[];
    status?: string;
  };
}
