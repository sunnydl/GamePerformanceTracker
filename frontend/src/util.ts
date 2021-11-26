import currency from 'currency.js';
import { ChartState, KDA } from './interfaces';

/**
 * Returns a URL for the given summoner's icon id.
 * 
 * @param {number} [iconID] The icon id.
 * @returns {string} A string representation of the summoner's icon URL.
 */
export const getSummonerIconURL = (iconID?: number) => {
    if (iconID === undefined) return undefined;
    return `http://ddragon.leagueoflegends.com/cdn/11.20.1/img/profileicon/${iconID}.png`;
}

/**
 * Returns a URL for the given champion's icon.
 * 
 * @param {string} [championName] The champion's name (case sensitive).
 * @returns {string} A string representation of the champion's icon URL.
 */
export const getChampionIconURL = (championName?: string) => {
    if (championName === undefined) return undefined;
    return `http://ddragon.leagueoflegends.com/cdn/11.22.1/img/champion/${championName}.png`;
}

/**
 * Returns a win rate value based on the given wins and losses values.
 * 
 * @param {number} [wins=0] The number of matches won.
 * @param {number} [losses=0] The number of matches lost.
 * @returns {currency} A currency object storing the calculated win rate values.
 */
export const calculateWinRate = (wins: number=0, losses: number=0) => {
    if (wins + losses === 0) return currency(0);
    return currency(wins).divide(wins + losses);
}

/**
 * Returns a string representation of the win rate value based on the
 * given wins and losses values. The format of the string can be changed
 * based on the third parameter.
 * 
 * @param {number} [wins=0] The number of matches won.
 * @param {number} [losses=0] The number of matches lost.
 * @param {boolean} [asPercent=false] Determines if the win rate value will return in a percentage format.
 * @returns {string} A string representation of the win rate value.
 */
export const displayWinRate = (wins: number=0, losses: number=0, asPercent?: boolean) => {
    const winRate = calculateWinRate(wins, losses);
    return asPercent ? `${winRate.intValue}%` : (winRate.value).toFixed(2);
}

/**
 * Returns the average kills, deaths, and assists in the range of 5 games
 * 
 * @param {Array<ChartState>} [chartData] data of recent 5 games for chart
 * @returns {KDA} Average kills, deaths, and assists in 5 games
 */
export const computeAvgKDA = (chartData: Array<ChartState>) => {
    let totalKills = 0;
    let totalDeaths = 0;
    let totalAssists = 0;
    for(const game of chartData) {
        totalKills += game.kills;
        totalDeaths += game.deaths;
        totalAssists += game.assists;
    }
    return { 
        kills: currency(totalKills).divide(5).value,
        deaths: currency(totalDeaths).divide(5).value,
        assists: currency(totalAssists).divide(5).value,
    } as KDA;
}
