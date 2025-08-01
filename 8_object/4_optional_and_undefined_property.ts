/**
 * Optional and Undefined Property
 */
interface Dog {
    name: string;
    age: number;
    // 종을 모르면 undefined를 넣어도 괜찮음
    type?: string // optinal
}

const black: Dog = {
    name: '까미',
    age: 9,
    type: '푸들', // 마우스를 커서를 대보면 string|undefined 인것을 알수있음
}

const ori: Dog = {
    name: '오리',
    age: 3,
}
// 그럼 실제로 type에 undefined라고 타입을 선언해버리는 거랑 뭐가 다른가 의문이 생길 수 있음
interface Cat {
    name: string;
    age: number;
    breed: string | undefined; // ? <- 옵셔널을 입력하지 않으면 객체에 프로퍼티에 직접 무조건 입력을 해줘야함 (옵셔널을 붙이면 안넣어도 자동으로 undefined가 됨)
}

// const nabi: Cat = {
//     name: '나비',
//     age: 7,
// }