import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { ICharacter } from '../models/ICharacter';
import { IPagination } from '../models/IPagination';

export const characterAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.jikan.moe/v4' }),
  endpoints: (build) => ({
    fetchAllCharacters: build.query<
      {
        data: ICharacter[];
        pagination: IPagination;
      },
      { limit: number; page: number; searchText: string }
    >({
      query: (props: { limit: number; page: number; searchText: string }) => ({
        url: '/characters',
        params: {
          limit: props.limit,
          page: props.page,
          q: props.searchText,
        },
      }),
    }),
    fetchCharacterDetails: build.query<
      {
        data: ICharacter;
      },
      { id: string }
    >({
      query: (props: { id: string }) => ({
        url: `/characters/${props.id}`,
      }),
    }),
  }),
});
