const stringLength = require('./index');

const string1 = "hello";
const string2 = "";
const string3 = "This is a test string!";
const string4 = "a";
const string5 = "1234567890";
const string6 = "waytoolongstring";

describe('stringLength', () => {
    it('should return the correct length for a valid string', () => {
      expect(stringLength('hello')).toBe(5);
      expect(stringLength('a')).toBe(1);
      expect(stringLength('1234567890')).toBe(10);
    });

    it('should throw an error for an empty string', () => {
      expect(() => {
        stringLength('');
      }).toThrow('Input string must be between 1 and 10 characters long');
    });

    it('should throw an error for a string that is too long', () => {
      expect(() => {
        stringLength('waytoolongstring');
      }).toThrow('Input string must be between 1 and 10 characters long');
    });
  });

  const reverseString = require('./index');

  describe('reverseString', () => {
      it('should reverse a string correctly', () => {
        expect(reverseString('hello')).toBe('olleh');
        expect(reverseString('racecar')).toBe('racecar');
        expect(reverseString('12345')).toBe('54321');
      });
    });

    const Calculator = require('./index');

    describe('calcultor', () => {
        let calculator;

        beforeEach(() => {
            calculator = new Calculator();
        });

        describe('add', () => {
            test('adds two positive numbers', () => {
            expect(calculator.add(2, 3)).toBe(5);
            });

            test('adds a positive and a negative number', () => {
            expect(calculator.add(2, -3)).toBe(-1);
            });

            test('adds two negative numbers', () => {
            expect(calculator.add(-2, -3)).toBe(-5);
            });
        });
        describe('subtract', () => {
            test('subtract two positive numbers', () => {
              expect(calculator.subtract(5, 2)).toBe(3);
            });

            test('subtract a positive and a negative number', () => {
              expect(calculator.subtract(5, -2)).toBe(7);
            });

            test('subtract two negative numbers', () => {
              expect(calculator.subtract(-2, -3)).toBe(1);
            });
          });
        describe('multiply', () => {
            test('subtract two positive numbers', () => {
              expect(calculator.multiply(5, 2)).toBe(10);
            });

            test('multiply a positive and a negative number', () => {
              expect(calculator.multiply(5, -2)).toBe(-10);
            });

            test('multiply two negative numbers', () => {
              expect(calculator.multiply(-2, -3)).toBe(6);
            });
          });
        describe('divide', () => {
            test('divide two positive numbers', () => {
              expect(calculator.divide(10, 2)).toBe(5);
            });

            test('divide a positive and a negative number', () => {
              expect(calculator.divide(10, -2)).toBe(-5);
            });

            test('divide two negative numbers', () => {
              expect(calculator.divide(-10, -2)).toBe(5);
            });
        });
    });

    const capitalize = require('./index');

    describe('capitalize', () => {
        it('capitalize the first letter of a string', () => {
            expect(capitalize('hello')).toBe('Hello');
            expect(capitalize('hamza')).toBe('Hamza');
        });
        it('return an empty string if the input is empty', () => {
            expect(capitalize('')).toBe('');
        });
        it('return the input if the first letters is already capitalized', () => {
            expect(capitalize('Hello')).toBe('Hello');
            expect(capitalize('Hamza')).toBe('Hamza');
        });
        it('throw an error if the input is not a sting', () => {
            expect(() => capitalize(null)).toThrow();
            expect(() => capitalize(undefined)).toThrow();
            expect(() => capitalize(123)).toThrow();
            expect(() => capitalize({})).toThrow();
            expect(() => capitalize([])).toThrow();
        });
    });