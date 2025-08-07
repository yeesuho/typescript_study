/**
 * Override
 */
/**
 * 메서드 override
 */
class Parent {
    shout(name: string) {
        return `${name}아 안녕!`
    }
}

class WrongChild extends Parent {
    // 오버라이딩 규칙
    // 1) 부모 메서드와 반환 타입이 일치해야한다.
    // 2) 부모 메서드에 필수인 파라미터들이 존재해야한다.
    // 3) 부모 메서드에서 optional인 파라미터들이 자식에서 필수로 지정되면 안된다.
    // shout() {

    // }
}

class Child extends Parent {
    // 오버라이딩 규칙
    // 1) 부모 메서드와 반환 타입이 일치해야한다.
    // 2) 부모 메서드에 필수인 파라미터들이 존재해야한다.
    // 3) 부모 메서드에서 optional인 파라미터들이 자식에서 필수로 지정되면 안된다.
    shout(name: string, me?: string): string {
        if(!me) {
            return super.shout(name);
        } else {
            return super.shout(name) + ` 내이름은 ${me}야!`
        }
    } // 3개의 룰을 전부 지켜서 오버라이드를 해주면 자식에서 부모에 존재하는 메서드를 덮어쓸 수 있다.
}

const child = new Child();
console.log(child.shout('까미'));
console.log(child.shout('까미','이수호'));



/**
 * 속성 override
 */
class PropertyParent{
    name: string;
    constructor(name: string) {
        this.name = name
    }
}

// class PropertyChild extends PropertyParent {
//     name: number; // 이러면 never 타입

//     constructor(name: number) {
//         this.name = name;
//     }
// }

class PropertyParent2 {
    name?: string|number;

    constructor(name: string|number) {
        this.name = name;
    }
}

class PropertyChild2 extends PropertyParent2 {
    name: string;

    constructor(name: string) {
        super(name);
        this.name = name;
    }
}

const child2 = new PropertyChild2('하이')
child2.name