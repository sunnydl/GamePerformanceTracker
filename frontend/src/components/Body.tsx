import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../pages/Home';
import Overview from '../pages/Overview/Overview';

import { Container } from '@mui/material';

function Body() {
    return (
        <Container sx={{
            width: '100%',
            paddingTop: '1rem',
            paddingBottom: '4.5rem',
        }}>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/overview'>
                    <Overview />
                </Route>
                <Redirect to='/' />
            </Switch>
        </Container>
    );
}

export default Body;
