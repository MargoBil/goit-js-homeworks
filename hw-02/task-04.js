'use strict';
const formatString = function (string) {
  const stringArray = string.split ('');
  let numberSymbolsInString = stringArray.length;
  if (numberSymbolsInString > 40) {
    const numberSymbolNeedDelete = numberSymbolsInString - 40;
    const formatStringArray = stringArray.splice (
      40,
      numberSymbolNeedDelete,
      '...'
    );
  }
  string = stringArray.join ('');
  console.log (string.length);

  return string;
};

console.log (formatString ('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log (
  formatString ('Vestibulum facilisis, purus nec pulvinar iaculis.')
);
// вернется форматированная строка

console.log (formatString ('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log (
  formatString (
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'
  )
);
// вернется форматированная строка
