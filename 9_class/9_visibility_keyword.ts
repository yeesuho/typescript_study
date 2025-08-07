/**
 * Visibility Keyword
 * 
 * 1) public (기본값) - 어디서든 접근이 가능하다
 * 2) protected - 현재 클래스 및 하위 (자식) 클래스에서 접근 가능하다.
 * 3) private - 현재 클래스 내부에서만 접근 가능하다.
 */
class PropertyTestParent {
    public publicProperty = 'public property';
    protected protectedProperty = 'protected property';
    private privateProperty = 'private property';
    #jsPrivateProperty = 'js private property';

    test() {
        this.publicProperty;
        this.protectedProperty;
        this.privateProperty;
        this.#jsPrivateProperty;
    }
}


class PropertyTestChild extends PropertyTestParent {
    test() {
        this.publicProperty;
        this.protectedProperty;
        // this.privateProperty; // 자신의 클래스 내부에서만 접근 가능하기 때문에 자식 클래스에서는 접근 불가능
        // this.#jsPrivateProperty;
    }
}

const instance = new PropertyTestChild();

instance.publicProperty;
// instance.