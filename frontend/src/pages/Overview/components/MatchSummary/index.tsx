import React, { useEffect } from 'react'

import { useAppDispatch } from '../../../../redux/hooks'
import { useLocation } from 'react-router-dom';

import { fetchChartData } from '../../../../redux/slices/chart';

import MatchSummaryComponent from './MatchSummaryComponent'

export default function MatchSummary() {
    const location = useLocation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchChartData(location.search, 5));
    }, [dispatch, location.search])

    return (
        <MatchSummaryComponent/>
    )
}
