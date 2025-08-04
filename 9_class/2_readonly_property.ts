/**
 * readonly 프로퍼티
 */

class Suho {
    readonly name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const suHo = new Suho('이수호', 18);

suHo.age = 32;
// suHo.name = '김수호'; // readonly 프로퍼티이기 때문에 값을 할당할 수 없다