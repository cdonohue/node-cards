'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];
var ranks = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];

var card = function card(index) {
  var rankValue = index % 13,
      rank = ranks[rankValue],
      suit = suits[Math.floor(index / 13)];

  return { rank: rank, rankValue: rankValue, suit: suit };
};

var shuffle = function shuffle(collection, randomGenerator) {
  var currentIndex = collection.length,
      collectionCopy = Array.from(collection),
      randomIndex = undefined;

  while (currentIndex) {
    randomIndex = Math.floor(randomGenerator.next() * currentIndex--);
    var _ref = [collectionCopy[randomIndex], collectionCopy[currentIndex]];
    collectionCopy[currentIndex] = _ref[0];
    collectionCopy[randomIndex] = _ref[1];
  }

  return collectionCopy;
};

var take = function take(collection) {
  var n = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

  return [collection.slice(0, n), collection.slice(n)];
};

var range = function range() {
  var stop = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
  var start = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
  var step = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];

  var length = Math.max(Math.ceil((stop - start) / step), 0),
      range = Array(length);

  for (var idx = 0; idx < length; idx++, start += step) {
    range[idx] = start;
  }

  return range;
};

var deck = function deck() {
  return range(52).map(function (x, i) {
    return card(i);
  });
};

exports['default'] = { deck: deck, take: take, shuffle: shuffle, card: card };
module.exports = exports['default'];
