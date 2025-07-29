/**
 * Unknown Type
 */
let anyValue: any;

anyValue = 24;
anyValue = '이수호';
anyValue = false;
anyValue = [];
anyValue = {};
anyValue = null;
anyValue = undefined;

let unknownValue: unknown;

unknownValue = 24;
unknownValue = '이수호';
unknownValue = false;
unknownValue = [];
unknownValue = {};
unknownValue = null;
unknownValue = undefined;

// let anyType: any = anyValue;
// let unknownType: unknown = anyValue;
// let booleanYpe: boolean = anyValue;
// let arrayType: string[] = anyValue;
// let objectType: {} = anyValue;
// let nullType: null = anyValue;
// let undefinedType: undefined = anyType; // any 타입은 다 됨

// let anyType: any = unknownValue;
// let unknownType: unknown = unknownValue; // any 또는 unknown 타입을 제외하고선 할당할 수 없음
// let booleanYpe: boolean = unknownValue;
// let arrayType: string[] = unknownValue;
// let objectType: {} = unknownValue;
// let nullType: null = unknownValue;
// let undefinedType: undefined = unknownValue;

anyValue.toUpperCase();
anyValue.name;
new anyValue();

// unknownValue.toUpperCase();
// unknownValue.name;
// new unknownValue();

function isString(target: unknown) : target is string {
    return typeof target === 'string';
}

let testVal: unknown;

if(isString(testVal)) {
    testVal;
}


/**
 * Union Type
 */
type uOrString = unknown | string;
type uOrBoolean = unknown | boolean;
type uOrNumber = unknown | number;
type uOrAny = unknown | any;
type anyOrU = any | unknown;


/**
 * Intersection Type
 */
type uAndString = unknown & string;
type uAndBoolean = unknown & boolean;
type uAndNumber = unknown & number;
type uAndAny = unknown & any;
type anyAndY = any & unknown;

/**
 * Operator 사용
 */
let number1: unknown = 10;
let number2: unknown = 20;

// number1 + number2;
// number1 - number2;
// number1 * number2;
// number1 / number2; //이건 안됨

number1 === number2;
number1 == number2;
number1 !== number2;
number1 != number2; // 사용할 수 있는 Operator(연산자)는 이것뿐