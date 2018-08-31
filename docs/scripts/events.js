function onBtnGoClicked () {
    var teamSize = parseInt($("#team-size option:selected").val());
    if (isNaN(teamSize)) {
        alert("Error: Please select a team size.");
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