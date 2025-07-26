/**
 * Type and Interface
 */

/**
 * Type
 * 
 * 타입은 쉽게 말해서 TS의 타입에 이름을 지어주는 역할을 한다.
 * 
 */

type NewStringType = string;

type NewNullType = null;

type NewNumberType = number;

type MaleOrFemale = 'male' | 'female';

const stringVar: NewStringType = 'test';

type SuhoType = {
    name: string;
    year: number;
}

const suHo: SuhoType = {
    name: '이수호',
    year: 2008,
}



/**
 * Interface 
 */
// interface는 객체 형태
interface SuhoInterface {
    name: string;
    year: number;
}

const suHo2 : SuhoInterface = {
    name: '이수호',
    year: 2008,
}

interface SuhoIT {
    name: NewStringType;
    year: NewNumberType;
}

const suHo3: SuhoIT = {
    name: '이수호',
    year: 2008,
}

interface SuhoOptional {
    name: string;
    year?: number; // 옵셔널: 있어도 되고 없어도 됨
}

const suHo4: SuhoOptional = {
    name: '이수호',
    year: 2008,
}