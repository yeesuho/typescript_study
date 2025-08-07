/**
 * Inheritance
 */
class Parent {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    dance() {
        console.log(`parent: ${this.name}가 춤을 춥니다.`);
    }
}

class Child extends Parent {
    age: number;
    
    constructor(name: string, age: number) {
        super(name);

        this.age = age;
    }

    sing() {
        console.log(`child : ${this.name}가 노래를 부릅니다.`)
    }
}

const suho = new Parent('이수호')
const kami = new Child('까미', 9)

suho.dance()
kami.dance()
kami.sing()
console.log(kami.name)



let person: Parent;
person = suho;
person = kami; // Child 타입은 Parent 타입을 상속받았기 때문에 Parent 타입도 될 수 있음(자식은 부모 타입이 될 수 있다)

let person2: Child;
person2 = kami;
// person2 = suho; // 부모는 자식 타입이 될 수 없음

/**
 * optional 프로퍼티를 유의하자
 */
class Parent2 {
    name: string;

    constructor(name: string) {
        this.name = name;
    }


}

class Child2 extends Parent2 {
    age?: number;
    constructor(name: string, age?: number) {
        super(name);
        this.age = age;
    }
}

const sh2 = new Parent2('이수호');
const kami2 = new Child2('까미', 9);

let child: Child2
child = kami2;

child = sh2 // Child2에서 age가 옵셔널이기 때문에 할당이 가능해짐 (구조가 같으면 할당이 가능해짐)