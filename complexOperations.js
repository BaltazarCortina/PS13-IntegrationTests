import {
  isString,
  isArray,
  isNumber,
  validateEmail,
  isSupportedFigure,
  arrayElementsAreObjectWithKey,
  sum,
  multip,
  division,
  exponent,
  arrayIntersection,
  sortArrayByKey,
  getOddNumbersFromArray,
  getEvenNumbersFromArray,
} from './basicOperations';

/**
 * This function validates emails
 * @param {string} email
 * @returns {string}
*/
export const checkEmail = (email) => {
  if (!email || !isString(email)) {
    return 'The email should be an string';
  }
  const isValidEmail = validateEmail(email);
  if (!isValidEmail) {
    return 'The email is invalid';
  }
  return 'The email is valid';
};

// console.log(checkEmail());
// console.log(checkEmail(''));

// console.log(checkEmail('@'));
// console.log(checkEmail('email.com'));
// console.log(checkEmail('@something.com'));
// console.log(checkEmail('@something'));
// console.log(checkEmail('email@'));
// console.log(checkEmail('email@.com'));

// console.log(checkEmail('email@something.com'));
// console.log(checkEmail('email@something.else.com'));
// console.log(checkEmail('email123@something456.com'));
// console.log(checkEmail('email@something.com1'));
// console.log(checkEmail('email!@something.com'));
// console.log(checkEmail('email@something!.com'));
// console.log(checkEmail('email@something.com!'));

// console.log(checkEmail(123));
// console.log(checkEmail([123]));
// console.log(checkEmail([1, 2, 3]));
// console.log(checkEmail({'a':'1'}));
// console.log(checkEmail({'a':'1','b':'2'}));
// console.log(checkEmail(undefined));
// console.log(checkEmail(null));
// console.log(checkEmail(true));
// console.log(checkEmail(false));


/**
 * Calculate area of a figure
 * @param {string} figure
 * @param {number} number1
 * @param {number} number2 - It's not necessary for circle
 * @returns {number|string}
*/
export const calculateArea = (figure, number1, number2 = 0) => {
  if (!figure || !isSupportedFigure(figure)) {
    return `${figure} is not supported`;
  }
  if (!isNumber(number1) || !isNumber(number2)) {
    return 'number1 and number2 should be numbers';
  }
  switch(figure.toLowerCase()) {
    case 'rectangle':
    case 'square':
      return multip(number1, number2);
    case 'triangle':
      return division(multip(number1, number2), 2);
    case 'circle':
      // For circle we use only the number1 as radio
      const radio = number1;
      return Math.PI * exponent(radio, 2);
    default:
      return `${figure} is not supported`;
  }
}

// console.log(calculateArea());
// console.log(calculateArea('triangle'));
// console.log(calculateArea('Circle'));
// console.log(calculateArea('SqUaRe'));
// console.log(calculateArea('hexagon'));

// // console.log(calculateArea(123));
// // console.log(calculateArea(1, 2, 3));

// console.log(calculateArea('square', 'four', 4));
// console.log(calculateArea('square', 7, 'five'));
// console.log(calculateArea('circle', 7, 'five'));

// console.log(calculateArea('square', 4, 5));
// console.log(calculateArea('rectangle', 2, 6));
// console.log(calculateArea('triangle', 5, 4));
// console.log(calculateArea('square', 5));
// console.log(calculateArea('circle', 3));
// console.log(calculateArea('square', 5.5, 2.5));
// console.log(calculateArea('rectangle', 4, -5));
// console.log(calculateArea('triangle', -8, 3));

// console.log(calculateArea('rectangle', '2', '5'));
// console.log(calculateArea('square', [2], [3]));
// console.log(calculateArea('rectangle', [1, 2], [3]));
// console.log(calculateArea('triangle', [2], [0]));
// console.log(calculateArea('circle', [1, 2], [3]));
// console.log(calculateArea('circle', [2], [0]));

// console.log(calculateArea(undefined, undefined, undefined));
// console.log(calculateArea(null, null, null));
// console.log(calculateArea('square', null, null));
// console.log(calculateArea('triangle', undefined, undefined));

/**
 * This function sum two numbers and detects if the result if grather than the third number
 * @param {number} number1
 * @param {number} number2
 * @param {number} number3
 * @returns {string}
*/
export const sumGratherThan = (number1, number2, number3) => {
  if (!isNumber(number1) || !isNumber(number2) || !isNumber(number3)) {
    return 'The params should be numbers';
  }
  const sumResult = sum(number1, number2);
  if (sumResult > number3) {
    return `${sumResult} is grather than ${number3}`;
  }
  return `${sumResult} is less than ${number3}`;
}

// console.log(sumGratherThan());
// console.log(sumGratherThan([], undefined));
// console.log(sumGratherThan(1, 5, 10));
// console.log(sumGratherThan(1, 5, 5));

/**
 * This function returns the intersection between two arrays
 * @param {Array} array1
 * @param {Array} array2
 * @returns {Array|string}
*/
export const intersectionBetweenArrays = (array1, array2) => {
  if (!isArray(array1) || !isArray(array2)) {
    return 'The params should be arrays';
  }
  const intersection = arrayIntersection(array1, array2);
  if (intersection.length === 0) {
    return 'There are not matching elements';
  }
  return intersection;
}

// console.log(intersectionBetweenArrays())
// console.log(intersectionBetweenArrays([1,2,3]));
// console.log(intersectionBetweenArrays([1,2,3], [1]));
// console.log(intersectionBetweenArrays([1,2,3], [5]));
// console.log(intersectionBetweenArrays(['test',2,3], ['test', 5]));

/**
 * Sort an array based on an specific key
 * @param {Array} array - This array should be an array of objects
 * @param {string} key
 * @returns {Array} - Sorted array
*/
export const sortArrayOfObjectsByKey = (array, key) => {
  if (!isArray(array)) {
    return 'The first param should be an array';
  }
  if (!key || !isString(key)) {
    return 'The second param should be an string';
  }
  if (!arrayElementsAreObjectWithKey(array, key)) {
    return `Some elements in the array does not have the ${key} property`;
  }
  return sortArrayByKey(array, key);
}

// console.log(sortArrayOfObjectsByKey([{ name: 'Guille' }, { name: 'Rodrigo' }, { name: 'David' }], 'name'));
// console.log(sortArrayOfObjectsByKey(undefined, 'name'));
// console.log(sortArrayOfObjectsByKey([{ name: 'Guille' }, { name: 'Rodrigo' }, { name: 'David' }], 1));
// console.log(sortArrayOfObjectsByKey([{ name: 'Guille' }, { name: 'Rodrigo' }, { name: 'David' }], ''));
// console.log(sortArrayOfObjectsByKey([{ name: 'Guille' }, { name: 'Rodrigo' }, { noName: 'NoName' }], 'name'));

/**
 * Should return the number of odd and even numbers
 * @param {Array} array
 * @returns {Object|string} - odd and even numbers
*/
export const numberOfOddAndEvenNumbers = (array) => {
  if (!isArray(array)) {
    return 'The param should be an array';
  }
  const elementsAreNumbers = array.every(isNumber);
  if (!elementsAreNumbers) {
    return `The array should have only numbers`;
  }
  return {
    odd: getOddNumbersFromArray(array).length,
    even: getEvenNumbersFromArray(array).length
  }
}

// console.log(numberOfOddAndEvenNumbers([1, 4, 5, 8, 9]));
// console.log(numberOfOddAndEvenNumbers([1.3, 4.2]));
// console.log(numberOfOddAndEvenNumbers());
// console.log(numberOfOddAndEvenNumbers([1, 'string']));