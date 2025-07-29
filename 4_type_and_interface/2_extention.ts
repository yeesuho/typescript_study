/**
 * Extension
 */
interface IName {
    name: string;
}

interface ISuho extends IName {
    age: number; // 클래스를 상속하는 것 처럼 interface도 상속을 하게 되면 상속받은 모든 프로퍼티들을 받을 수 있다
} // 어떻게 보면 interface merging이랑 똑같음 다만 인터페이스의 이름이 달라도 이렇게 가져올 수 있음

const suho: ISuho = {
    name: '이수호',
    age: 17,
}

type TName = {
    name: string;
}

type TSuho = TName & {
    age: number
};

const suho2: TSuho = {
    name: '이수호',
    age: 17,
}

// type은 type끼리 interface는 interface 끼리 extends를 해야하는건 또 아님
interface ISuho2 extends TName {
    age: number; // interface로도 타입을 상속받을 수 있다
}

const suho3: ISuho2 = {
    name: '이수호',
    age: 17,
}

//반대로
type TSuho2 = IName & {
    age: number; // intersection으로 extends를 하게 되면
}

const suho4: TSuho2 = {
    name: '수호',
    age: 17,
}
/**
 * interface에서 상속 받을 땐 extents를 사용하고
 * type에서 상속 받을 땐 & 키워드로 상속을 받는다
 */


/**
 * extending multiple
 */
type DogName = {
    name: string;
}

type DogAge = {
    age: number;
}

type DogColor = {
    color: string;
}

type Dog = DogName & DogAge & DogColor; // 무한히 할 수 있음

const dog: Dog = {
    name: '까미',
    age: 8,
    color: 'black',
}


interface CatName {
    name: string;
}
interface CatAge {
    age: number;
}
interface Cat extends CatName, CatAge { // interface도 이런식으로 여러개 가능
    color: string;
}

const cat: Cat = {
    name: '김까미',
    age: 8,
    color: 'black',
}


/**
 * Overriding
 */
type THeight = {
    height: number;
}

type TRectangle = THeight & {
    height: string; // heigt는 number와 string을 둘 다 만족시킬 수 없기 때문에 never 타입이 됨
    width: number;
}

// const rectangle: TRectangle = {
//     height: , // never 타입이 됨
//     width: 100,
// }

type TWidth = {
    width: number | string; // union을 하게 되면 정확한 타입으로 내로잉할 순 있게 됨
}

type TRectangle2 = TWidth & {
    width: number, // number 또는 string 에서 내로잉이 된것
    height: number;
}

const rectangle: TRectangle2 = {
    height: 100,
    width: 200,
}


interface IHeight {
    height: number;
}

// interface IRectangle extends IHeight {
//     height: string;
//     width: number;
// }

interface IWidth {
    width: number | string;
}

interface IRectangle extends IWidth {
    height: number;
    width: number;
}

// type 같은 경우에는 never 타입이 나오는 경우에도 상속이 가능하게 해준다
// interface 같은 경우에는 never 타입이 나오는 경우에는 extends를 못하게 에러로 막는다