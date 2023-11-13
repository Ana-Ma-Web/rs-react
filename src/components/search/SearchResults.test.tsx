import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { ItemsDataContext } from '../../pages/MainPage';
import { MemoryRouter } from 'react-router-dom';
import SearchResults from './SearchResults';
import { SearchItem } from '../../types';

const itemsData: SearchItem[] = [
  {
    mal_id: '1',
    name: '1',
    about: '',
    url: '',
    images: {
      jpg: {
        image_url: '',
      },
      webp: {
        image_url: '',
        small_image_url: '',
      },
    },
  },
  {
    mal_id: '2',
    name: '1',
    about: '',
    url: '',
    images: {
      jpg: {
        image_url: '',
      },
      webp: {
        image_url: '',
        small_image_url: '',
      },
    },
  },
  {
    mal_id: '3',
    name: '1',
    about: '',
    url: '',
    images: {
      jpg: {
        image_url: '',
      },
      webp: {
        image_url: '',
        small_image_url: '',
      },
    },
  },
];

test('SearchResults renders the specified number of cards', async () => {
  render(
    <MemoryRouter>
      <ItemsDataContext.Provider value={itemsData}>
        <SearchResults />
      </ItemsDataContext.Provider>
    </MemoryRouter>
  );
  const cards = await screen.findAllByTestId('card');
  expect(cards.length).toBe(3);
  afterEach(cleanup);
});

test('SearchResults message about no cards', async () => {
  render(
    <MemoryRouter>
      <ItemsDataContext.Provider value={[]}>
        <SearchResults />
      </ItemsDataContext.Provider>
    </MemoryRouter>
  );
  expect(screen.queryByTestId('card')).toBeNull();
  const message = screen.queryByText(/not found/i);
  expect(message).toBeInTheDocument();
  afterEach(cleanup);
});
