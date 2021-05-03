import 'jest';
import * as complexOperations from './complexOperations';
import * as basicOperations from './basicOperations';

describe('complexOperation - Integration Tests', () => {
  describe('checkEmail', () => {
    it('Passing no parameter returns "The email should be an string"', () => {
      expect(complexOperations.checkEmail()).toBe('The email should be an string');
    });

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
  
  describe('sumGratherThan', () => {
    it('Passing no prarameters returns "The params should be numbers"', () => {
      expect(complexOperations.sumGratherThan()).toBe('The params should be numbers');
    });

    it('Passing (1) returns "The params should be numbers"', () => {
      expect(complexOperations.sumGratherThan(1)).toBe('The params should be numbers');
    });

    it('Passing (2, 3) returns "The params should be numbers"', () => {
      expect(complexOperations.sumGratherThan(2, 3)).toBe('The params should be numbers');
    });

    it('Passing (2, 3, 4) returns "5 is grather than 4"', () => {
      expect(complexOperations.sumGratherThan(2, 3, 4)).toBe('5 is grather than 4');
    });

    it('Passing (2, 3, 5) returns "5 is less than 5"', () => {
      expect(complexOperations.sumGratherThan(2, 3, 5)).toBe('5 is less than 5');
    });

    it('Passing (2, 3, 6) returns "5 is less than 6"', () => {
      expect(complexOperations.sumGratherThan(2, 3, 6)).toBe('5 is less than 6');
    });

    it('Passing (null, null, null) returns "The params should be numbers"', () => {
      expect(complexOperations.sumGratherThan(null, null, null)).toBe('The params should be numbers');
    });

    it('Passing (2, null, null) returns "The params should be numbers"', () => {
      expect(complexOperations.sumGratherThan(2, null, null)).toBe('The params should be numbers');
    });

    it('Passing (null, null, 5) returns "The params should be numbers"', () => {
      expect(complexOperations.sumGratherThan(null, null, 5)).toBe('The params should be numbers');
    });

    it('Passing (undefined, undefined, undefined) returns "The params should be numbers"', () => {
      expect(complexOperations.sumGratherThan(undefined, undefined, undefined)).toBe('The params should be numbers');
    });

    it('Passing (undefined, 3, undefined) returns "The params should be numbers"', () => {
      expect(complexOperations.sumGratherThan(undefined, 3, undefined)).toBe('The params should be numbers');
    });

    it('Passing (undefined, undefined, 6) returns "The params should be numbers"', () => {
      expect(complexOperations.sumGratherThan(undefined, undefined, 6)).toBe('The params should be numbers');
    });

    it('Passing ("1", "2", "5") returns "The params should be numbers"', () => {
      expect(complexOperations.sumGratherThan('1', '2', '5')).toBe('The params should be numbers');
    });

    it('Passing ("", 2, 3) returns "The params should be numbers"', () => {
      expect(complexOperations.sumGratherThan('', 2, 3)).toBe('The params should be numbers');
    });

    it('Passing ([3], [2], [4]) returns "The params should be numbers"', () => {
      expect(complexOperations.sumGratherThan([3], [2], [4])).toBe('The params should be numbers');
    });

    it('Passing (2, 5, undefined) returns "The params should be numbers"', () => {
      expect(complexOperations.sumGratherThan(2, 5, undefined)).toBe('The params should be numbers');
    });

    it('Passing (1, 2, []) returns "The params should be numbers"', () => {
      expect(complexOperations.sumGratherThan(1, 2, [])).toBe('The params should be numbers');
    });
  });
  
  describe('intersectionBetweenArrays', () => {
    it('Passing no parameters returns "The params should be arrays"', () => {
      expect(complexOperations.intersectionBetweenArrays()).toBe('The params should be arrays');
    });
    
    it('Passing ([]) returns "The params should be arrays"', () => {
      expect(complexOperations.intersectionBetweenArrays([])).toBe('The params should be arrays');
    });

    it('Passing ([1,2,3,4]) returns "The params should be arrays"', () => {
      expect(complexOperations.intersectionBetweenArrays([1,2,3,4])).toBe('The params should be arrays');
    });

    it('Passing ([1,2,3,4], [2]) returns [2]', () => {
      expect(complexOperations.intersectionBetweenArrays([1,2,3,4], [2])).toEqual([2]);
    });

    it('Passing ([1,2,3,4], [7]) returns "There are not matching elements"', () => {
      expect(complexOperations.intersectionBetweenArrays([1,2,3,4], [7])).toBe('There are not matching elements');
    });

    it('Passing ([1,2,3,4], []) returns "There are not matching elements"', () => {
      expect(complexOperations.intersectionBetweenArrays([1,2,3,4], [])).toBe('There are not matching elements');
    });

    it('Passing (["a",4,5], ["a",2]) returns ["a"]', () => {
      expect(complexOperations.intersectionBetweenArrays(['a',4,5], ['a',2])).toEqual(['a']);
    });

    it('Passing ([1,2,null,undefined,true,"a","b"], [true,undefined,"b",null]) returns [null,undefined,true,"b"]', () => {
      expect(complexOperations.intersectionBetweenArrays([1,2,null,undefined,true,'a','b'], [true,undefined,'b',null])).toEqual([null,undefined,true,'b']);
    });

    it('Passing ([1,2,3,4], 2) returns "The params should be arrays"', () => {
      expect(complexOperations.intersectionBetweenArrays([1,2,3,4], 2)).toBe('The params should be arrays');
    });

    it('Passing ([1,2,3,4], [2,3], [3]) returns [2,3]', () => {
      expect(complexOperations.intersectionBetweenArrays([1,2,3,4], [2,3], [3])).toEqual([2,3]);
    });

    it('Passing (null, null) returns "The params should be arrays"', () => {
      expect(complexOperations.intersectionBetweenArrays(null, null)).toBe('The params should be arrays');
    });

    it('Passing (undefined, undefined) returns "The params should be arrays"', () => {
      expect(complexOperations.intersectionBetweenArrays(undefined, undefined)).toBe('The params should be arrays');
    });

    it('Passing (123, 1) returns "The params should be arrays"', () => {
      expect(complexOperations.intersectionBetweenArrays(123, 1)).toBe('The params should be arrays');
    });

    it('Passing ("abc", "c") returns "The params should be arrays"', () => {
      expect(complexOperations.intersectionBetweenArrays('abc', 'c')).toBe('The params should be arrays');
    });
  });
  
  describe('sortArrayOfObjectsByKey', () => {
    it('Passing no parameter returns "The first param should be an array"', () => {
      expect(complexOperations.sortArrayOfObjectsByKey()).toBe('The first param should be an array');
    });

    it('Passing ([{id: 1}, {id: 3}, {id: 2}]) returns "The second param should be an string"', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([{id: 1}, {id: 3}, {id: 2}])).toBe('The second param should be an string');
    });

    it('Passing ([{id: 1}, {id: 3}, {id: 2}], "number") returns "Some elements in the array does not have the number property"', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([{id: 1}, {id: 3}, {id: 2}], 'number')).toBe('Some elements in the array does not have the number property');
    });

    it('Passing ([], "id") returns []', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([], 'id')).toEqual([]);
    });

    it('Passing ("id") returns "The first param should be an array"', () => {
      expect(complexOperations.sortArrayOfObjectsByKey('id')).toBe('The first param should be an array');
    });

    it('Passing ([{id: 1}, {id: 3}, {id: 2}], "id") returns [ { id: 1 }, { id: 2 }, { id: 3 } ]', () => {
      let expectedResult = [ { id: 1 }, { id: 2 }, { id: 3 } ];
      expect(complexOperations.sortArrayOfObjectsByKey([{id: 1}, {id: 3}, {id: 2}], 'id')).toEqual(expectedResult);
    });

    it('Passing ([{id: 1, letter: "c"}, {id: 3, letter: "b"}, {id: 2, letter: "a"}], "id") returns "[{ id: 1, letter: "c" }, { id: 2, letter: "a" }, { id: 3, letter: "b" }]"', () => {
      let expectedResult = [{ id: 1, letter: 'c' }, { id: 2, letter: 'a' }, { id: 3, letter: 'b' }];
      expect(complexOperations.sortArrayOfObjectsByKey([{id: 1, letter: 'c'}, {id: 3, letter: 'b'}, {id: 2, letter: 'a'}], 'id')).toEqual(expectedResult);
    });

    it('Passing ([{id: 1, letter: "c"}, {id: 3, letter: "b"}, {id: 2, letter: "a"}], "letter") returns "[{ id: 2, letter: "a" }, { id: 3, letter: "b" }, { id: 1, letter: "c" }]"', () => {
      let expectedResult = [{ id: 2, letter: 'a' }, { id: 3, letter: 'b' }, { id: 1, letter: 'c' }];
      expect(complexOperations.sortArrayOfObjectsByKey([{id: 1, letter: 'c'}, {id: 3, letter: 'b'}, {id: 2, letter: 'a'}], 'letter')).toEqual(expectedResult);
    });

    it('Passing ([{id: 1, letter: "c"}, {id: 3, letter: "b"}, {id: 2, letter: "a"}], "") returns "The second param should be an string"', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([{id: 1, letter: 'c'}, {id: 3, letter: 'b'}, {id: 2, letter: 'a'}], '')).toBe('The second param should be an string');
    });

    it('Passing ([{id: 1, letter: "c"}, {id: 3, letter: "b"}, {id: 2, letter: "a"}], 1) returns "The second param should be an string"', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([{id: 1, letter: 'c'}, {id: 3, letter: 'b'}, {id: 2, letter: 'a'}], 1)).toBe('The second param should be an string');
    });

    it('Passing ([{id: 1, letter: "c"}, {id: 3, letter: "b"}, {id: 2, letter: "a"}], ["id"]) returns "The second param should be an string"', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([{id: 1, letter: 'c'}, {id: 3, letter: 'b'}, {id: 2, letter: 'a'}], ['id'])).toBe('The second param should be an string');
    });

    it('Passing ([{id: 1, letter: "c"}, {id: 3, letter: "b"}, {id: 2, letter: "a"}], ["id","letter"]) returns "The second param should be an string"', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([{id: 1, letter: 'c'}, {id: 3, letter: 'b'}, {id: 2, letter: 'a'}], ['id','letter'])).toBe('The second param should be an string');
    });

    it('Passing ([{id: 1, letter: "c"}, {id: 3, letter: "b"}, {id: 2, letter: "a"}], undefined) returns "The second param should be an string"', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([{id: 1, letter: 'c'}, {id: 3, letter: 'b'}, {id: 2, letter: 'a'}], undefined)).toBe('The second param should be an string');
    });

    it('Passing ([{id: 1, letter: "c"}, {id: 3, letter: "b"}, {id: 2, letter: "a"}], null) returns "The second param should be an string"', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([{id: 1, letter: 'c'}, {id: 3, letter: 'b'}, {id: 2, letter: 'a'}], null)).toBe('The second param should be an string');
    });

    it('Passing ([{id: 1, letter: "c"}, {id: 3, letter: "b"}, {id: 2, letter: "a"}, {id: 2, letter: "d"}], "id") returns "[{ id: 1, letter: "c" }, { id: 2, letter: "a" }, { id: 2, letter: "d" }, { id: 3, letter: "b" }]"', () => {
      let expectedResult = [{ id: 1, letter: 'c' }, { id: 2, letter: 'a' }, { id: 2, letter: 'd' }, { id: 3, letter: 'b' }];
      expect(complexOperations.sortArrayOfObjectsByKey([{id: 1, letter: 'c'}, {id: 3, letter: 'b'}, {id: 2, letter: 'a'}, {id: 2, letter: 'd'}], 'id')).toEqual(expectedResult);
    });

    it('Passing ([{id: 1, letter: "c"}, {id: 3, letter: "b"}, {id: 2, letter: "d"}, {id: 2, letter: "a"}], "id") returns "[{ id: 1, letter: "c" }, { id: 2, letter: "d" }, { id: 2, letter: "a" }, { id: 3, letter: "b" }]"', () => {
      let expectedResult = [{ id: 1, letter: 'c' }, { id: 2, letter: 'd' }, { id: 2, letter: 'a' }, { id: 3, letter: 'b' }];
      expect(complexOperations.sortArrayOfObjectsByKey([{id: 1, letter: 'c'}, {id: 3, letter: 'b'}, {id: 2, letter: 'd'}, {id: 2, letter: 'a'}], 'id')).toEqual(expectedResult);
    });

    it('Passing (undefined, "id") returns "The first param should be an array"', () => {
      expect(complexOperations.sortArrayOfObjectsByKey(undefined, 'id')).toBe('The first param should be an array');
    });

    it('Passing (null, "id") returns "The first param should be an array"', () => {
      expect(complexOperations.sortArrayOfObjectsByKey(null, 'id')).toBe('The first param should be an array');
    });

    it('Passing ("id: 1, id: 3, id: 2", "id") returns "The first param should be an array"', () => {
      expect(complexOperations.sortArrayOfObjectsByKey('id: 1, id: 3, id: 2', 'id')).toBe('The first param should be an array');
    });

    it('Passing ([1, 3, 2], "id") returns "Some elements in the array does not have the id property"', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([1, 3, 2], 'id')).toBe('Some elements in the array does not have the id property');
    });

    it('Passing (["id: 1", "id: 3", "id: 2"], "id") returns "Some elements in the array does not have the id property"', () => {
      expect(complexOperations.sortArrayOfObjectsByKey(['id: 1', 'id: 3', 'id: 2'], 'id')).toBe('Some elements in the array does not have the id property');
    });
  });
  
  describe('numberOfOddAndEvenNumbers', () => {
    it('Passing no parameter returns "The param should be an array"', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers()).toBe('The param should be an array');
    });

    it('Passing (1,2,3,4,5) returns "The param should be an array"', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers(1,2,3,4,5)).toBe('The param should be an array');
    });

    it('Passing ("1 2 3 4 5") returns "The param should be an array"', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers('1 2 3 4 5')).toBe('The param should be an array');
    });

    it('Passing (["1","2","3"]) returns "The array should have only numbers"', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers(['1','2','3'])).toBe('The array should have only numbers');
    });

    it('Passing ([1,2,3,4,5]) returns {odd: 3, even: 2}', () => {
      let expectedResult = {odd: 3, even: 2};
      expect(complexOperations.numberOfOddAndEvenNumbers([1,2,3,4,5])).toEqual(expectedResult);
    });

    it('Passing ([1.2, 2.4, 3.7, 4, 5.1]) returns {odd: 4, even: 1}', () => {
      let expectedResult = {odd: 4, even: 1};
      expect(complexOperations.numberOfOddAndEvenNumbers([1.2, 2.4, 3.7, 4, 5.1])).toEqual(expectedResult);
    });

    it('Passing ([1,3,5,7,9]) returns {odd: 5, even: 0}', () => {
      let expectedResult = {odd: 5, even: 0};
      expect(complexOperations.numberOfOddAndEvenNumbers([1,3,5,7,9])).toEqual(expectedResult);
    });

    it('Passing ([2,4,6,8]) returns {odd: 0, even: 4}', () => {
      let expectedResult = {odd: 0, even: 4};
      expect(complexOperations.numberOfOddAndEvenNumbers([2,4,6,8])).toEqual(expectedResult);
    });

    it('Passing ([0]) returns {odd: 0, even: 1}', () => {
      let expectedResult = {odd: 0, even: 1};
      expect(complexOperations.numberOfOddAndEvenNumbers([0])).toEqual(expectedResult);
    });

    it('Passing ([]) returns {odd: 0, even: 0}', () => {
      let expectedResult = {odd: 0, even: 0};
      expect(complexOperations.numberOfOddAndEvenNumbers([])).toEqual(expectedResult);
    });

    it('Passing ([1, "2", "3", 4, 5]) returns "The array should have only numbers"', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers([1, '2', '3', 4, 5])).toBe('The array should have only numbers');
    });

    it('Passing ([1, 2, undefined, null, 5]) returns "The array should have only numbers"', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers([1, 2, undefined, null, 5])).toBe('The array should have only numbers');
    });

    it('Passing (null) returns "The param should be an array"', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers(null)).toBe('The param should be an array');
    });

    it('Passing (undefined) returns "The param should be an array"', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers(undefined)).toBe('The param should be an array');
    });
  });
});

describe('complexOperation - Unit Tests', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  describe('checkEmail', () => {
    it('Passing no parameter returns "The email should be an string"', () => {
      jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
      expect(complexOperations.checkEmail()).toBe('The email should be an string');
    });

		it('Passing an empty string returns "The email should be an string"', () => {
      jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
      expect(complexOperations.checkEmail('')).toBe('The email should be an string');
    });

		it('Passing "@" returns "The email is invalid"', () => {
      jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
      jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(false);
      expect(complexOperations.checkEmail('@')).toBe('The email is invalid');
    });

		it('Passing "email.com" returns "The email is invalid"', () => {
      jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
      jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(false);
      expect(complexOperations.checkEmail('email.com')).toBe('The email is invalid');
    });

		it('Passing "@something.com" returns "The email is invalid"', () => {
      jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
      jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(false);
      expect(complexOperations.checkEmail('@something.com')).toBe('The email is invalid');
    });

		it('Passing "@something" returns "The email is invalid"', () => {
      jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
      jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(false);
      expect(complexOperations.checkEmail('@something')).toBe('The email is invalid');
    });

		it('Passing "email@" returns "The email is invalid"', () => {
      jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
      jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(false);
      expect(complexOperations.checkEmail('email@')).toBe('The email is invalid');
    });

		it('Passing "email@.com" returns "The email is invalid"', () => {
      jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
      jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(false);
      expect(complexOperations.checkEmail('email@.com')).toBe('The email is invalid');
    });

		it('Passing "email@something.com" returns "The email is valid"', () => {
      jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
      jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(true);
      expect(complexOperations.checkEmail('email@something.com')).toBe('The email is valid');
    });

		it('Passing "email@something.else.com" returns "The email is valid"', () => {
      jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
      jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(true);
      expect(complexOperations.checkEmail('email@something.else.com')).toBe('The email is valid');
    });

		it('Passing "email123@something456.com" returns "The email is valid"', () => {
      jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
      jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(true);
      expect(complexOperations.checkEmail('email123@something456.com')).toBe('The email is valid');
    });

		it('Passing "email@something.com1" returns "The email is valid"', () => {
      jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
      jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(true);
      expect(complexOperations.checkEmail('email@something.com1')).toBe('The email is valid');
    });

		it('Passing "email!@something.com" returns "The email is valid"', () => {
      jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
      jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(true);
      expect(complexOperations.checkEmail('email!@something.com')).toBe('The email is valid');
    });

		it('Passing "email@something!.com" returns "The email is valid"', () => {
      jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
      jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(true);
      expect(complexOperations.checkEmail('email@something!.com')).toBe('The email is valid');
    });

		it('Passing "email@something.com!" returns "The email is valid"', () => {
      jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
      jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(true);
      expect(complexOperations.checkEmail('email@something.com!')).toBe('The email is valid');
    });

		it('Passing 123 returns "The email should be an string"', () => {
      jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
      expect(complexOperations.checkEmail(123)).toBe('The email should be an string');
    });

		it('Passing [123] returns "The email should be an string"', () => {
      jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
      expect(complexOperations.checkEmail([123])).toBe('The email should be an string');
    });

		it('Passing [1, 2, 3] returns "The email should be an string"', () => {
      jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
      expect(complexOperations.checkEmail([1, 2, 3])).toBe('The email should be an string');
    });

		it('Passing {"a":"1"} returns "The email should be an string"', () => {
      jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
      expect(complexOperations.checkEmail({'a':'1'})).toBe('The email should be an string');
    });

		it('Passing {"a":"1","b":"2"} returns "The email should be an string"', () => {
      jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
      expect(complexOperations.checkEmail({'a':'1','b':'2'})).toBe('The email should be an string');
    });

		it('Passing undefined returns "The email should be an string"', () => {
      jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
      expect(complexOperations.checkEmail(undefined)).toBe('The email should be an string');
    });

		it('Passing null returns "The email should be an string"', () => {
      jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
      expect(complexOperations.checkEmail(null)).toBe('The email should be an string');
    });

		it('Passing true returns "The email should be an string"', () => {
      jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
      expect(complexOperations.checkEmail(true)).toBe('The email should be an string');
    });

		it('Passing false returns "The email should be an string"', () => {
      jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
      expect(complexOperations.checkEmail(false)).toBe('The email should be an string');
    });
  });

  describe('calculateArea', () => {
    it('Passing no parameter returns "undefined is not supported"', () => {
      jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(false);
      expect(complexOperations.calculateArea()).toBe('undefined is not supported');
    });

		it('Passing only one parameter ("triangle") returns "number1 and number2 should be numbers"', () => {
      jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
      expect(complexOperations.calculateArea('triangle')).toBe('number1 and number2 should be numbers');
    });

		it('Passing only one parameter ("Circle") returns "number1 and number2 should be numbers"', () => {
      jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
      expect(complexOperations.calculateArea('Circle')).toBe('number1 and number2 should be numbers');
    });

		it('Passing only one parameter ("SqUaRe") returns "number1 and number2 should be numbers"', () => {
      jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
      expect(complexOperations.calculateArea('SqUaRe')).toBe('number1 and number2 should be numbers');
    });

		it('Passing only one parameter ("hexagon") returns "hexagon is not supported"', () => {
      jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(false);
      expect(complexOperations.calculateArea('hexagon')).toBe('hexagon is not supported');
    });

    it('Passing ("hexagon", 2, 5) and forcing isSupportedFigure to return true returns "hexagon is not supported"', () => {
      jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
      expect(complexOperations.calculateArea('hexagon', 2, 5)).toBe('hexagon is not supported');
    });

		it('Passing ("square", "four", 4) returns "number1 and number2 should be numbers"', () => {
      jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
      expect(complexOperations.calculateArea('square', 'four', 4)).toBe('number1 and number2 should be numbers');
    });

		it('Passing ("square", 7, "five") returns "number1 and number2 should be numbers"', () => {
      jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
      expect(complexOperations.calculateArea('square', 7, 'five')).toBe('number1 and number2 should be numbers');
    });

		it('Passing ("circle", 7, "five") returns "number1 and number2 should be numbers"', () => {
      jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
      expect(complexOperations.calculateArea('circle', 7, 'five')).toBe('number1 and number2 should be numbers');
    });

		it('Passing ("square", 4, 5) returns 20', () => {
      jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
      jest.spyOn(basicOperations, 'multip').mockReturnValue(20);
      expect(complexOperations.calculateArea('square', 4, 5)).toBe(20);
    });

		it('Passing ("rectangle", 2, 6) returns 12', () => {
      jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
      jest.spyOn(basicOperations, 'multip').mockReturnValue(12);
      expect(complexOperations.calculateArea('rectangle', 2, 6)).toBe(12);
    });

		it('Passing ("triangle", 5, 4) returns 10', () => {
      jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
      jest.spyOn(basicOperations, 'multip').mockReturnValue(20);
      jest.spyOn(basicOperations, 'division').mockReturnValue(10);
      expect(complexOperations.calculateArea('triangle', 5, 4)).toBe(10);
    });

		it('Passing ("square", 5) returns 0', () => {
      jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
      jest.spyOn(basicOperations, 'multip').mockReturnValue(0);
      expect(complexOperations.calculateArea('square', 5)).toBe(0);
    });

		it('Passing ("circle", 3) returns aproximately 28.274333882308138', () => {
      jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
      jest.spyOn(basicOperations, 'exponent').mockReturnValue(Math.pow(3, 2));
      expect(complexOperations.calculateArea('circle', 3)).toBeCloseTo(28.274333882308138);
    });

		it('Passing ("square", 5.5, 2.5) returns 13.75', () => {
      jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
      jest.spyOn(basicOperations, 'multip').mockReturnValue(13.75);
      expect(complexOperations.calculateArea('square', 5.5, 2.5)).toBe(13.75);
    });

		it('Passing ("rectangle", 4, -5) returns (-20)', () => {
      jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
      jest.spyOn(basicOperations, 'multip').mockReturnValue(-20);
      expect(complexOperations.calculateArea('rectangle', 4, -5)).toBe(-20);
    });

		it('Passing ("triangle", -8, 3) returns (-12)', () => {
      jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
      jest.spyOn(basicOperations, 'multip').mockReturnValue(-24);
      jest.spyOn(basicOperations, 'division').mockReturnValue(-12);
      expect(complexOperations.calculateArea('triangle', -8, 3)).toBe(-12);
    });

		it('Passing ("rectangle", "2", "5") returns "number1 and number2 should be numbers"', () => {
      jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
      expect(complexOperations.calculateArea('rectangle', '2', '5')).toBe('number1 and number2 should be numbers');
    });

		it('Passing ("square", [2], [3]) returns "number1 and number2 should be numbers"', () => {
      jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
      expect(complexOperations.calculateArea('square', [2], [3])).toBe('number1 and number2 should be numbers');
    });

		it('Passing ("rectangle", [1, 2], [3]) returns "number1 and number2 should be numbers"', () => {
      jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
      expect(complexOperations.calculateArea('rectangle', [1, 2], [3])).toBe('number1 and number2 should be numbers');
    });

		it('Passing ("triangle", [2], [0]) returns "number1 and number2 should be numbers"', () => {
      jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
      expect(complexOperations.calculateArea('triangle', [2], [0])).toBe('number1 and number2 should be numbers');
    });

		it('Passing ("circle", [1, 2], [3]) returns "number1 and number2 should be numbers"', () => {
      jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
      expect(complexOperations.calculateArea('circle', [1, 2], [3])).toBe('number1 and number2 should be numbers');
    });

		it('Passing ("circle", [2], [0]) returns "number1 and number2 should be numbers"', () => {
      jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
      expect(complexOperations.calculateArea('circle', [2], [0])).toBe('number1 and number2 should be numbers');
    });

		it('Passing (undefined, undefined, undefined) returns "undefined is not supported"', () => {
      jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(false);
      expect(complexOperations.calculateArea(undefined, undefined, undefined)).toBe('undefined is not supported');
    });

		it('Passing (null, null, null) returns "null is not supported"', () => {
      jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(false);
      expect(complexOperations.calculateArea(null, null, null)).toBe('null is not supported');
    });

		it('Passing ("square", null, null) returns "number1 and number2 should be numbers"', () => {
      jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
      expect(complexOperations.calculateArea('square', null, null)).toBe('number1 and number2 should be numbers');
    });

		it('Passing ("triangle", [2], [0]) returns "number1 and number2 should be numbers"', () => {
      jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
      expect(complexOperations.calculateArea('triangle', undefined, undefined)).toBe('number1 and number2 should be numbers');
    });
  });
  
  describe('sumGratherThan', () => {
    it('Passing no prarameters returns "The params should be numbers"', () => {
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
      expect(complexOperations.sumGratherThan()).toBe('The params should be numbers');
    });

    it('Passing (1) returns "The params should be numbers"', () => {
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
      expect(complexOperations.sumGratherThan(1)).toBe('The params should be numbers');
    });

    it('Passing (2, 3) returns "The params should be numbers"', () => {
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
      expect(complexOperations.sumGratherThan(2, 3)).toBe('The params should be numbers');
    });

    it('Passing (2, 3, 4) returns "5 is grather than 4"', () => {
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
      jest.spyOn(basicOperations, 'sum').mockReturnValue(5);
      expect(complexOperations.sumGratherThan(2, 3, 4)).toBe('5 is grather than 4');
    });

    it('Passing (2, 3, 5) returns "5 is less than 5"', () => {
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
      jest.spyOn(basicOperations, 'sum').mockReturnValue(5);
      expect(complexOperations.sumGratherThan(2, 3, 5)).toBe('5 is less than 5');
    });

    it('Passing (2, 3, 6) returns "5 is less than 6"', () => {
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
      jest.spyOn(basicOperations, 'sum').mockReturnValue(5);
      expect(complexOperations.sumGratherThan(2, 3, 6)).toBe('5 is less than 6');
    });

    it('Passing (null, null, null) returns "The params should be numbers"', () => {
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
      expect(complexOperations.sumGratherThan(null, null, null)).toBe('The params should be numbers');
    });

    it('Passing (2, null, null) returns "The params should be numbers"', () => {
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
      expect(complexOperations.sumGratherThan(2, null, null)).toBe('The params should be numbers');
    });

    it('Passing (null, null, 5) returns "The params should be numbers"', () => {
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
      expect(complexOperations.sumGratherThan(null, null, 5)).toBe('The params should be numbers');
    });

    it('Passing (undefined, undefined, undefined) returns "The params should be numbers"', () => {
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
      expect(complexOperations.sumGratherThan(undefined, undefined, undefined)).toBe('The params should be numbers');
    });

    it('Passing (undefined, 3, undefined) returns "The params should be numbers"', () => {
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
      expect(complexOperations.sumGratherThan(undefined, 3, undefined)).toBe('The params should be numbers');
    });

    it('Passing (undefined, undefined, 6) returns "The params should be numbers"', () => {
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
      expect(complexOperations.sumGratherThan(undefined, undefined, 6)).toBe('The params should be numbers');
    });

    it('Passing ("1", "2", "5") returns "The params should be numbers"', () => {
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
      expect(complexOperations.sumGratherThan('1', '2', '5')).toBe('The params should be numbers');
    });

    it('Passing ("", 2, 3) returns "The params should be numbers"', () => {
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
      expect(complexOperations.sumGratherThan('', 2, 3)).toBe('The params should be numbers');
    });

    it('Passing ([3], [2], [4]) returns "The params should be numbers"', () => {
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
      expect(complexOperations.sumGratherThan([3], [2], [4])).toBe('The params should be numbers');
    });

    it('Passing (2, 5, undefined) returns "The params should be numbers"', () => {
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
      expect(complexOperations.sumGratherThan(2, 5, undefined)).toBe('The params should be numbers');
    });

    it('Passing (1, 2, []) returns "The params should be numbers"', () => {
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
      expect(complexOperations.sumGratherThan(1, 2, [])).toBe('The params should be numbers');
    });
  });
  
  describe('intersectionBetweenArrays', () => {
    it('Passing no parameters returns "The params should be arrays"', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
      expect(complexOperations.intersectionBetweenArrays()).toBe('The params should be arrays');
    });
    
    it('Passing ([]) returns "The params should be arrays"', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
      expect(complexOperations.intersectionBetweenArrays([])).toBe('The params should be arrays');
    });

    it('Passing ([1,2,3,4]) returns "The params should be arrays"', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
      expect(complexOperations.intersectionBetweenArrays([1,2,3,4])).toBe('The params should be arrays');
    });

    it('Passing ([1,2,3,4], [2]) returns [2]', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'arrayIntersection').mockReturnValue([2]);
      expect(complexOperations.intersectionBetweenArrays([1,2,3,4], [2])).toEqual([2]);
    });

    it('Passing ([1,2,3,4], [7]) returns "There are not matching elements"', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'arrayIntersection').mockReturnValue([]);
      expect(complexOperations.intersectionBetweenArrays([1,2,3,4], [7])).toBe('There are not matching elements');
    });

    it('Passing ([1,2,3,4], []) returns "There are not matching elements"', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'arrayIntersection').mockReturnValue([]);
      expect(complexOperations.intersectionBetweenArrays([1,2,3,4], [])).toBe('There are not matching elements');
    });

    it('Passing (["a",4,5], ["a",2]) returns ["a"]', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'arrayIntersection').mockReturnValue(['a']);
      expect(complexOperations.intersectionBetweenArrays(['a',4,5], ['a',2])).toEqual(['a']);
    });

    it('Passing ([1,2,null,undefined,true,"a","b"], [true,undefined,"b",null]) returns [null,undefined,true,"b"]', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'arrayIntersection').mockReturnValue([null,undefined,true,'b']);
      expect(complexOperations.intersectionBetweenArrays([1,2,null,undefined,true,'a','b'], [true,undefined,'b',null])).toEqual([null,undefined,true,'b']);
    });

    it('Passing ([1,2,3,4], 2) returns "The params should be arrays"', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
      expect(complexOperations.intersectionBetweenArrays([1,2,3,4], 2)).toBe('The params should be arrays');
    });

    it('Passing ([1,2,3,4], [2,3], [3]) returns [2,3]', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'arrayIntersection').mockReturnValue([2,3]);
      expect(complexOperations.intersectionBetweenArrays([1,2,3,4], [2,3], [3])).toEqual([2,3]);
    });

    it('Passing (null, null) returns "The params should be arrays"', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
      expect(complexOperations.intersectionBetweenArrays(null, null)).toBe('The params should be arrays');
    });

    it('Passing (undefined, undefined) returns "The params should be arrays"', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
      expect(complexOperations.intersectionBetweenArrays(undefined, undefined)).toBe('The params should be arrays');
    });

    it('Passing (123, 1) returns "The params should be arrays"', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
      expect(complexOperations.intersectionBetweenArrays(123, 1)).toBe('The params should be arrays');
    });

    it('Passing ("abc", "c") returns "The params should be arrays"', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
      expect(complexOperations.intersectionBetweenArrays('abc', 'c')).toBe('The params should be arrays');
    });
  });
  
  describe('sortArrayOfObjectsByKey', () => {
    it('Passing no parameter returns "The first param should be an array"', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
      expect(complexOperations.sortArrayOfObjectsByKey()).toBe('The first param should be an array');
    });

    it('Passing ([{id: 1}, {id: 3}, {id: 2}]) returns "The second param should be an string"', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
      expect(complexOperations.sortArrayOfObjectsByKey([{id: 1}, {id: 3}, {id: 2}])).toBe('The second param should be an string');
    });

    it('Passing ([{id: 1}, {id: 3}, {id: 2}], "number") returns "Some elements in the array does not have the number property"', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
      jest.spyOn(basicOperations, 'arrayElementsAreObjectWithKey').mockReturnValue(false);
      expect(complexOperations.sortArrayOfObjectsByKey([{id: 1}, {id: 3}, {id: 2}], 'number')).toBe('Some elements in the array does not have the number property');
    });

    it('Passing ([], "id") returns []', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
      jest.spyOn(basicOperations, 'arrayElementsAreObjectWithKey').mockReturnValue(true);
      jest.spyOn(basicOperations, 'sortArrayByKey').mockReturnValue([]);
      expect(complexOperations.sortArrayOfObjectsByKey([], 'id')).toEqual([]);
    });

    it('Passing ("id") returns "The first param should be an array"', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
      expect(complexOperations.sortArrayOfObjectsByKey('id')).toBe('The first param should be an array');
    });

    it('Passing ([{id: 1}, {id: 3}, {id: 2}], "id") returns [ { id: 1 }, { id: 2 }, { id: 3 } ]', () => {
      let expectedResult = [ { id: 1 }, { id: 2 }, { id: 3 } ];
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
      jest.spyOn(basicOperations, 'arrayElementsAreObjectWithKey').mockReturnValue(true);
      jest.spyOn(basicOperations, 'sortArrayByKey').mockReturnValue(expectedResult);
      expect(complexOperations.sortArrayOfObjectsByKey([{id: 1}, {id: 3}, {id: 2}], 'id')).toEqual(expectedResult);
    });

    it('Passing ([{id: 1, letter: "c"}, {id: 3, letter: "b"}, {id: 2, letter: "a"}], "id") returns "[{ id: 1, letter: "c" }, { id: 2, letter: "a" }, { id: 3, letter: "b" }]"', () => {
      let expectedResult = [{ id: 1, letter: 'c' }, { id: 2, letter: 'a' }, { id: 3, letter: 'b' }];
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
      jest.spyOn(basicOperations, 'arrayElementsAreObjectWithKey').mockReturnValue(true);
      jest.spyOn(basicOperations, 'sortArrayByKey').mockReturnValue(expectedResult);
      expect(complexOperations.sortArrayOfObjectsByKey([{id: 1, letter: 'c'}, {id: 3, letter: 'b'}, {id: 2, letter: 'a'}], 'id')).toEqual(expectedResult);
    });

    it('Passing ([{id: 1, letter: "c"}, {id: 3, letter: "b"}, {id: 2, letter: "a"}], "letter") returns "[{ id: 2, letter: "a" }, { id: 3, letter: "b" }, { id: 1, letter: "c" }]"', () => {
      let expectedResult = [{ id: 2, letter: 'a' }, { id: 3, letter: 'b' }, { id: 1, letter: 'c' }];
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
      jest.spyOn(basicOperations, 'arrayElementsAreObjectWithKey').mockReturnValue(true);
      jest.spyOn(basicOperations, 'sortArrayByKey').mockReturnValue(expectedResult);
      expect(complexOperations.sortArrayOfObjectsByKey([{id: 1, letter: 'c'}, {id: 3, letter: 'b'}, {id: 2, letter: 'a'}], 'letter')).toEqual(expectedResult);
    });

    it('Passing ([{id: 1, letter: "c"}, {id: 3, letter: "b"}, {id: 2, letter: "a"}], "") returns "The second param should be an string"', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
      expect(complexOperations.sortArrayOfObjectsByKey([{id: 1, letter: 'c'}, {id: 3, letter: 'b'}, {id: 2, letter: 'a'}], '')).toBe('The second param should be an string');
    });

    it('Passing ([{id: 1, letter: "c"}, {id: 3, letter: "b"}, {id: 2, letter: "a"}], 1) returns "The second param should be an string"', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
      expect(complexOperations.sortArrayOfObjectsByKey([{id: 1, letter: 'c'}, {id: 3, letter: 'b'}, {id: 2, letter: 'a'}], 1)).toBe('The second param should be an string');
    });

    it('Passing ([{id: 1, letter: "c"}, {id: 3, letter: "b"}, {id: 2, letter: "a"}], ["id"]) returns "The second param should be an string"', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
      expect(complexOperations.sortArrayOfObjectsByKey([{id: 1, letter: 'c'}, {id: 3, letter: 'b'}, {id: 2, letter: 'a'}], ['id'])).toBe('The second param should be an string');
    });

    it('Passing ([{id: 1, letter: "c"}, {id: 3, letter: "b"}, {id: 2, letter: "a"}], ["id","letter"]) returns "The second param should be an string"', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
      expect(complexOperations.sortArrayOfObjectsByKey([{id: 1, letter: 'c'}, {id: 3, letter: 'b'}, {id: 2, letter: 'a'}], ['id','letter'])).toBe('The second param should be an string');
    });

    it('Passing ([{id: 1, letter: "c"}, {id: 3, letter: "b"}, {id: 2, letter: "a"}], undefined) returns "The second param should be an string"', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
      expect(complexOperations.sortArrayOfObjectsByKey([{id: 1, letter: 'c'}, {id: 3, letter: 'b'}, {id: 2, letter: 'a'}], undefined)).toBe('The second param should be an string');
    });

    it('Passing ([{id: 1, letter: "c"}, {id: 3, letter: "b"}, {id: 2, letter: "a"}], null) returns "The second param should be an string"', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
      expect(complexOperations.sortArrayOfObjectsByKey([{id: 1, letter: 'c'}, {id: 3, letter: 'b'}, {id: 2, letter: 'a'}], null)).toBe('The second param should be an string');
    });

    it('Passing ([{id: 1, letter: "c"}, {id: 3, letter: "b"}, {id: 2, letter: "a"}, {id: 2, letter: "d"}], "id") returns "[{ id: 1, letter: "c" }, { id: 2, letter: "a" }, { id: 2, letter: "d" }, { id: 3, letter: "b" }]"', () => {
      let expectedResult = [{ id: 1, letter: 'c' }, { id: 2, letter: 'a' }, { id: 2, letter: 'd' }, { id: 3, letter: 'b' }];
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
      jest.spyOn(basicOperations, 'arrayElementsAreObjectWithKey').mockReturnValue(true);
      jest.spyOn(basicOperations, 'sortArrayByKey').mockReturnValue(expectedResult);
      expect(complexOperations.sortArrayOfObjectsByKey([{id: 1, letter: 'c'}, {id: 3, letter: 'b'}, {id: 2, letter: 'a'}, {id: 2, letter: 'd'}], 'id')).toEqual(expectedResult);
    });

    it('Passing ([{id: 1, letter: "c"}, {id: 3, letter: "b"}, {id: 2, letter: "d"}, {id: 2, letter: "a"}], "id") returns "[{ id: 1, letter: "c" }, { id: 2, letter: "d" }, { id: 2, letter: "a" }, { id: 3, letter: "b" }]"', () => {
      let expectedResult = [{ id: 1, letter: 'c' }, { id: 2, letter: 'd' }, { id: 2, letter: 'a' }, { id: 3, letter: 'b' }];
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
      jest.spyOn(basicOperations, 'arrayElementsAreObjectWithKey').mockReturnValue(true);
      jest.spyOn(basicOperations, 'sortArrayByKey').mockReturnValue(expectedResult);
      expect(complexOperations.sortArrayOfObjectsByKey([{id: 1, letter: 'c'}, {id: 3, letter: 'b'}, {id: 2, letter: 'd'}, {id: 2, letter: 'a'}], 'id')).toEqual(expectedResult);
    });

    it('Passing (undefined, "id") returns "The first param should be an array"', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
      expect(complexOperations.sortArrayOfObjectsByKey(undefined, 'id')).toBe('The first param should be an array');
    });

    it('Passing (null, "id") returns "The first param should be an array"', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
      expect(complexOperations.sortArrayOfObjectsByKey(null, 'id')).toBe('The first param should be an array');
    });

    it('Passing ("id: 1, id: 3, id: 2", "id") returns "The first param should be an array"', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
      expect(complexOperations.sortArrayOfObjectsByKey('id: 1, id: 3, id: 2', 'id')).toBe('The first param should be an array');
    });

    it('Passing ([1, 3, 2], "id") returns "Some elements in the array does not have the id property"', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
      jest.spyOn(basicOperations, 'arrayElementsAreObjectWithKey').mockReturnValue(false);
      expect(complexOperations.sortArrayOfObjectsByKey([1, 3, 2], 'id')).toBe('Some elements in the array does not have the id property');
    });

    it('Passing (["id: 1", "id: 3", "id: 2"], "id") returns "Some elements in the array does not have the id property"', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
      jest.spyOn(basicOperations, 'arrayElementsAreObjectWithKey').mockReturnValue(false);
      expect(complexOperations.sortArrayOfObjectsByKey(['id: 1', 'id: 3', 'id: 2'], 'id')).toBe('Some elements in the array does not have the id property');
    });
  });
  
  describe('numberOfOddAndEvenNumbers', () => {
    it('Passing no parameter returns "The param should be an array"', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
      expect(complexOperations.numberOfOddAndEvenNumbers()).toBe('The param should be an array');
    });

    it('Passing (1,2,3,4,5) returns "The param should be an array"', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
      expect(complexOperations.numberOfOddAndEvenNumbers(1,2,3,4,5)).toBe('The param should be an array');
    });

    it('Passing ("1 2 3 4 5") returns "The param should be an array"', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
      expect(complexOperations.numberOfOddAndEvenNumbers('1 2 3 4 5')).toBe('The param should be an array');
    });

    it('Passing (["1","2","3"]) returns "The array should have only numbers"', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
      expect(complexOperations.numberOfOddAndEvenNumbers(['1','2','3'])).toBe('The array should have only numbers');
    });

    it('Passing ([1,2,3,4,5]) returns {odd: 3, even: 2}', () => {
      let expectedResult = {odd: 3, even: 2};
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
      jest.spyOn(basicOperations, 'getOddNumbersFromArray').mockReturnValue([1,3,5]);
      jest.spyOn(basicOperations, 'getEvenNumbersFromArray').mockReturnValue([2,4]);
      expect(complexOperations.numberOfOddAndEvenNumbers([1,2,3,4,5])).toEqual(expectedResult);
    });

    it('Passing ([1.2, 2.4, 3.7, 4, 5.1]) returns {odd: 4, even: 1}', () => {
      let expectedResult = {odd: 4, even: 1};
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
      jest.spyOn(basicOperations, 'getOddNumbersFromArray').mockReturnValue([1.2, 2.4, 3.7, 5.1]);
      jest.spyOn(basicOperations, 'getEvenNumbersFromArray').mockReturnValue([4]);
      expect(complexOperations.numberOfOddAndEvenNumbers([1.2, 2.4, 3.7, 4, 5.1])).toEqual(expectedResult);
    });

    it('Passing ([1,3,5,7,9]) returns {odd: 5, even: 0}', () => {
      let expectedResult = {odd: 5, even: 0};
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
      jest.spyOn(basicOperations, 'getOddNumbersFromArray').mockReturnValue([1,3,5,7,9]);
      jest.spyOn(basicOperations, 'getEvenNumbersFromArray').mockReturnValue([]);
      expect(complexOperations.numberOfOddAndEvenNumbers([1,3,5,7,9])).toEqual(expectedResult);
    });

    it('Passing ([2,4,6,8]) returns {odd: 0, even: 4}', () => {
      let expectedResult = {odd: 0, even: 4};
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
      jest.spyOn(basicOperations, 'getOddNumbersFromArray').mockReturnValue([]);
      jest.spyOn(basicOperations, 'getEvenNumbersFromArray').mockReturnValue([2,4,6,8]);
      expect(complexOperations.numberOfOddAndEvenNumbers([2,4,6,8])).toEqual(expectedResult);
    });

    it('Passing ([0]) returns {odd: 0, even: 1}', () => {
      let expectedResult = {odd: 0, even: 1};
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
      jest.spyOn(basicOperations, 'getOddNumbersFromArray').mockReturnValue([]);
      jest.spyOn(basicOperations, 'getEvenNumbersFromArray').mockReturnValue([0]);
      expect(complexOperations.numberOfOddAndEvenNumbers([0])).toEqual(expectedResult);
    });

    it('Passing ([]) returns {odd: 0, even: 0}', () => {
      let expectedResult = {odd: 0, even: 0};
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
      jest.spyOn(basicOperations, 'getOddNumbersFromArray').mockReturnValue([]);
      jest.spyOn(basicOperations, 'getEvenNumbersFromArray').mockReturnValue([]);
      expect(complexOperations.numberOfOddAndEvenNumbers([])).toEqual(expectedResult);
    });

    it('Passing ([1, "2", "3", 4, 5]) returns "The array should have only numbers"', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
      expect(complexOperations.numberOfOddAndEvenNumbers([1, '2', '3', 4, 5])).toBe('The array should have only numbers');
    });

    it('Passing ([1, 2, undefined, null, 5]) returns "The array should have only numbers"', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
      expect(complexOperations.numberOfOddAndEvenNumbers([1, 2, undefined, null, 5])).toBe('The array should have only numbers');
    });

    it('Passing (null) returns "The param should be an array"', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
      expect(complexOperations.numberOfOddAndEvenNumbers(null)).toBe('The param should be an array');
    });

    it('Passing (undefined) returns "The param should be an array"', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
      expect(complexOperations.numberOfOddAndEvenNumbers(undefined)).toBe('The param should be an array');
    });
  });
});