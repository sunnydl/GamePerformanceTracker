import PerkStatsDto from './IPerkStatsDto';
import PerkStyleDto from './IPerkStyleDto';

export default interface PerksDto {
    statPerks: PerkStatsDto;
    styles: Array<PerkStyleDto>;
}
