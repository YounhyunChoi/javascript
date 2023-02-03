/*
산술 연산 함수를 만든다.

1. (값1, 값2, 연산자)가 parameter 이다.
2. parameter value 들은 string type 이다.
3. 연산자는 -, *, / 로 한정한다.
4. client가 연산자를 안 정하면, * 를 연산자로 쓴다.
5. 연산 결과값을 return 한다.
*/
/*
const calculate = function(value1, value2, operator='*') {
    let val1 = Number(value1)
    let val2 = Number(value2)
    let result

    switch(`${operator}`) {
        case '-': result = minus(val1, val2); break
        case '*': result = multiplie(val1, val2); break
        case '/': result = divide(val1, val2)
    }

    return result
}

const minus = function(val1, val2) {
    return val1 - val2
}

const multiplie = function(val1, val2) {
    return val1 * val2
}

const divide = function(val1, val2) {
    return val1 / val2
}

console.log(calculate('3', '3'))
*/
let calculate = function(a, b, op='*') {
    let result

    switch(op) {
        case '-': result = a - b; break
        case '*': result = a * b; break
        case '/': result = a / b
    }

    return result
}

console.log(calculate('1', '2', '-'))
console.log(calculate('2', '2'))