/**
 * Casting
 * 
 * TS에서 Casting을 하면 JS에서는 적용이 안됨
 */
const suho = 'suho';
const testNumber = 14;

console.log(suho.toUpperCase());
// console.log(testNumber.toUpperCase());

let sampleNumber: any = 5;
// console.log(sampleNumber.toUpperCase());
let stringVar = sampleNumber as string; // 실제 그 타입이 아니더라도 가정을 할 수 있게 함

console.log(typeof (sampleNumber as string)); //number가 나옴 js에선 캐스팅을 해봤자 number 타입임
// ts에선 코드를 추가할 땐 캐스팅한 타입에 해당되는 메서드가 자동완성 되는 것을 볼 수 있음

let number = 5;

console.log((number as any).toUpperCase()); //오류를 잡아내지 못함
// 케스팅(as)을 쓸 땐 보통 더 구체화된 값으로 캐스팅할 떄 사용함
// casting으로 any를 남발하면 TypeScript를 쓰는 이유가 없어짐