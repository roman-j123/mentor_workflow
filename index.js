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

generateArray(3, 'a');
