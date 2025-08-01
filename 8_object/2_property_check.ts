/**
 * Property Check
 * 
 * 초과 속성 검사
 */
type TName = {
    name: string;
}

type TAge = {
    age: number;
}

const suho = { // TName이나 TAge를 넣으면 없는 프로퍼티이기 때문에 오류가 남 (초과 속성이 허락이 안됨)
    name: '이수호',
    age: 17,
} // 초과 속성 검사는 직접 객체 리터럴을 직접 입력할 때만 작동한다는 것을 알 수 있음

const testName: TName = suho; // 내로잉이 되어서 초과되는 값들이 있어도 할당이 됨 (초과 속성이 허락이 됨)
const testAge: TAge = suho;

console.log(testName);