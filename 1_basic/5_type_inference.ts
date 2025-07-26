/**
 * Type Inference
 * 
 * 타입 추론
 */
let stringType = 'string'; // 변수에 타입을 명시 하지 않아도 자동으로 추론함
let booleanType = true;
let numberType = 30;

booleanType = false;

// booleanType = 'false'; // boolean 타입으로 정해졌기 때문에 string 바꿀 수 없음


const constStringType = 'const string';
const constBooleanType = true; // const를 사용하면 더 구체적인 타입이 된다는걸 알 수 있음

let suHo = {
    name: '이수호',
    year: 2008,
}

const suHo2 = {
    name: '이수호',
    year: 2008,
}
suHo2.name = '김수호';
console.log(suHo2);


// 객체의 각각의 프로퍼티를 더 구체화 된 타입으로 유추되도록 할려면
const suHo3 = {
    name: '이수호' as const, // name과 year을 const로 구체적으로 캐스팅한 것
    year: 2008 as const,
}

suHo3.name = '이수호';
// suHo3.name = '김수호'; // casting한 값이 아닌 값은 넣을 수 없음

console.log(suHo3.name);
console.log(suHo2.name);



/**
 * Array
 */
let numbers = [1, 2, 3, 4, 5];
let numbersAndString = [1, 2, 3, '4', '5', '6'];

numbers.push(6); // number니까 6은 잘 들어감
// numbers.push('6'); // string 6은 X
const number = numbers[0];
const nos = numbersAndString[0];
const nos2 = numbersAndString[100]; // array는 없는 값을 가져와도 모름


// tuple
const twoNumbers = [1, 3] as const;

//twoNumbers[0] = 10;
//twoNumbers.push(100);
const first = twoNumbers[0];
// const first2 = twoNumbers[3]; // 튜플은 자신의 길이를 알고 있음 오류를 미리 잡아냄