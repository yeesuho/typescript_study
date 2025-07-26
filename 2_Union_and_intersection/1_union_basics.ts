/**
 * Union Basics
 * 
 * 유니언은 TS에서 타입을 병합할 수 있는 수많은 방법 중 하나이다.
 */
type StringOrBooleanType = string | boolean;

let stringOrBooleanType: StringOrBooleanType = '이수호';
stringOrBooleanType = true;

// stringOrBooleanType = undefined; // string이나 boolean이 아니기 때문에 오류가 남

type StrBoolNullType = string | boolean | null;

type StateTypes = 'DONE' | 'LOADING' | 'ERROR';

let state: StateTypes = 'DONE';
state = 'LOADING';
// state = 'INITIAL';


/**
 * 리스트의 유니언
 */
// string으로 구성된 리스트 또는 boolean으로 구성된 리스트
type StringListOrBooleanList = string[] | boolean[];

let strListOrBooleanList:StringListOrBooleanList = [
    '이수호',
    '김수호',
    '박수호'
]

strListOrBooleanList = [
    true,
    false,
    false,
    true
]

/* 
strListOrBooleanList = [
    '이수호',
    true
] // 이건 안됨 
*/
// 위에를 되게 하려면
type StrOrNumberList = (string | number)[]; // Union(|)이 어디에 들어가있는지도 중요함

let stringOrNumberList = [
    1, 2, 3,
    '이수호',
    '김수호',
];

stringOrNumberList = [
    1,2,3
]

stringOrNumberList = [
    '이수호',
    '김수호'
]

// stringOrNumberList = [
//     true,
//     false,
// ]


/**
 * Interface로 사용하는 union
 */
interface Animal {
    name: string;
    age: number;
}

interface Human {
    name: string;
    age: number;
    address: string;
}

type AnimalOrHuman = Animal | Human;

let animalOrHuman: AnimalOrHuman = {
    name: '이수호',
    age: 17,
    address: '대한민국',
}

console.log(animalOrHuman);
console.log(animalOrHuman.name);
console.log(animalOrHuman.age);
console.log(animalOrHuman.address); // Human은 잘됨

animalOrHuman = {
    name: '오리',
    age: 9,
}

console.log(animalOrHuman);

console.log(animalOrHuman.name);
console.log(animalOrHuman.age);
// console.log(animalOrHuman.address); // address 존재하지 않는다
console.log((animalOrHuman as Human).address); // 타입캐스팅을 해주면 address가 존재한다고 착각하게 만듬 하지만 남발하면 안됨

let animalOrHuman2: {
    name: string;
    age:number;
} | {
    name: string;
    age: number;
    address: string;
} = {
    name: '이수호',
    age: 17,
    address: '대한민국',
}

console.log(animalOrHuman2.address);
console.log(animalOrHuman2.name);
console.log(animalOrHuman2.age);

animalOrHuman2 = {
    name: '오리',
    age: 9
}


//서로 관계가 없는  유니언을 선언하면 어떻게 될까
type Person = {
    name: string;
    age: number;
}

type Cat = {
    breed: string;
    country: string;
}

type PersonOrCat = Person | Cat; // Union은 합집함의 개념

const personOrCat: PersonOrCat = {
    // name: '이수호',
    // age: 17,
    breed: 'Yorkshire Terrier',
    country: '영국', // 어떤 타입도 충족되지 않은 상태가 만들어지면 안됨
}