import MetadataDto from "./IMetadataDto";
import InfoDto from "./IInfoDto";

export default interface MatchDto {
    metadataDto: MetadataDto;
    info: InfoDto;
}