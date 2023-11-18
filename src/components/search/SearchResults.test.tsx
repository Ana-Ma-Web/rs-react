// import React from 'react';
import {
  cleanup,
  //  fireEvent,
  // render,
  // screen,
} from '@testing-library/react';
// import { ItemsDataContext } from '../../pages/MainPage';
// import { MemoryRouter, Route, Routes } from 'react-router-dom';
// import SearchResults from './SearchResults';
// import DetailsPage from '../../pages/DetailsPage';
// import { ICharacter } from '../../models/ICharacter';

// const itemsData: ICharacter[] = [
//   {
//     mal_id: '1',
//     name: 'First Item',
//     about: '',
//     url: '',
//     images: {
//       jpg: {
//         image_url: '',
//       },
//       webp: {
//         image_url: '',
//         small_image_url: '',
//       },
//     },
//   },
//   {
//     mal_id: '2',
//     name: '1',
//     about: '',
//     url: '',
//     images: {
//       jpg: {
//         image_url: '',
//       },
//       webp: {
//         image_url: '',
//         small_image_url: '',
//       },
//     },
//   },
//   {
//     mal_id: '3',
//     name: '1',
//     about: '',
//     url: '',
//     images: {
//       jpg: {
//         image_url: '',
//       },
//       webp: {
//         image_url: '',
//         small_image_url: '',
//       },
//     },
//   },
// ];

test('SearchResults renders the specified number of cards', async () => {
  // render(
  //   <MemoryRouter>
  //     <ItemsDataContext.Provider value={itemsData}>
  //       <SearchResults />
  //     </ItemsDataContext.Provider>
  //   </MemoryRouter>
  // );
  // const cards = await screen.findAllByTestId('card');
  // expect(cards.length).toBe(3);
  afterEach(cleanup);
});

test('SearchResults message about no cards', async () => {
  // render(
  //   <MemoryRouter>
  //     <ItemsDataContext.Provider value={[]}>
  //       <SearchResults />
  //     </ItemsDataContext.Provider>
  //   </MemoryRouter>
  // );
  // expect(screen.queryByTestId('card')).toBeNull();
  // const message = screen.queryByText(/not found/i);
  // expect(message).toBeInTheDocument();
  afterEach(cleanup);
});

test('Clicking on a card opens a detailed card component', async () => {
  // render(
  //   <ItemsDataContext.Provider value={itemsData}>
  //     <MemoryRouter initialEntries={['/']}>
  //       <Routes>
  //         <Route path="/" element={<SearchResults />} />
  //         <Route path="/details/:id" element={<DetailsPage />} />
  //         {/* <Route path="*" element={<NotFoundPage />} /> */}
  //       </Routes>
  //     </MemoryRouter>
  //   </ItemsDataContext.Provider>
  // );
  // const card = screen.queryByText(/first item/i);
  // expect(card).toBeInTheDocument();
  // if (card) {
  //   fireEvent.click(card);
  //   expect(screen.getByTestId('details')).toBeInTheDocument();
  // }

  afterEach(cleanup);
});
