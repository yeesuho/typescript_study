/**
 * Tuple
 */
// javascript에 존재하진 않는 개념임

let suhoList : string[] =['이수호', '김수호', '박수호']; // 일반 array


let numberAndStringTuple: [number, string] = [ // Tuple은 순서와 크기를 강제할 수 있음
    18, '이수호'
]

numberAndStringTuple.push('김수호'); // 에러가 안남
console.log(numberAndStringTuple);

let unmodifiableTuple: readonly [number, string] = [
    18, '이수호'
]
// unmodifiableTuple.push() //readonly를 쓰면 push를 막아줌


/**
 * Tuple 유추하기
 */
let suhos = ['일수호', '이수호', '삼수호'];

let suhosTuple = ['일수호', '이수호', '삼수호'] as const;
const suhosTupleConst = ['일수호', '이수호', '삼수호'] as const;

let stringArray: string[] = [
    ...suhosTuple,
    ...suhosTupleConst,
    // ...[1,2,3] // 숫자는 당연히 안됨
]

/**
 * Named Tuple
 */
const namedTuple: [name: string, age: number] = [ // 이름을 지어줄 수 있음 기능적인건 없음
    '이수호',
    18
]

/**
 * Assigning Tuple to Tuple
 * 
 * Tuple은 같은 타입끼리만 할당이 가능하다.
 */
const tuple1: [string, string] = ['이수호', '김수호'];
const tuple2: [number, number] = [1, 2];

// let tuple3: [boolean, boolean] = tuple1;
// let tuple4: [number, number, number] = tupele2;

let tuple5: [number, number] = tuple2;

/**
 * Tuple과 Array의 관계
 */
let suho: [string, string] = [
    '이수호',
    '김수호',
]

let stringArr: string[] = suho // tuple을 일반 Array에 할당할 수 있음

// let suho2: [string, string] = stringArr; // 일반 배열이 string이 두개만 들어있지 않을 수 있기 때문에 할당이 불가능 함
// 구체적인 타입에서 덜 구체적인 타입에선 할당이 가능하지만 덜 구체적인 타입에선 구체적인 타입으로 할당이 불가능해짐

/**
 * Multi Dimesional Tuple
 */
const tuple2D: [string, number][] = [ // string, array로 구성 된 tuple이 array로 여러개 있다 라는 뜻
    ['이수호', 18],
    ['김수호', 18],
    ['박수호', 18],
]