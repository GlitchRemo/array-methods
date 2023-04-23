const updateScore = function(scoreboard, ball) {
  const scoreboardEntries = {
    4: "fours",
    6: "sixes",
    "W": "wickets",
    "WB": "extras",
    "NB": "extras"
  };

  const runsContribution = {};
  runsContribution[ball] = ball;
  runsContribution["NB"] =  1;
  runsContribution["WB"] =  1;
  runsContribution["W"] =  0;

  const scoreboardEntry = scoreboardEntries[ball];
  scoreboard[scoreboardEntry]++;
  scoreboard.runs += runsContribution[ball];
  delete scoreboard.undefined;

  return scoreboard;
}

const summarize = function(overs) {
  const scoreboard = {
    runs: 0, 
    wickets: 0,
    fours: 0,
    sixes: 0,
    extras: 0
  };
  const deliveries = overs.flat();
  return deliveries.reduce(updateScore, scoreboard);
}

