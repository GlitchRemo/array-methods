const isEven = function(evens, number) {
  return number % 2 === 0 ? evens.concat(number) : evens;
}

a = [2, 4, 5, 6, 1, 8];
console.log(a.reduce(isEven, []));
