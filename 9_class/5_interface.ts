/**
 * Interface
 */
interface Animal {
    name: string;
    age: number;
    jump(): string;
}

class Dog implements Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    
    jump():string {
        return `${this.name}가 점프를 합니다`
    }

    dance() { // 구현부분에 새로운 함수를 정의하는건 상관없음 (초과되는건 괜찮지만 미달되면 안됨)

    }
}

let kami: any = new Dog('까미', 9);

function instanceOfAnimal(object:any): object is Animal {
    return 'jump' in object;
}

if(instanceOfAnimal(kami)) {
    kami;
}

/**
 * 다중 인터페이스 구현
 */
interface Pet {
    legsCount: number;
    bark():void;
}

class Dog2 implements Animal, Pet { // Animal과 Pet에 정의된 모든 값들을 다 이행해줘야 됨
    // Animal
    name: string;
    age: number;

    // Pet
    legsCount: number;

    constructor(name: string, age: number, legsCount: number) {
        this.name = name;
        this.age = age;
        this.legsCount = legsCount;
    }

    // Animal
    jump(): string {
        return `${this.name}가 점프를 합니다.`;
    }

    // Pet
    bark(): void {
        console.log('멍멍');
    }
}

// 이걸 할 수 있는 또 다른 방법
type AnimalAndPet = Animal & Pet;

class Dog3 implements AnimalAndPet {
    // Animal
    name: string;
    age: number;

    // Pet
    legsCount: number;

    constructor(name: string, age: number, legsCount: number) {
        this.name = name;
        this.age = age;
        this.legsCount = legsCount;
    }

    // Animal
    jump(): string {
        return `${this.name}가 점프를 합니다.`;
    }

    // Pet
    bark(): void {
        console.log('멍멍');
    }
}


// 안되는 상황
interface WrongInterface1 {
    name: string;
}

interface WrongInterface2 {
    name: number;
}

// class Person implements WrongInterface1, WrongInterface2 {
//     // name: string;
//     // name: number;
//     // name: number | string; // name과 string을 둘다 만족해야하지만 그럼 never 타입이 되기 때문에 에러 발생(중복되는 프로퍼티의 타입은 통일을 잘 시켜줘야됨)
// }

// inteface로 클래스 타입 선언해보기
class Suho {
    name: string;
    age: number;

    constructor(name:string, age: number) {
        this.name = name;
        this.age = age;
    }
}
// constructor의 형태를 interface로 만들고 싶다면
interface SuhoConstructor {
    new (name:string, age: number): Suho; // 이게 위에 constructor의 정의
}

function createSuho(constructor: SuhoConstructor, name: string, age: number) {
    // return new Suho(name, age);
    return new constructor(name, age); //일반적인 new Suho(...) 대신 생성자를 매개변수로 받아 유연하게 객체 생성을 할 수 있음
}

console.log(createSuho(Suho, '이수호', 17));