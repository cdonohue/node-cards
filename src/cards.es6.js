const suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];
const ranks = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];

const card = (index) => {
  let rankValue = index % 13,
      rank = ranks[rankValue],
      suit = suits[Math.floor(index / 13)];

  return { rank, rankValue, suit };
};

const shuffle = (collection, randomGenerator) => {
  let currentIndex = collection.length,
      collectionCopy = Array.from(collection),
      randomIndex;

  while (currentIndex) {
    randomIndex = Math.floor(randomGenerator.next() * currentIndex--);
    [collectionCopy[currentIndex], collectionCopy[randomIndex]] = [collectionCopy[randomIndex], collectionCopy[currentIndex]];
  }

  return collectionCopy;
};

const take = (collection, n = 1) => {
  return [ collection.slice(0, n), collection.slice(n) ];
};

const range = (stop = 0, start = 0, step = 1) => {
  let length = Math.max(Math.ceil((stop - start) / step), 0),
      range = Array(length);

  for (let idx = 0; idx < length; idx++, start += step) {
    range[idx] = start;
  }

  return range;
};

const deck = () => range(52).map((x, i) => card(i));

export default { deck, take, shuffle, card };
