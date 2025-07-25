"use strict";
/**
 * Types
 */
let helloText = 'Hello';
//hellowText = true; // 명시된 타입 외에 다른 타입은 정의할 수 없음
/**
 * 7개의 타입
 */
const stringVar = 'String';
const numberVar = 3; // 여기서 볼 수 있는 규칙: 소문자
const bigIntVar = BigInt(999999);
const booleanVar = true;
const symbolVar = Symbol(1);
const nullVar = null;
const undefinedVar = undefined;
/**
 * TS에만 존재하는 타입
 */
// any - 아무 타입이나 입력할 수 있는 치트키 같은 타입
let anyVar;
anyVar = 100;
anyVar = '이수호';
anyVar = true;
//any를 많이 쓰면 typescript를 쓰는 이유가 없어짐
let testNumber = anyVar;
let testString = anyVar;
let testBoolean = anyVar;
//unknown - 알 수 없는 타입
let unknownType;
unknownType = 100;
unknownType = '이수호';
unknownType = true;
/*
let testNumber2: number = unknownType;

let testString2: string = unknownType;

let testBoolean2: boolean = unknownType; // any 타입과 다르게 오류가 남 이게 any와 unknown타입의 가장 큰 차이점
 */
let unknownType2 = unknownType;
let anyType2 = unknownType; // unknown 타입은 any 타입이나 unknown 타입이 아닌 다른 타입에는 할당할 수 없음
// never - 어떠한 타입도 저장되거나 반환되지 않을 떄 사용하는 타입
/*
let neverType: never = null;
let neverType: never = undefined;
let neverYpe: never = 'test';
*/
// never 타입은 어떠한 타입도 아님
/**
 * 리스트 타입
 */
const suhoList = ['이수호', '김수호', '박수호']; // 리스트에 타입을 정하고 싶으면 타입 뒤에 []를 붙여줘야함
const booleanList = [true, false, false, true];
