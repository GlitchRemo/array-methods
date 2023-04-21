const getOrDefault = function(number, defaultValue) {
  return number || defaultValue;
}

const isFour = function(run) {
  return run === 4;
}

const isSix = function(run) {
  return run === 6;
}

const isWicket = function(run) {
  return run === "W";
}

const isExtras = function(run) {
  return run === "WD" || run === "NB";
}

const isDigit = function(number) {
  return number >= 0 && number < 10;
}

const sum = function(a, b) {
  return a + b; 
}

const generateSummary = function(summary, over) {
  const four = over.filter(isFour);
  const six = over.filter(isSix);
  const wicket = over.filter(isWicket);
  const extra = over.filter(isExtras);
  const runs = over.filter(isDigit).reduce(sum, 0);

  summary.fours = getOrDefault(summary.fours, 0) + four.length;
  summary.sixes = getOrDefault(summary.sixes, 0) + six.length;
  summary.wickets = getOrDefault(summary.wickets, 0) + wicket.length;
  summary.extras = getOrDefault(summary.extras, 0) + extra.length;
  summary.runs = getOrDefault(summary.runs, 0) + runs + summary.extras;

  return summary;
}

const summarize = function(innings) {
  return innings.reduce(generateSummary, {});
}

