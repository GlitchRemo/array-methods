const incOrderComparator = function(a, b) {
  if (a === b) return 0;
  return a > b ? 1 : -1;
}

const decOrderComparator = function(a, b) {
  if (a === b) return 0;
  return b > a ? 1 : -1;
}

a = [1, 10, -20, 100, 90]

console.log(a.slice().sort(incOrderComparator));
console.log(a.slice().sort(decOrderComparator));
