/**
 * Statement and Expression
 */

// statement(문장)
function addTwoNumbers(x: number, y: number) {
    return x + y;
}

// expression (표현식)
const addTwoNumbersExp = (x: number, y: number)=> {
    return x + y;
}

/**
 * Statement
 */
function add(x: number, y: number): number {
    return x+y;
}

function subtract(x: number, y: number): number {
    return x-y;
}

function muliply(x: number, y: number): number {
    return x*y;
}

function devide(x: number, y: number): number {
    return x/y;
}

/**
 * Expression
 */
type CalculationType = (x: number, y: number) => number;

const add2: CalculationType = function(x, y) {
    return x + y;
}

const subtractd2: CalculationType = function(x, y) {
    return x - y;
}

const multiply2: CalculationType = function(x, y) {
    return x * y;
}

const divide2: CalculationType = function(x, y) {
    return x / y;
}

// Statement처럼 반복적으로 타입을 명시해주는 것 보다 type으로 선언한 다음에 반복적으로 선언하는게 더욱 깔끔하고 가독성이 좋음