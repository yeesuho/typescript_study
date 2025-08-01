/**
 * Object Union
 */

/**
 * 유추된 객체 타입 유니언
 */
const dogOrCat = Math.random() > 0.5 ? 
// 강아지
{
    name: '까미',
    age: 9,
} : 
// 고양이
{
    name: '나비',
    breed: '코리안 길냥이',
}

dogOrCat.name;
dogOrCat.age;
dogOrCat.breed; // age와 breed는 타입이 자동으로 옵셔널로 유추됨

interface Dog {
    name: string;
    age: number;
}

interface Cat {
    name: string;
    breed: string;
}

type DogOrCat = Dog | Cat;

const dogOrCat2: DogOrCat = Math.random() > 0.5 ? 
// 강아지
{
    name: '까미',
    age: 9,
} : 
// 고양이
{
    name: '나비',
    breed: '코리안 길냥이',
}

dogOrCat2.name;
// dogOrCat2.age;
// dogOrCat2.breed; // 사용할려고 하면 에러가 남
// 어떻게 사용할 수 있을까 -> 내로잉
if('age' in dogOrCat2) { // 내로잉을 통해 유추를 할 수 있게 됨
    dogOrCat2;
    dogOrCat2.age;
    dogOrCat2.name;
} else {
    dogOrCat2;
    dogOrCat2.breed;
    dogOrCat2.name;
}