/**
 * Never Type
 */
// (1) 함수에서 에러를 던질 때
function throwError(): never {
    throwError();
}

// (2) 무한 루프
function infiniteLoop(): never {
    while(true) {

    }
}

// (3) 존재할 수 없는 인터섹션
type StringAndNumber = string & number;

// let neverType: never = 10;
// let neverType: never = undefined;
// let neverType: never = null;

// never 타입은 일어날 수 없는 상황에 주는 타입