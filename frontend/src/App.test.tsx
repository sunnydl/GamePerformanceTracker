import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './pages/Landing/Home';

test('renders learn react link', () => {
  render(<Home />);
  const homeComponent = screen.getByTestId('home');
  expect(homeComponent).toBeInTheDocument();
  expect(homeComponent).toHaveTextContent('Landing page');
});
