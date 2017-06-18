const leagueHelper = {
    parseRoundResults(results, teamTable){
        results.forEach(r => {
            if (!r.isDraw) {
                const winnerRow = teamTable[r.winner];
                winnerRow.played += 1;
                winnerRow.points += 3;
                winnerRow.won += 1;
                winnerRow.goalsScored += Math.max(r.homeGoal, r.awayGoal);
                winnerRow.goalsConceded += Math.min(r.homeGoal, r.awayGoal);
                teamTable[r.winner] = winnerRow;

                const loserRow = teamTable[r.loser];
                loserRow.played += 1;
                loserRow.lost += 1;
                loserRow.goalsScored += Math.min(r.homeGoal, r.awayGoal);
                loserRow.goalsConceded += Math.max(r.homeGoal, r.awayGoal);
                teamTable[r.loser] = loserRow;
            } else {
                [r.winner, r.loser].forEach(team => {
                    const row = teamTable[team];
                    row.played += 1;
                    row.points += 1;
                    row.draw += 1;
                    row.goalsScored += row.goalsScored + r.homeGoal;
                    row.goalsConceded += r.homeGoal;
                    teamTable[team] = row;
                });
            }
        });

        return teamTable;
    },
    parseScorers(results, oldScorers){
        results.forEach(r => {
            const {home, away, scorers} = r;
            scorers.home.forEach(s => {
                const playerKey = `${s.name}${s.surname}`;
                if (oldScorers[playerKey]) {
                    oldScorers[playerKey].goals += 1;
                    oldScorers[playerKey].team = home;
                } else {
                    oldScorers[playerKey] = {
                        goals: 1,
                        team: home,
                        player: s
                    }
                }
            });

            scorers.away.forEach(s => {
                const playerKey = `${s.name}${s.surname}`;
                if (oldScorers[playerKey]) {
                    oldScorers[playerKey].goals += 1;
                    oldScorers[playerKey].team = away;
                } else {
                    oldScorers[playerKey] = {
                        goals: 1,
                        team: away,
                        player: s
                    }
                }
            });
        });
        return oldScorers;
    }
};

export {leagueHelper};