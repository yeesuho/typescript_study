/**
 * Generic 함수에서 사용학;
 */
function whatValue(value: any) {
    return value;
}

const value = whatValue('test');

function genericWhatValue<T>(value: T):T { // 아직 뭐가 될지 모르는 존재하지 않는 타입
    return value;
}

const genericResult1 = genericWhatValue<number>(123); // <> 안에 타입과 매개변수 타입을 맞춰줘야함

const genericResult2 = genericWhatValue('123'); // const를 사용하면 변수의 타입이 '123' 타입이 되고 let을 사용하면 좀 더 넓은 범위인 string이 됨

// function multipleGenerics<x, Y, Zez> // 꼭 T로 해야하는건 아님(변수명처럼 아무렇게나 가능) 하지만 일반적으론 한글자만 사용하고 대문자로 쓰는게 보편적이다

function multipleGenerics<X, Y, Z>(x: X, y: Y, z: Z) {
    return {
        x,
        y,
        z,
    }
}

const  multipleGenericsResult = multipleGenerics<number, boolean, string>(
    123,
    true,
    '123' // 이렇게 타입에 맞게 순서대로 잘 써줘야함
)

const  multipleGenericsResult2 = multipleGenerics( // 제네릭을 명시하지 않아도 타입 추론 때문에 잘되는걸 볼 수 있음
    123,
    true,
    '123' 
)

function getTuple<X, Y>(val1: X, val2: Y) {
    return [val1, val2] as const;
}

const tuple = getTuple(true, 100);

class Suho {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Car {
    brand:string;
    codeName: string;

    constructor(brand: string, codeName: string){
        this.brand = brand
        this.codeName = codeName
    }
}

function instantiator<T extends {new (...args: any[]) : {}}>(constructor: T, ...args: any[]) {
    return new constructor(...args);
}

console.log(instantiator(Suho, '이수호', 18));
console.log(instantiator(Car, 'Porsche', 'Taycan'));