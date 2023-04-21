const chunk = function(list, size, overlap) {

  return list.reduce(function(chunksTillNow, element) {
    if(chunksTillNow.length === 0) {
      chunksTillNow.push([element]);
      return chunksTillNow;
    }

    lastChunk = chunksTillNow[chunksTillNow.length - 1];
    if(lastChunk.length === size) {
      chunksTillNow.push([element]);
      return chunksTillNow;
    }

    lastChunk.push(element);
    return chunksTillNow;
  }, []);
}

console.log(chunk([1, 2, 3, 4], 3, 0));
