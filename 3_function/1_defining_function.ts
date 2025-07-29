/**
 * Defining Function
 */

// function printName(name) {
//     console.log(name)
// }

function printName(name: string) {
    console.log(name);
}

function returnTwoCouples(person1: string, person2: string) {
    return `${person1}와 ${person2}는 사귀고 있습니다.`
}

console.log(returnTwoCouples('이수호', '김수호'));

//returnTwoCouples(0, 1); // 타입이 잘 못 입력된 경우를 방지할 수 있음
// returnTwoCouples('이수호');
// returnTwoCouples('이수호','김수호', '박수호'); // 1개 이거나 3개여도 안됨

/**
 * Optional Parameter
 */
function multiplyOrReturn(x: number, y?: number) {
    if(y) {
        return x * y;
    } else {
        return x;
    }
}

console.log(multiplyOrReturn(10, 20));
console.log(multiplyOrReturn(10));

function multiplyOrReturn2(x: number, y: number = 20) {
    return x * y;
}

console.log(multiplyOrReturn2(2));
console.log(multiplyOrReturn2(2, 10));

/**
 * 나머지 매개변수
 */
function getInfiniteParameters(...args: string[]) {
    return args.map((x) => `하이 ${x}`);
}

console.log(getInfiniteParameters('이수호','김수호','박수호'))
// console.log(getInfiniteParameters(1,2,3)) // 이건 당연히 안됨 string 타입으로 명시했기 때문에



/**
 * Return Type
 */
function addTwoNumbers(x: number, y: number) {
    return x + y;
}

addTwoNumbers(10, 20); // 마우스를 갖다댔을때 함수 뒤에 써져있는 타입은 반환 값의 타입임

function randomNumber() {
    return Math.random() > 0.5 ? 10 : '랜덤';
}

randomNumber();

function subractTwoNumbers(x: number, y: number): number {
    // return '이게 반환이 되나?';
    return x - y;
}


const subtracTwoNumbersArrow = (x: number, y: number) : number => {
    return x - y;
}

/**
 * 특수 반환 타입
 * 
 * void / never
 */

function doNotReturn(): void{ // void는 반환하지 않음 (공허)
    console.log('저는 반환을 하지 않습니다.')
}

doNotReturn()

function neverEndingLoop(): never {
    while(true) {

    }
}

// throwError();


function throwError2(): never {
    throw Error();
} ;