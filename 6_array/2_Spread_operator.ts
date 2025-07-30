/**
 * Spread Operator
 */
const onlyString = ['1', '2', '3', '4'];
const onlyNumbers = [1, 2, 3, 4];

const arr1 = [
    ...onlyString,
]

console.log(arr1[1])

const arr2 = [ 
    ...onlyString,
    ...onlyNumbers, // spread 연산자로 두 타입을 넣으면 (string | number)[] 로 됨
]