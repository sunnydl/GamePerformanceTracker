import React, { Suspense, lazy } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import PageLoading from './PageLoading';

const Home = lazy(() => import('../pages/Landing/Home'));
const Overview = lazy(() => import('../pages/Overview/Overview'));
const MatchHistory = lazy(() => import('../pages/MatchHistory/MatchHistory'));

function Body() {

    const Container = styled('div')(() => ({
        padding: '8vh 2vw 8vh 2vw',
    }))

    return (
        <Container>
            <Suspense fallback={<PageLoading/>}>
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route exact path='/overview'>
                        <Overview />
                    </Route>
                    <Route exact path='/match-history'>
                        <MatchHistory />
                    </Route>
                    <Redirect to='/' />
                </Switch>
            </Suspense>
        </Container>
    );
}

export default Body;
