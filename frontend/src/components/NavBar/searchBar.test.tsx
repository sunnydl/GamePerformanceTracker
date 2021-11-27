import { render, screen } from '@testing-library/react';
import SummonerSearchBar from './SummonerSearchBar';

test("renders summoner search bar", () => {
    render(<SummonerSearchBar></SummonerSearchBar>)
})