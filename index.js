// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFisrtKitten() {
  kittens.shift()
}

function appendKitten(name) {
  var newList = [...kittens, name];
  return newList
}

function prependKitten(name) {
  var newList2 = [name, ...kittens]
  return newList2
}

function removeLastKitten() {
  var newList3 = kittens.slice(, array.length(-1));
  return newList3
}

function removeFirstKitten() {
  var newList4 = kittens.slice(1);
  return newList4
}