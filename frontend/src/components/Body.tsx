import React, { useEffect, Suspense, lazy } from 'react';

import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchUserData } from '../redux/slices/user';
import { fetchChartData } from '../redux/slices/chart';
import { fetchMatchesData } from '../redux/slices/matches';
import { setOverallLoading } from '../redux/slices/loading';
import { compareIgnoreCase } from '../util';

import {
    useLocation,
    Switch,
    Route,
    Redirect,
    useHistory,
} from 'react-router-dom';

import { styled } from '@mui/material/styles';
import PageLoading from './PageLoading';
import { FetchOperations } from '../enums';

const Home = lazy(() => import('../pages/Landing'));
const Overview = lazy(() => import('../pages/Overview'));
const MatchHistory = lazy(() => import('../pages/MatchHistory'));
const Leaderboard = lazy(() => import('../pages/Leaderboard'));
const UserNotFound = lazy(() => import('../pages/UserNotFound'));
const Search = lazy(() => import('../pages/Search'));

const Container = styled('div')(({ theme }) => ({
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(25),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
}));

function Body() {
    const location = useLocation();
    const loading = useAppSelector((state) => state.loading.overall);
    const {
        summonerFound,
        summonerName = '',
        region = '',
    } = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();
    const history = useHistory();
    useEffect(() => {
        const search = location.search;
        const params = new URLSearchParams(search);

        const isDifferentSummoner = !(
            compareIgnoreCase(summonerName, params.get('summonerName') ?? '') &&
            compareIgnoreCase(region, params.get('region') ?? '')
        );
        if (isDifferentSummoner) {
            dispatch(setOverallLoading(true));
            Promise.all([
                dispatch(fetchUserData(search, history)),
                dispatch(fetchChartData(search, 5)),
                dispatch(fetchMatchesData(search, 10, FetchOperations.FETCH)),
            ]).then(() => {
                console.log('finished loading data');
                dispatch(setOverallLoading(false));
            });
        }
    }, [dispatch, region, summonerName, location.search, history]);

    return (
        <Container>
            {loading ? (
                <PageLoading />
            ) : (
                <Suspense fallback={<PageLoading />}>
                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                        <Route exact path='/overview'>
                            {summonerFound ? <Overview /> : <Search />}
                        </Route>
                        <Route exact path='/match-history'>
                            {summonerFound ? <MatchHistory /> : <Search />}
                        </Route>
                        <Route exact path='/leaderboard'>
                            <Leaderboard />
                        </Route>
                        <Route exact path='/usernotfound'>
                            <UserNotFound />
                        </Route>
                        <Redirect to='/' />
                    </Switch>
                </Suspense>
            )}
        </Container>
    );
}

export default Body;
