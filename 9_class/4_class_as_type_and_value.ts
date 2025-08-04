/**
 * Class as Type and Value
 */
class Dog {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    bark() {
        return `${this.name}가 짖습니다`;
    }
}

let kami = new Dog('까미'); // Dog라는 타입을 생성하지 않았지만 class 자체가 타입이 됨
console.log(kami.bark());

// kami = '까미'; // Dog 타입이기 때문에 할당할 수 없음
// 하지만 특수한 객체로는 할당할 수 있음
kami = { // 자바스크립트에선 객체로 클래스를 만들기 때문에(객체와 클래스가 같은 타입이기 때문에) 할당할 수 있게 됨
    name: '김까미',
    bark() {
        return `${this.name}가 짖습니다.`
    }
}

console.log(kami);