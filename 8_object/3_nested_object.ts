/**
 * Nested Object
 */
type NestedPerson = {
    identity: {
        name: string;
        age: number;
    },
    nationality: string,
}

const suho: NestedPerson = {
    identity: {
        name: '수호',
        age: 17
    },
    nationality: '한국인',
}

type TPerson = { // 여러개의 타입으로 나눴을 때 장점은 나중에 에러가 났을 때 조금 더 에러가 보기 편하다
    identity:TPersonIdentity;
    nationality: string;
}

type TPersonIdentity = { 
    name: string;
    age: number;
}

const suhoLee: TPerson = {
    identity: {
        name: '이수호',
        age: 17,
    },
    nationality: '한국인',
}

interface IPerson {
    identity: IPersonIdentity;
    nationality: string;
}

interface IPersonIdentity {
    name: string;
    age: number;
}

const suHo: IPerson = { // 이부분에선 type과 interface가 같음 위에 처럼 나중에 에러가 났을 때 잘 알려줌
    identity: {
        name: '이수호',
        age: 17
    },
    nationality: '한국인'
}