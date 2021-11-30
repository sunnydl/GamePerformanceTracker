import BanDto from './IBanDto';
import ObjectivesDto from './IObjectivesDto';

export default interface TeamDto {
    bans: Array<BanDto>;
    objectives: ObjectivesDto;
    teamId: number;
    win: boolean;
}
