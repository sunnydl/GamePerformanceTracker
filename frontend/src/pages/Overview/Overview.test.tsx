import React from 'react';
import { render, screen } from '@testing-library/react';
import Overview from './Overview';
import { store } from '../../redux/store';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

test('overview', () => {
    const history = createMemoryHistory();
    render(
        <Provider store={store}>
            <Router history={history}>
                <Overview />
            </Router>
        </Provider>
    );
  const homeComponent = screen.getByTestId('overview');
  expect(homeComponent).toBeInTheDocument();

  // Test user profile
  const userProfile = screen.getByTestId('user-profile');
  expect(userProfile).toBeInTheDocument();

  // Test circle data charts
  const circleCharts = screen.getByTestId('circle-charts');
  expect(circleCharts).toBeInTheDocument();

  // Test user favorite champs
  const userChamps = screen.getByTestId('user-champs');
  expect(userChamps).toBeInTheDocument();

  // Test match chart
  const matchChart = screen.getByTestId('match-chart');
  expect(matchChart).toBeInTheDocument();
});
