const findKey = function(number, length) {
  return Math.floor(number / length);
}

const makeChunks = function(context, element, index, size) {
  const key = findKey(index, size);
  context[key].push(element);
  return context;
}

const chunk = function(list, size) {
  const numberOfChunks = Math.ceil(list.length / size);
  const context = {};

  for(let currentChunkIndex = 0; currentChunkIndex < numberOfChunks; currentChunkIndex++) {
    context[currentChunkIndex] = [];
  }

  return list.reduce(function(context, element, index) { 
    return makeChunks(context, element, index, size); 
  }, context);
}

const chunks = Object.values(chunk([1, 2, 3, 4, 5], 1));
console.log(chunks);
