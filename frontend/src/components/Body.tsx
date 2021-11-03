import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../pages/Home';
import Overview from '../pages/Overview/Overview';

import { styled } from '@mui/material/styles';

function Body() {

    const Container = styled('div')(() => ({
        padding: '8vh 2vw 8vh 2vw'
    }))

    return (
        <Container>
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
