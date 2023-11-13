import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import Card from './Card';
import { MemoryRouter } from 'react-router-dom';

test('check card data', () => {
  render(
    <MemoryRouter>
      <Card
        key={'1'}
        name={'Spike Spiegel'}
        img={'https://cdn.myanimelist.net/images/characters/11/516853.jpg'}
        id={'1'}
      />
    </MemoryRouter>
  );
  const name = screen.getByTestId('card-name');
  expect(name.textContent).toMatch('Spike Spiegel');
  afterEach(cleanup);
});
