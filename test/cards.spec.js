import {assert, expect} from 'chai';
import {deck, take, shuffle, card} from '../src/cards.es6';

describe('card', function() {
  it('should return a card for a given rank', function() {
    expect(card(0).suit).to.equal('Spades');
  });
});

describe('deck', function() {
  it('should have 52 cards', function() {
    expect(deck()).to.have.length(52);
  });
});

describe('shuffle', function() {
  let array = [1,2,3,4,5,6,7,8,9,0];
  let randomGenerator = function *() {
    while(true) {
      yield Math.random();
    }
  };

  let shuffledArray = shuffle(array, randomGenerator());
  it('should return a shuffled collection', function() {
    expect(shuffledArray.every((x, i) => x === array[i])).to.be.false;
  });
});

describe('take', function() {
  let array = [1, 2, 3],
      [[first], rest] = take(array);

  it('should extract 1 item out of the collection and return it', function() {
    expect(first).to.equal(array[0]);
  });

  it('should extract n items out of the collection and return them', function() {
    let [twoCards, rest] = take(array, 2);
    expect(twoCards).to.deep.equal([1, 2]);
  });

  it('should return a new collection that is 1 less', function() {
    expect(rest).to.have.length(array.length - 1);
  });
});
