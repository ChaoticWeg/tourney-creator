function onBtnGoClicked () {
    // check team size is selected
    var teamSize = parseInt($("#team-size option:selected").val());
    if (isNaN(teamSize)) {
        alert("Error: Please select a team size.");
        return;
    }

    // check players list is defined
    var playersInput = $.trim($("#input").val());
    if (!playersInput) {
        alert("Error: Please give a list of players, separated by Enter");
        return;
    }
    
    var randoms = randomize($("#input").val().split("\n"));
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
