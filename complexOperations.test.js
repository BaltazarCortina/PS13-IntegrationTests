import 'jest';
import * as complexOperations from './complexOperations';

describe('complexOperation - Unit Tests', () => {
  describe('checkEmail', () => {
    it('Passing no parameter returns "The email should be an string"', () => {
      expect(complexOperations.checkEmail()).toBe('The email should be an string');
    });
//-----------------------------
		it('Passing an empty string returns "The email should be an string"', () => {
      expect(complexOperations.checkEmail('')).toBe('The email should be an string');
    });

		it('Passing "@" returns "The email is invalid"', () => {
      expect(complexOperations.checkEmail('@')).toBe('The email is invalid');
    });

		it('Passing "email.com" returns "The email is invalid"', () => {
      expect(complexOperations.checkEmail('email.com')).toBe('The email is invalid');
    });

		it('Passing "@something.com" returns "The email is invalid"', () => {
      expect(complexOperations.checkEmail('@something.com')).toBe('The email is invalid');
    });

		it('Passing "@something" returns "The email is invalid"', () => {
      expect(complexOperations.checkEmail('@something')).toBe('The email is invalid');
    });

		it('Passing "email@" returns "The email is invalid"', () => {
      expect(complexOperations.checkEmail('email@')).toBe('The email is invalid');
    });

		it('Passing "email@.com" returns "The email is invalid"', () => {
      expect(complexOperations.checkEmail('email@.com')).toBe('The email is invalid');
    });
//------
		it('Passing "email@something.com" returns "The email is valid"', () => {
      expect(complexOperations.checkEmail('email@something.com')).toBe('The email is valid');
    });

		it('Passing "email@something.else.com" returns "The email is valid"', () => {
      expect(complexOperations.checkEmail('email@something.else.com')).toBe('The email is valid');
    });

		it('Passing "email123@something456.com" returns "The email is valid"', () => {
      expect(complexOperations.checkEmail('email123@something456.com')).toBe('The email is valid');
    });

		it('Passing "email@something.com1" returns "The email is valid"', () => {
      expect(complexOperations.checkEmail('email@something.com1')).toBe('The email is valid');
    });

		it('Passing "email!@something.com" returns "The email is valid"', () => {
      expect(complexOperations.checkEmail('email!@something.com')).toBe('The email is valid');
    });

		it('Passing "email@something!.com" returns "The email is valid"', () => {
      expect(complexOperations.checkEmail('email@something!.com')).toBe('The email is valid');
    });

		it('Passing "email@something.com!" returns "The email is valid"', () => {
      expect(complexOperations.checkEmail('email@something.com!')).toBe('The email is valid');
    });
//-----
		it('Passing 123 returns "The email should be an string"', () => {
      expect(complexOperations.checkEmail(123)).toBe('The email should be an string');
    });

		it('Passing [123] returns "The email should be an string"', () => {
      expect(complexOperations.checkEmail([123])).toBe('The email should be an string');
    });

		it('Passing [1, 2, 3] returns "The email should be an string"', () => {
      expect(complexOperations.checkEmail([1, 2, 3])).toBe('The email should be an string');
    });

		it('Passing {"a":"1"} returns "The email should be an string"', () => {
      expect(complexOperations.checkEmail({'a':'1'})).toBe('The email should be an string');
    });

		it('Passing {"a":"1","b":"2"} returns "The email should be an string"', () => {
      expect(complexOperations.checkEmail({'a':'1','b':'2'})).toBe('The email should be an string');
    });

		it('Passing undefined returns "The email should be an string"', () => {
      expect(complexOperations.checkEmail(undefined)).toBe('The email should be an string');
    });

		it('Passing null returns "The email should be an string"', () => {
      expect(complexOperations.checkEmail(null)).toBe('The email should be an string');
    });

		it('Passing true returns "The email should be an string"', () => {
      expect(complexOperations.checkEmail(true)).toBe('The email should be an string');
    });

		it('Passing false returns "The email should be an string"', () => {
      expect(complexOperations.checkEmail(false)).toBe('The email should be an string');
    });		
  });

  describe('calculateArea', () => {
    it('Passing no parameter returns "undefined is not supported"', () => {
      expect(complexOperations.calculateArea()).toBe('undefined is not supported');
    });

		it('Passing only one parameter ("triangle") returns "number1 and number2 should be numbers"', () => {
      expect(complexOperations.calculateArea('triangle')).toBe('number1 and number2 should be numbers');
    });

		it('Passing only one parameter ("Circle") returns "number1 and number2 should be numbers"', () => {
      expect(complexOperations.calculateArea('Circle')).toBe('number1 and number2 should be numbers');
    });

		it('Passing only one parameter ("SqUaRe") returns "number1 and number2 should be numbers"', () => {
      expect(complexOperations.calculateArea('SqUaRe')).toBe('number1 and number2 should be numbers');
    });

		it('Passing only one parameter ("hexagon") returns "hexagon is not supported"', () => {
      expect(complexOperations.calculateArea('hexagon')).toBe('hexagon is not supported');
    });

		it('Passing only one parameter (123) throws an error', () => {
      expect(() => {
				complexOperations.calculateArea(123)
			}).toThrow();
    });

		it('Passing (1, 2, 3) throws an error', () => {
      expect(() => {
				complexOperations.calculateArea(1, 2, 3)
			}).toThrow();
    });

		it('Passing ("square", "four", 4) returns "number1 and number2 should be numbers"', () => {
      expect(complexOperations.calculateArea('square', 'four', 4)).toBe('number1 and number2 should be numbers');
    });

		it('Passing ("square", 7, "five") returns "number1 and number2 should be numbers"', () => {
      expect(complexOperations.calculateArea('square', 7, 'five')).toBe('number1 and number2 should be numbers');
    });

		it('Passing ("circle", 7, "five") returns "number1 and number2 should be numbers"', () => {
      expect(complexOperations.calculateArea('circle', 7, 'five')).toBe('number1 and number2 should be numbers');
    });
//------
		it('Passing ("square", 4, 5) returns 20', () => {
      expect(complexOperations.calculateArea('square', 4, 5)).toBe(20);
    });

		it('Passing ("rectangle", 2, 6) returns 12', () => {
      expect(complexOperations.calculateArea('rectangle', 2, 6)).toBe(12);
    });

		it('Passing ("triangle", 5, 4) returns 10', () => {
      expect(complexOperations.calculateArea('triangle', 5, 4)).toBe(10);
    });

		it('Passing ("square", 5) returns 0', () => {
      expect(complexOperations.calculateArea('square', 5)).toBe(0);
    });

		it('Passing ("circle", 3) returns aproximately 28.274333882308138', () => {
      expect(complexOperations.calculateArea('circle', 3)).toBeCloseTo(28.274333882308138);
    });

		it('Passing ("square", 5.5, 2.5) returns 13.75', () => {
      expect(complexOperations.calculateArea('square', 5.5, 2.5)).toBe(13.75);
    });

		it('Passing ("rectangle", 4, -5) returns (-20)', () => {
      expect(complexOperations.calculateArea('rectangle', 4, -5)).toBe(-20);
    });

		it('Passing ("triangle", -8, 3) returns (-12)', () => {
      expect(complexOperations.calculateArea('triangle', -8, 3)).toBe(-12);
    });
//-------
		it('Passing ("rectangle", "2", "5") returns "number1 and number2 should be numbers"', () => {
      expect(complexOperations.calculateArea('rectangle', '2', '5')).toBe('number1 and number2 should be numbers');
    });

		it('Passing ("square", [2], [3]) returns "number1 and number2 should be numbers"', () => {
      expect(complexOperations.calculateArea('square', [2], [3])).toBe('number1 and number2 should be numbers');
    });

		it('Passing ("rectangle", [1, 2], [3]) returns "number1 and number2 should be numbers"', () => {
      expect(complexOperations.calculateArea('rectangle', [1, 2], [3])).toBe('number1 and number2 should be numbers');
    });

		it('Passing ("triangle", [2], [0]) returns "number1 and number2 should be numbers"', () => {
      expect(complexOperations.calculateArea('triangle', [2], [0])).toBe('number1 and number2 should be numbers');
    });

		it('Passing ("circle", [1, 2], [3]) returns "number1 and number2 should be numbers"', () => {
      expect(complexOperations.calculateArea('circle', [1, 2], [3])).toBe('number1 and number2 should be numbers');
    });

		it('Passing ("circle", [2], [0]) returns "number1 and number2 should be numbers"', () => {
      expect(complexOperations.calculateArea('circle', [2], [0])).toBe('number1 and number2 should be numbers');
    });

		it('Passing (undefined, undefined, undefined) returns "undefined is not supported"', () => {
      expect(complexOperations.calculateArea(undefined, undefined, undefined)).toBe('undefined is not supported');
    });

		it('Passing (null, null, null) returns "null is not supported"', () => {
      expect(complexOperations.calculateArea(null, null, null)).toBe('null is not supported');
    });

		it('Passing ("square", null, null) returns "number1 and number2 should be numbers"', () => {
      expect(complexOperations.calculateArea('square', null, null)).toBe('number1 and number2 should be numbers');
    });

		it('Passing ("triangle", [2], [0]) returns "number1 and number2 should be numbers"', () => {
      expect(complexOperations.calculateArea('triangle', undefined, undefined)).toBe('number1 and number2 should be numbers');
    });
  });
/*
  describe('sumGratherThan', () => {
    it('first test for sumGratherThan', () => {

    });
  });

  describe('intersectionBetweenArrays', () => {
    it('first test for intersectionBetweenArrays', () => {

    });
  });

  describe('sortArrayOfObjectsByKey', () => {
    it('first test for sortArrayOfObjectsByKey', () => {

    });
  });

  describe('numberOfOddAndEvenNumbers', () => {
    it('first test for numberOfOddAndEvenNumbers', () => {
      
    });
  });
  */
});