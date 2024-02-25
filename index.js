// KEY_VALUE: Вернуть массив пар, вложенными массивами вида [[key, value], [key, value]].
// Аргумент: Объект
// Ожидаемый результат: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]
const KEY_VALUE = (obj = {}) => {
  if (Object.keys(obj).length === 0) {
    return 'Ошибка, объект не может быть пустым';
  }
  const result = [];
  for(const key in obj) {
    const pushItem = [key, obj[key]];
    result.push(pushItem)
  }
  return result;
}

// Напиши функцию, которая заполняет новый массив предоставленным значением.
// В аргументах передается количество элементов и элемент, которым надо заполнить массив (3, 'a') => ['a', 'a', 'a']
const generateArray = (len, symb = '') => {
  const symbToString = symb.toString().trim();
  if (symbToString === '') {
    console.log('Ошибка, обязательно задайте значение');
    return;
  };  
  const result = [];
  for (let i = 0; i < len; i++) {
    result.push(symbToString);
  }
  return result;
}

// Напиши функцию, которая разворачивает массив в обратном порядке.
// В аргумент функции передается массив [1, 2, 3] должны вернуть  [3, 2, 1]
const reverseArray = (array = []) => {
  const result = [];
  if (array.length === 0) {
    console.log('Ошибка, Вы не задали массив');
    return;
  }
  for (let i = array.length - 1; i >= 0; i--) {
    result.push(array[i])
  }
  return result;
}

// Напиши функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.
// Ожидаемый результат: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
const filterArray = (array = []) => {
  const result = [];
  if (array.length === 0) {
    console.log('Ошибка, Вы не задали массив');
    return;
  }
  for (const item of array) {
    const numItem = Number(item);
    if (numItem > 0) { // <- Тут конечно вопросик про приведение к типу, если оставить условие numItem !== NaN - NaN попадает в массив
      result.push(numItem)
    }
  }
  return result;
}

// Напиши функцию, которая складывает все элементы 
//массива чисел и возвращает результат [4, -1, 15] => 18
const sumOfArray = (array = []) => {
  let result = 0;
  if (array.length === 0) {
    console.log('Ошибка, Вы не задали массив');
    return;
  }
  
  for (const item of array) {
    console.log(typeof item)
    if (typeof item === 'number') {
      result = result + item;
    }
  }
  return result;
}
