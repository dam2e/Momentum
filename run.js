function sayHello (name, age){ // parameter(매개변수) : 함수를 만드는 시점에 인자 값을 넣음
    // 👇 이렇게 사용하면 undefined 발생
    // coonsole.log(`Heelo! ${name} you have ${age} years old`);
    return `Heelo! ${name} you have ${age} years old`
}

const greetDami = sayHello('Dami.', 29); // greetDami 는 sayHello의 리턴 값
console.log(greetDami);

// Math 객체
const calculator = {
    plus: function(a, b){ // 2개의 인자를 갖는 함수
        return a + b;
    },
    minus: function(a, b){
        return a - b;
    },
    multiply: function(a, b){
        return a * b;
    },
    divide: function(a, b){
        return a / b;
    },
    power: function(a, b){
        return a ** b;
    }
}

const plus = calculator.plus(5,5);
const minus = calculator.minus(5,5);
const multiply = calculator.multiply(5,5);
const divide = calculator.divide(5,5);
const power = calculator.power(5,5);

console.log(`plus : ${plus}, minus : ${minus}, multiply : ${multiply}, divide : ${divide}, power : ${power}`);