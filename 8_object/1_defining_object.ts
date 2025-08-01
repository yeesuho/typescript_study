/**
 * Object
 */
const suho = {
    name: '이수호',
    age: 17
}

interface IPerson {
    name: string;
    age: number;
}

type TPerson = {
    name: string;
    age: number;
}

const iPerson: IPerson = {
    name:  '이수호',
    age: 17,
}

const tPerson: TPerson = {
    name: '이수호',
    age: 17,
}

iPerson.name;
iPerson.age;