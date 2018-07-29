// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  var newList = kittens.push(name);
  return newList
}

function destructivelyPrependKitten(name) {
  var newList2 = kittens.unshift(name);
  return newList2
}