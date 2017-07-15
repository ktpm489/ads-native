import {User} from './models';
import {Coach, Player, Status, Team} from './models/team';
import {Round, Match, MatchResult, MatchScorers, Scorer} from './models/league';
import {LeagueTable, ScorerTable} from './models/league/tables';

const schemas = [{
    path: 'app.realm',
    schema: [
        User,
        Coach,
        Player,
        Status,
        Team,
        Round,
        Match,
        MatchResult,
        MatchScorers,
        Scorer,
        LeagueTable,
        ScorerTable
    ],
    schemaVersion: 0
}];


export {schemas};