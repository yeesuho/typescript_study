/**
 * Abstract class
 */
abstract class ModelWithId {
    id: number;

    constructor(id: number) {
        this.id = id;
    }
} // 그래서 abstract class를 어떨때 쓰냐 : abstract class 자체로는 인스턴스화 할일이 절대 없지만
// 공유되는 값들을 프로퍼티나 메서드로 정의하고 싶을 때 그리고 다른 곳에서 상속을 받을 때 abstract class를 많이 사용함

// const modelWidthId = new ModelWithId(123); // abstract 클래스는 직접 선언이 절대 불가능

class Product extends ModelWithId { // ModelWithId의 프로퍼티를 모두 상속 받을 수 있게 됨

}

const product = new Product(1)
product.id
console.log(product.id)


abstract class ModelWithAbstractMethod {
    abstract shout(name: string): string; // 추상 메서드이기 때문에 구현은 하지 않음
}

class Person extends ModelWithAbstractMethod { // 상속받은 abstract class의 메서드를 구체화 해줘야함
    shout(name: string): string {
        return `${name} 악!`;
    }
}

const person = new Person;

console.log(person.shout('까미'));