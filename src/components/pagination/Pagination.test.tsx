import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import PaginationLimitBtn from './PaginationLimitBtn';

test('pagination', () => {
  render(<PaginationLimitBtn limit={'15'} />);
  const btn = screen.queryByTestId(/pag-btn/i);
  expect(btn).toBeInTheDocument();
  afterEach(cleanup);
});
