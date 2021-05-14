// 3일차
//console.log(console);

function sayHello(name, age){
    return (`Hello ${name} you are ${age} years old`);
};

const greetYuna = sayHello("Yuna", 18);
// greetYuna => sayHello의 리턴값
console.log(greetYuna);

const calculator = {
    plus : function(a, b){
        return a + b;
    }
}
const plus = calculator.plus(5, 5);
console.log(plus);
