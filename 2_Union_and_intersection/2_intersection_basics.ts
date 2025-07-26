/**
 * Intersection
 * 
 * And
 */
interface Human {
    name: string;
    age: number;
}

interface Contacts {
    phone: string;
    address: string;
}

type HumanAndContacts = Human & Contacts;

let humanAndContacts: HumanAndContacts = {
    name: '이수호',
    age: 17,
    phone: '01012345678',
    address: '서울시'
};

type NumberAndString = number & string; // number이면서 string인 타입은 존재할 수 없기에 never 타입이 되어버림 (primitive type을 intersection하면 never 타입이 됨)

// let numberAndString: NumberAndString = never;