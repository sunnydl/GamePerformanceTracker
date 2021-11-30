import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { render, screen } from '@testing-library/react';
import Home from '.';

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>
  );

  const homeComponent = screen.getByTestId('home');
  expect(homeComponent).toBeInTheDocument();

  // Test Title
  expect(homeComponent).toHaveTextContent('Game Performance Tracker');

  // Test search bar
  const searchBarComponent = screen.getByTestId('Search');
  expect(searchBarComponent).toBeInTheDocument();

  // Test Headers
  expect(homeComponent).toHaveTextContent('Track Performance');
  expect(homeComponent).toHaveTextContent('Analyze Matches');
  expect(homeComponent).toHaveTextContent('Leaderboarding');
  expect(homeComponent).toHaveTextContent('Evaluate Champions');

  // TODO (jvento): evaluate whether there's a way to test that images
  // are properly loaded and visible. Being in the document is different
  // than the images being properly rendered.
});
