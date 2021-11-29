import React from 'react';
import { Provider } from 'react-redux';
 import { store } from '../../redux/store';
import { render, screen } from '@testing-library/react';
import Search from '.';

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <Search />
    </Provider>
  );
  
  const searchComponent = screen.getByTestId('search');
  expect(searchComponent).toBeInTheDocument();

  // Test Title
  expect(searchComponent).toHaveTextContent('Game Performance Tracker');
  
  // Test search bar
  const searchBarComponent = screen.getByTestId('Search');
  expect(searchBarComponent).toBeInTheDocument();
});
