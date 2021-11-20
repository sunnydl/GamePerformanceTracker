import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchUserData } from '../redux/slices/user';
import { fetchChartData } from '../redux/slices/chart';
import { fetchMatchesData } from '../redux/slices/matches';

import { useLocation, Switch, Route, Redirect } from 'react-router-dom';

import Home from '../pages/Landing/Home';
import Overview from '../pages/Overview/Overview';
import MatchHistory from '../pages/MatchHistory/MatchHistory';

import { styled } from '@mui/material/styles';

const Container = styled('div')(() => ({
    padding: '8vh 2vw 8vh 2vw',
}))

function Body() {
    const prevSearch = useAppSelector((state) => {
        const { summonerName, region } = state.user;
        return `?summonerName=${summonerName}&region=${region}`;
    });
    const location = useLocation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        const search = location.search;
        
        if (search !== prevSearch) {
            dispatch(fetchUserData(search));
            dispatch(fetchChartData(search, 5));
            dispatch(fetchMatchesData(search, 10));
        }   
    }, [dispatch, prevSearch, location.search]);

    return (
        <Container>
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
        </Container>
    );
}

export default Body;
