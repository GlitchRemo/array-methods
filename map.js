const doubleUp = function(doubled, number) {
  return doubled.concat(number * 2);
}

a = [1, 2, 3, 4, 5];
console.log(a.reduce(doubleUp, []));
