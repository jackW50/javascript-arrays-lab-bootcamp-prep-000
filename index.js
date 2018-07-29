// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFisrtKitten() {
  kittens.shift(1)
  return kittens
}

function appendKitten(name) {
  var newList = kittens.append(name);
  return newList
}

function prependKitten(name) {
  var newList2 = kittens.splice(0, 0, "name");
  return newList2
}

function removeLastKitten() {
  var newList3 = kittens.slice(-1, array.length(-1));
  return newList3
}

function removeFirstKitten() {
  var newList4 = kittens.slice(0, 1);
  return newList4
}