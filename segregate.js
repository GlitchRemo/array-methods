const isEven = function(number) {
  return number % 2 === 0;
}

const segregate = function(buckets, number) {
  isEven(number) ? buckets[0].push(number) : buckets[1].push(number);
  return buckets;
}

const segregate1 = function(numbers, number) {
  if(isEven(number)) {
    numbers.evens.push(number);
  } else {
    numbers.odds.push(number);
  }

  return numbers;
}


const segregateEvenOdd = function(numbers) {
  // return numbers.reduce(segregate, [[], []]);
  const evenAndOdds = numbers.reduce(segregate1, {evens: [], odds: []});
  return [evenAndOdds.evens, evenAndOdds.odds]; 
}

