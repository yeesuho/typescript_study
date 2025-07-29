/**
 * Function Type
 */
type Mapper = (x: string) => string;

const runner = (callback: Mapper) => {
    return ['이수호', '김수호', '박수호'].map(
        callback,
    );
}

console.log(runner((x) => `이름이 수호인 사람: ${x}`,));

type MultiplyTwoNumbers = (x: number, y: number) => number;

const multiplyTwoNumbers: MultiplyTwoNumbers = (x,y) => {
    return x + y;
}


/**
 * Interface로 함수 타입 선언하기
 */
interface IMultiplyTwoNumbers {
    (x: number, y: number): number;
}

const multiplyTwoNumbers3: IMultiplyTwoNumbers = (x,y) => { // 함수의 타입도 typescript definition정할 수 있다는 것 알아두기
    // return true;
    return x*y;
}