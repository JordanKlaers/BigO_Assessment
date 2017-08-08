function ohOne(index, array){
  return array[index]
}


function ohN(array){
  for(let i=0; i<array.length){
    console.log(array[i]);
  }
}


function ohNSquared(arrayOne, arrayTwo){
  for (var i = 0; i < arrayOne.length; i++) {
    for (var j = 0; j < arrayTwo.length; j++) {
      if(arrayOne[i] == arrayTwo[j]){
        console.log("got a match");
      }
    }
  }
}
