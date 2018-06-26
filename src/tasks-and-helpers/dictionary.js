const dictionary = {
  words: [
    {
      word: 'cat',
      trans: ['кот', 'котик'],
    },
    {
      word: 'dog',
      trans: ['сабака', 'собачка'],
    },
    {
      word: 'world',
      trans: ['мир'],
    },
    {
      word: 'family',
      trans: ['семья'],
    },
    {
      word: 'sunset',
      trans: ['закат'],
    },
    {
      word: 'apple',
      trans: ['яблоко'],
    },
    {
      word: 'ball',
      trans: ['мяч', 'мячик'],
    },
    {
      word: 'nut',
      trans: ['орех'],
    },
    {
      word: 'parrot',
      trans: ['попугай'],
    },
    {
      word: 'fish',
      trans: ['рыба'],
    },
    {
      word: 'potatoes',
      trans: ['картошка'],
    },
    {
      word: 'house',
      trans: ['дом'],
    },
    {
      word: 'cherry',
      trans: ['вишня'],
    },
    {
      word: 'juice',
      trans: ['сок'],
    },
    {
      word: 'pants',
      trans: ['штаны'],
    },
    {
      word: 'rain',
      trans: ['дождь'],
    },
    {
      word: 'monkey',
      trans: ['обезьяна'],
    },
    {
      word: 'cheese',
      trans: ['сыр'],
    },
    {
      word: 'flower',
      trans: ['цветы', 'цветок'],
    },
    {
      word: 'hat',
      trans: ['шляпа'],
    },
    {
      word: 'sea',
      trans: ['море'],
    },
    {
      word: 'cloud',
      trans: ['облако'],
    },
    {
      word: 'ice-cream',
      trans: ['мороженое'],
    },
    {
      word: 'bad',
      trans: ['кровать'],
    },
    {
      word: 'book',
      trans: ['книга'],
    },
    {
      word: 'car',
      trans: ['машина'],
    },
    {
      word: 'pear',
      trans: ['груша'],
    },
    {
      word: 'girl',
      trans: ['девочка'],
    },
    {
      word: 'butterfly',
      trans: ['бабочка'],
    },
    {
      word: 'spoon',
      trans: ['ложка'],
    },
    {
      word: 'sweets',
      trans: ['конфеты', 'сладости'],
    },
    {
      word: 'table',
      trans: ['стол'],
    },
    {
      word: 'animal',
      trans: ['животное'],
    },
    {
      word: 'tree',
      trans: ['дерево'],
    },
    {
      word: 'star',
      trans: ['звезда'],
    },
    {
      word: 'spider',
      trans: ['паук'],
    },
    {
      word: 'color',
      trans: ['цвет', 'краска'],
    },
    {
      word: 'sun',
      trans: ['солнце'],
    },
    {
      word: 'water',
      trans: ['вода'],
    },
    {
      word: 'mouse',
      trans: ['мышка'],
    },
    {
      word: 'window',
      trans: ['окно'],
    },
    {
      word: 'bird',
      trans: ['птица'],
    },
  ],
};

function randomWord() {
  const arr = dictionary.words;
  const word = arr[Math.floor(Math.random() * arr.length)];
  return word;
}
export default randomWord;
