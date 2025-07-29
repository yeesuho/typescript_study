/**
 * Loopholes of Any
 */
let number: number;
number = 10;

// number.toUpperCase();

// (number as any).toUpperCase();
// any를 남발하거나 마음대로 캐스팅하면 안됨


const multiplyTwo = (x: number, y: number) => {
    return x * y;
}

let args1: any = '이수호';
let args2: any = true;

multiplyTwo(args1, args2); // typescript가 에러를 잡아주지 못함 any 타입 남발X

let suho: any = {name: '수호', age: 17};
suho;

const callbackRunner = (x: number, y: number, callback: any)=> {
    return callback(x); // 매개변수에 x는 있지만 y는 undefined라서 callback 함수는 NaN을 반환하게 되지만 any 타입을 사용했기 때문에 아무런 에러를 받을 수 없음
}

const callback = (x:number, y:number)=> {
    return x * y;
}

console.log(callbackRunner(5, 4, callback));