const randomizer = {
    int(low, high){
        return Math.round(Math.random() * (high - low) + low);
    },
    chance(percentage){
        return this.int(0, 100) < percentage;
    }
};

export {randomizer}