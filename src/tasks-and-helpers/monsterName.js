const firstPart = [
  'Злобный',
  'Ужасный',
  'Огромный',
  'Вонючий',
  'Сопливый',
  'Мокрый',
  'Свирепый',
  'Ядовитый',
  'Колючий',
  'Зубастый',
];

const secondPart = [
  ' Огр',
  ' Гном',
  ' Эльф',
  ' Великан',
  ' Троль',
  ' Зомби',
  ' Орк',
  ' Трэнт',
  ' Кентавр',
  ' Дух',
];

const thirdPart = [
  ' Пётр',
  ' Фёдор',
  ' Виталий',
  ' Станислав',
  ' Владимир',
  ' Виктор',
  ' Яков',
  ' Владислав',
  ' Сергей',
  ' Леонид',
];

function randomName(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function getMonsterName() {
  return `${randomName(firstPart)}${randomName(secondPart)}${randomName(thirdPart)}`;
}

