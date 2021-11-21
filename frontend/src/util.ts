import currency from 'currency.js';

export const getSummonerIconURL = (iconID?: number) => {
    if (iconID === undefined) return undefined;
    return `http://ddragon.leagueoflegends.com/cdn/11.20.1/img/profileicon/${iconID}.png`;
}

export const getChampionIconURL = (championName?: string) => {
    if (championName === undefined) return undefined;
    return `http://ddragon.leagueoflegends.com/cdn/11.22.1/img/champion/${championName}.png`;
}

export const calculateWinRate = (wins: number=0, losses: number=0, asPercent?: boolean) => {
    const winRate = currency(wins).divide(wins + losses);
    return asPercent ? `${winRate.intValue || 0}%` : (winRate.value || 0).toFixed(2);
}
