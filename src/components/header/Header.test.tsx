import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

it('should have anime', () => {
  render(<Header />);
  const message = screen.queryByText(/anime/i);
  expect(message).toBeVisible();
});
