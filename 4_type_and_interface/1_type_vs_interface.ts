/**
 * Type vs Interface
 */
// 타입과 인터페이스가 중복되는 개념이 많은 이유는 타입이 먼저 만들어지고 인터페이스가 후에 만들어짐 
// 타입의 안되는 몇가지 기능을 인터페이스에서 추가하다보니 둘이 겹치는 기능이 있게 됨
// 하지만 인터페이스가 타입을 완전히 대체하려고 나온것은 아님
// 그렇다보니 인터페이스는 할 수 있지만 타입이 못하는 것 타입이 할 수 있지만 인터페이스가 못하는 것이 존재함

// Object 선언할 때
interface IObject {
    x:number;
    y:number;
}

type TObject = {
    x: number;
    y: number;
}

// function 선언할 때
interface IFunction {
    (x: number, y: number) : number;
}

type TFunction = (x: number, y: number) => number;


/**
 * Type에서는 할 수 있지만
 * interface에서는 할 수 없는 것들
 */

// (1) primitive 타입 선언하기
type Name = string; // primitive 타입을 새로운 타입으로 선언하는건 type만 가능. 애초에 interface는 객체형태로 선언되기 때문에 단순 primitive 타입을 이름을 바꾸는 형태를 할 수 없음

// (2) uion 타입 선언하기
type UnionType = string | number; // 타입을 직접적으로 Union이나 intersection 하는 방법은 타입 밖에 없음

// (3) primitive list 또는 tuple 타입 선언하기
type TupleType = [number, string];


/**
 * Interface는 할 수 있고
 * Type은 못하는 것
 */

// interface merging
interface IRectangle {
    height: number;
}

interface IRectangle {
    width: number;
}

let rectangle: IRectangle = {
    height: 200,
    width:100,
} // interface는 중복 선언 했을 때 모두 합쳐짐

// type TRectangle = {
//     height: number;
// }

// type TRectangle = {
//     width: number;
// }

/**
 * Interface Merging
 */
class Review {
    // 프로퍼티
    getY = (x: number) => {return x};

    // 메서드
    getX(x: number) {
        return x;
    }
}

interface GetXnY {
    getX: (x: number) => number;
    getY: (y: number) => number;
}

interface GetXnY {
    getX: (x: number) => number;
    // getY: (y: number) => number;
}

interface GetXnY2 {
    getX(x: number): number;
    getY(y: number): number;
}

interface GetXnY2 {
    getX(x: number): number;
    getY(y: string): number;
}

const textMethod: GetXnY2 = {
    getX(x) {
        return x;
    },
    getY(y) {
        return 1;
    }
}