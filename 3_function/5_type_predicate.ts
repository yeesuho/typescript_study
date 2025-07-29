/**
 * Type Predicate
 */
function isNumber(input: any): input is number {
    return typeof input === 'number';
}

console.log(isNumber(10));

function isNumberRetBool(input:any): boolean {
    return typeof input === 'number';
}

let number: any = 5;

if(isNumberRetBool(number)) {
    number; 
}

if(isNumber(number)) {
    number;
}
//일종의 내로잉

interface Doge {
    name: string;
    age: number;
}

interface Cat {
    name: string;
    color: string;
}

type DogeOrCat = Doge | Cat;

function isDoge(animal: DogeOrCat): animal is Doge {
    return (animal as Doge).age !== undefined;
}

const doge: DogeOrCat = Math.random() > 0.5 ? {
    name: '도지',
    age: 18,
} : {
    name: '오리',
    color: 'yellow'
}

if(isDoge(doge)) {
    doge;
} else {
    doge; // Cat을 형성할 수 있는 형태가 없으면 never 타입이 나옴
}