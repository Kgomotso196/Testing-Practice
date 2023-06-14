const stringLength = (string) => {
    const length = string.length;
    if(length < 1 || length > 10){
        throw new Error('Input string must be between 1 and 10 characters long');
  }
  return length;
}

const reverseString = (string) => {
    return string.split("").reverse().join("");
}

class calculator {
    add(x,y) {
        return x + y;
    }
    subtract(x,y) {
        return x - y;
    }
    multiply(x,y) {
        return x * y;
    }
    divide(x,y) {
        if (y === 0){
            throw new Error('Cannot divide by zero'); 
        }
        return x / y;
    }
}

const capitalize = (string) => {
    if(typeof string !== 'string'){
        throw new Error('Input must be a string');
    }
    if(string.length === 0) {
        return '';
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = {
    stringLength, reverseString, calculator, capitalize,
};
