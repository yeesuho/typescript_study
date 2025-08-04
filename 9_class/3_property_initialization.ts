/**
 * Property Initialization
 */
class Person {
    // 일반적인 필수값 선언법
    name: string;
    // 초기값 제공 선언법
    age: number = 23;
    //optional 값 선언법
    pet?: string;
    // type of undefined 선언법
    petAge: number | undefined;

    constructor(name: string, pet?: string) {
        this.name = name;
        // age는 초기값을 제공(선언과 할당)헀기 때문에 constructor에서 값을 받지 않아도 됨

        // pet도 옵셔널로 값을 넣어도 되고 안넣어도 되기 때문에 constructor에서 값을 받고 싶다면 받아도 되고 안받아도 됨
        this.pet = pet;
    }
}

class RouteStack {
    stack!: string[];

    constructor() {
        this.initialzie();
    }

    initialzie() {
        this.stack = [];
    }
}

const routeStack = new RouteStack();
console.log(routeStack);