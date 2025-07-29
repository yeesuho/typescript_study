/**
 * Overloading
 */
/**
 * 파라미터를 
 * 1) 하나를 받거나
 * 2) 세개를 받는 함수
 */

function stringOrString(suhos:string): string;
function stringOrString(suho1: string, suho2: string, member3: string): string; //하나 또는 3개만 받을 수 있도록 강제할 수 있게됨
// 하나의 구현체만 갖고 그 구현체와 매개변수, 파라미터는 달라도 됨

// function stringOrString(): string; // 구현체에서 가능한 시그니처를 사용해서만 overloading할 수 있음
// 웬만하면 안쓰는게 좋음

/**
 * 만약에 하나의 파라미터만 입력받는다면
 * 수호들을 하나의 스트링으로 입력받는다
 * 
 * 예) '이수호, 김수호, 박수호'
 * 
 * 만약에 세개의 파라미터를 받는다면
 * 각각 수호들을 각각의 파라미터의 값으로 입력한다.
 * 예) '이수호', '김수호', '박수호'
 */
function stringOrString(suhoOrSuhos: string, suho2?: string, suho3?: string) {
    if(suho2 && suho3) {
        return `수호들: ${suhoOrSuhos}, ${suho2}, ${suho3}`;
    } else {
        return `수호: ${suhoOrSuhos}`;
    }
}

console.log(stringOrString('이수호, 김수호, 박수호')); // 이건 밑에 조건으로
console.log(stringOrString('이수호', '김수호', '박수호')); // 이건 위에 조건으로

// console.log(stringOrString('이수호', '김수호'));   // 2개를