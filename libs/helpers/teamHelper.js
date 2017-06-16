const teamHelper = {
    averageSkill(team){
        let avg = 0;
        if (team.roster && team.roster.length) {
            let tot = 0;
            team.roster.forEach(p => tot += p.skill);
            avg = tot / team.roster.length;
        }
        return avg;
    },
    averageAge(team){
        let avg = 0;
        if (team.roster && team.roster.length) {
            let tot = 0;
            team.roster.forEach(p => tot += p.age);
            avg = tot / team.roster.length;
        }
        return avg;
    },
    updateStatus(team){
        let morale = 0;
        if (team.roster && team.roster.length) {
            let tot = 0;
            team.roster.forEach(p => tot += p.status.morale);
            morale = tot / team.roster.length;
        }
        return {
            ...team,
            status: {
                morale
            }
        }
    }
};

export {teamHelper};