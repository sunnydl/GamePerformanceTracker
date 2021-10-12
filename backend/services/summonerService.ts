import config from "../config/config"
import SummonerInfo from "../interfaces/ISummonerInfo";

export const getSummonerByName = async(summonerName: String): Promise<any> => {
    try {
        const summoner: SummonerInfo = await config.axios.get(`/lol/summoner/v4/summoners/by-name/${summonerName}`);
        // ...
    } catch (err: any) {
        console.log(err);
    }
}

