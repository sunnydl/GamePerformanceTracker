import React from 'react';
import { render, screen } from '@testing-library/react';
import UserNotFound from './UserNotFound';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { store } from '../../redux/store';

test('renders learn react link', () => {
    const history = createMemoryHistory();
    render(
        <Provider store={store}>
            <Router history={history}>
                <UserNotFound />
            </Router>
        </Provider>
    );
  const errorComponent = screen.getByTestId('UserNotFound');
  expect(errorComponent).toBeInTheDocument();

  // Test topsection
  const topComponent = screen.getByTestId('topSection');
  expect(topComponent).toBeInTheDocument();
  expect(topComponent).toHaveTextContent('Oh no');

  // Test Buttons
  const linkComponent = screen.getByTestId('ExtraLink');
  expect(linkComponent).toBeInTheDocument();
  expect(screen.getByTestId('extralink-button')).toBeInTheDocument();

  // Test not found
  const notFoundComponent = screen.getByTestId('NotFound');
  expect(notFoundComponent).toBeInTheDocument();
});