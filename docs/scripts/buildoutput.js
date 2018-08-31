// generate team name based on size and number of existing teams
function getTeamName (size) {
    var teamSize = parseInt($("#team-size option:selected").val());
    if (isNaN(teamSize)) return undefined;

    if (size < teamSize) return "Outcasts";
    return "Team " + ($("#teams-output").children().length + 1);
};

// remove all team cards
function clearTeamCards () {
    $("#teams-output").empty();
    $("#how-to").show();
};

// build card for team
function buildTeamCard (team) {
    var card = '<div class="card"></div>';

    var teamName = getTeamName(team.length);

    card = $(card).prepend('<div class="card-header text-center">' + teamName + "</div>");

    var cardBody = '<div class="card-body py-3"></div>';
    var playersList = '<ul class="team-players"></ul>';

    for (var i in team) {
        playersList = $(playersList).append('<li>' + team[i] + '</li>');
    }

    cardBody = $(cardBody).append(playersList);

    card = $(card).append(cardBody);

    if (teamName === "Outcasts") {
        card = $(card).addClass("text-white bg-danger");
        $(card).children().each(c => { $(c).addClass("text-white bg-danger"); });
    }

    var cardContainer = $('<div class="col-xs-12 col-sm-6 col-md-3 my-3"></div>').append(card);
    return cardContainer;
};

// add team card to output
function addTeamCard (card) {
    $("#how-to").hide();
    $("#teams-output").append(card);
};

// register randomize event listener
$("html").on("randomized", (_, data) => {
    clearTeamCards();

    var teams = data['teams'];
    for (var team_i in teams) {
        var thisTeam = buildTeamCard(teams[team_i]);
        addTeamCard(thisTeam);
    }
});

// register clear event listener
$("html").on("clear", () => {
    clearTeamCards();
});
