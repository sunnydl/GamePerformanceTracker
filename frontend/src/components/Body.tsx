import React, { useState, useEffect, Suspense, lazy } from 'react';

import { useAppDispatch, useAppSelector} from '../redux/hooks';
import { fetchUserData } from '../redux/slices/user';
import { fetchChartData } from '../redux/slices/chart';
import { fetchMatchesData } from '../redux/slices/matches';
import { compareIgnoreCase } from '../util';

import { useLocation, Switch, Route, Redirect, useHistory } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import PageLoading from './PageLoading';

const Home = lazy(() => import('../pages/Landing/Home'));
const Overview = lazy(() => import('../pages/Overview/Overview'));
const MatchHistory = lazy(() => import('../pages/MatchHistory/MatchHistory'));
const Leaderboard = lazy(() => import('../pages/Leaderboard/Leaderboard'));
const UserNotFound = lazy(() => import('../pages/UserNotFound/UserNotFound'));

const Container = styled('div')(() => ({
    padding: '8vh 2vw 8vh 2vw',
}))

function Body() {
    const location = useLocation();
    const [loading, setLoading] = useState(true);
    const { summonerName='', region='' } = useAppSelector((state) => state.user);
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
            setLoading(true);
            Promise.all([
                dispatch(fetchUserData(search, history)),
                dispatch(fetchChartData(search, 5)),
                dispatch(fetchMatchesData(search, 10)),
            ])
            .then(() => {
                console.log('finished loading data');
                setLoading(false);
            });
        }   
    }, [dispatch, region, summonerName, location.search, history]);

    return (
        <Container>
            {loading ? (
                <PageLoading />
            ) : (
                <Suspense fallback={<PageLoading/>}>
                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                        <Route exact path='/overview'>
                            <Overview />
                        </Route>
                        <Route exact path='/usernotfound'>
                            <UserNotFound />
                        </Route>
                        <Route exact path='/match-history'>
                            <MatchHistory />
                        </Route>
                        <Route exact path='/leaderboard'>
                            <Leaderboard/>
                        </Route>
                        <Redirect to='/' />
                    </Switch>
                </Suspense>
            )}
        </Container>
    );
}

export default Body;
