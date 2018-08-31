function onBtnGoClicked () {
    // check team size is selected
    var teamSize = parseInt($("#team-size option:selected").val());
    if (isNaN(teamSize)) {
        showNoTeamSizeSelectedError();
        return;
    }

    // check players list is defined
    var playersInput = $.trim($("#input").val());
    if (!playersInput) {
        showBlankPlayersListError();
        return;
    }

    var playersList = playersInput.split("\n");

    var sanitizedPlayersInput = []
    for (var i = 0; i < playersList.length; i++) {
        var thisPlayer = playersList[i].trim();
        if (thisPlayer !== "") {
            sanitizedPlayersInput.push(sanitizePlayerName(thisPlayer));
        }
    }
    
    var randoms = randomize(sanitizedPlayersInput);
    var teams   = splitTeams(randoms, teamSize);
    $("html").trigger("randomized", { teams: teams, players: randoms });
};

function onBtnClearClicked () {
    $("html").trigger("clear");
};

$(() => {
    $("#btn-go").click(onBtnGoClicked);
    $("#btn-clear").click(onBtnClearClicked);
});
