/**
 * Multi Dimension Array
 */
/**
 * (1)
 * [1,2,3]
 * 
 * (2)
 * [
 *  [1,2,3],
 *  [1,2,3]
 * ]
 * 
 * (3)
 * [
 *  [
 *      [1,2,3]
 *  ]
 * ]
 */
const numb2DArr: number[][] = [
    [1,2,3]
]

const str2DArr = [
    ['1', '2', '3'],
    ['3', '4', '5'],
]

const strAndNumbArr: (number | string) [][] = [
    [1, '2', 3],
    ['4', 5, '6'],
]

let strArrOrNumbArr: string[][] | number[][] = [ // 괄호로 묶지 않으면 아예 number[]이거나 아예 string[]이어야 함
    [1, 2, 3],
    [4, 5, 6],
]

strArrOrNumbArr = [
    ['1', '2', '3'],
    ['4', '5', '6'],
]

for(let arr of numb2DArr) {
    for(let item of arr) {
        
    }
}