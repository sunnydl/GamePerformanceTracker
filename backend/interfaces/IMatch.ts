export default interface Match {
    gameCreation: Number;
    gameDuration: Number;
    matchId: Number;
    participants: [Participant];
    teams: [Team];
}

interface Participant {
    teamId: Number;
    championName: String;
    champLevel: Number;
}

interface Team {
    teamId: Number;
    win: Boolean;
}
