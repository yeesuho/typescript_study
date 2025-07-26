/**
 * Narrowing
 * 
 * Narrowing은 Union 타입에서 더욱 구체적인 타입으로
 * 논리적으로 유추할 수 있게 되는걸 의미한다
 */

/* 
let numberOrString: number | string = 'suho Lee';
numberOrString; // 값을 통해 어떤 타입인지 유추함 (내로잉)

const decimal = 12.3278;
console.log(decimal.toFixed(2));

numberOrString.toFixed();
*/



/**
 * Narrowing 종류
 * 
 * 1) Assignment Narrowing
 * 2) typeof Narrowing
 * 3) Truthiness Narrwoing
 * 4) Equality Narrowing
 * 5) in operator narrowing
 * 6) instanceof narrowing
 * 7) discrimatedunion narrowing (차별된 유니언 내로잉)
 * 8) exhaustiveness checking
 */

// (1) Assignment Narrowing
// 특정 값을 할당해서 내로잉
let numOrString: number | string = '이수호';

numOrString.toString();

// (2) typeof Narrowing
numOrString = Math.random() > 0.5 ? 1234 : '이수호';

if(typeof numOrString === 'string') {
    numOrString; // typeof 내로잉으로 string type이 됨
} else {
    numOrString; // number 밖에 못오니까 number type으로 내로잉
}

// (3) Truthiness Narrowing
let nullOrString: null | string[] = Math.random() > 0.5 ? null : ['이수호', '김수호'];

if(nullOrString) { // null은 false이기 때문에 true에는 string[]이 올 수 밖에 없음
    nullOrString;
} else  {
    nullOrString; // else에는 null
}

// (4) Equality Narrowing
let numOrString2: number | string = Math.random() > 0.5 ? 1234 : '이수호';
let stringOrBool2: string | boolean = Math.random() > 0.5 ? '이수호' : true;

if(numOrString2 === stringOrBool2) { // 같은 타입은 string 타입 밖에 없기 때문에 true에는 string 타입이 됨
    numOrString2;
    stringOrBool2;
} else {
    numOrString2;
    stringOrBool2; // else인 경우는 number, string, boolean 여러가지 경우의 수가 있기 때문에 다 됨
}

let numberOrStringOrNull: number | string | null = Math.random() > 0.5 ? 1234 : Math.random() > 0.5 ? '이수호' : null;

if(typeof numberOrStringOrNull === 'number') {
    numberOrStringOrNull;
} else {
    numberOrStringOrNull; // number을 제외한 다른 타입이 유추됨
}


// (5) in operator narrwoing
interface Human {
    name: string;
    age: number;
}

interface Dog {
    name: string;
    color: string;
}

let human: Human = {
    name: '이수호',
    age: 17,
}

let dog: Dog = {
    name: '까미',
    color: 'Black',
}

let humanOrDog: Human | Dog = Math.random() >0.5 ? human : dog;

console.log('name' in human) // human이라는 object에 name이라는 키값이 있는지
console.log('age2' in human) // false

if('color' in humanOrDog) {
    humanOrDog; // color 키 값은 Dog 타입에만 있기 때문에 Dog 타입이 됨
} else {
    humanOrDog; // else는 Human 밖에 없으니 자동으로 Human 타입이 됨
}

// (6) instanceof narrowing
let dateOrString: Date | string = Math.random() > 0.5 ? new Date() : '이수호';

if(dateOrString instanceof Date) {
    dateOrString; // dateOrString이 Date 타입에 속하면 이기 때문에 Date 타입이 됨
} else {
    dateOrString;
}


// (7) Discriminated Union Narrowing
interface Animal {
    type: 'dog' | 'human';
    height?: number; //좋은 방법은 아님
    //강아지 색
    color?: string
}

let animal: Animal = Math.random() > 0.5 ? {
    type: 'human',
    height: 177,
} : {
    type: 'dog',
    color: 'black'
};

if(animal.type === 'human') {
    animal.height;
} else {
    animal.color;
    animal.height;
}

interface Human2 {
    type: 'human';
    height: number;
}

interface Dog2 {
    type: 'dog',
    color: string;
}

interface Fish2 {
    type: 'fish';
    length: number;
}

type HumanOrDog2 = Human2 | Dog2 | Fish2;

let humanOrDog2: HumanOrDog2 = Math.random() > 0.5 ? {
    type: 'human',
    height: 177,
} : Math.random() > 0.5 ? {
    type: 'dog',
    color: 'black',
} : {
    type: 'fish',
    length: 12,
}

if(humanOrDog2.type === 'human') {
    humanOrDog2;
} else {
    humanOrDog2
}
// 공통되는 프로퍼티를 갖고 있는 객체의 정의를 선언할 때 하나로 뭉틍그려서 선언하는거 보다 여러개로 나눠서 선언하고 union으로 묶어주는게 타입을 정확히 유추하는데 훨씬더 유리함


//(8) Exhuastiveness Checking
switch(humanOrDog2.type) {
    case 'human':
        humanOrDog2;
        break;
    case 'dog':
        humanOrDog2;
        break;
    case 'fish':
        humanOrDog2;
        break
    default:
        humanOrDog2; 

        const _check : never = humanOrDog2; // 그 어떤 타입도 될 수 없음
        // 새로 생긴 타입을 추가하라고 미리 알려줄 수 있음
        break;
}