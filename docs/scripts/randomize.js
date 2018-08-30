// get random index from array length
function getRandomIndex (len) {
    return Math.floor(Math.random() * len);
};

// randomize the list
function randomize (rawValues) {
    var values = rawValues.slice();
    var result = [];

    // splice out random elements until there are none left
    while (values.length > 0) {
        var randomIndex = getRandomIndex(values.length);
        result.push(values.splice(randomIndex, 1)[0]);
    }

    return result;
};

// split list of players into teams of size teamSize
function splitTeams (players, teamSize) {
    var playersCopy = players.slice();
    var teams = [];

    // take 2 at a time
    while (playersCopy.length >= teamSize) {
        teams.push(playersCopy.splice(0, teamSize));
    }

    // haha you don't get to play, idiot(s)
    if (playersCopy.length > 0) {
        teams.push(playersCopy);
    }
    return teams;
};
