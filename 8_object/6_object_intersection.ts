/**
 * Object Intersection
 */
type PrimitiveIntersection = string & number; // string과 number을 동시에 충족하는 것은 불가능 하기 때문에 never 타입이 됨
// 객체를 사용하면 동시에 충족하는 것을 만들 수 있음
type PersonType = {
    name: string;
    age: number;
}

type CompanyType = {
    company: string;
    companyRegistrationNumber: string;
}

type PersonAndCompany = PersonType & CompanyType;

const suho: PersonAndCompany = {
    name: '수호',
    age: 17,
    company: '디지텍',
    companyRegistrationNumber: 'xxxyyyyzzzz'
}

type PetType = {
    petName: string;
    petAge: number;
}

type CompanyOrPet = PersonType & (CompanyType | PetType); // PersonType은 intersection이기 때문에 무조건 있어야하고 CompanyType 또는 PetType은 둘중 하나가 완전체로 충족하면 하나의 프로퍼티가 불완전하거나 없어도 상관이 없음

const companyOrPet: CompanyOrPet = {
    // PersonType
    name: '이수호',
    age: 17,

    // CompanyType
    company: '디지텍',
    companyRegistrationNumber: 'xxxyyyyzzzz',

    // PetType
    petName: '까미',
    petAge: 9,
}