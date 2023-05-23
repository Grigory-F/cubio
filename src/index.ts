import './styles.scss'



const a = 100
const b = 1000 

const ab = (a:number, b:number) => {
console.log(a + b);

}

ab(a, b)


import { wrapGrid } from 'animate-css-grid'

const grid:HTMLDivElement = document.querySelector(".grid");
wrapGrid(grid);



/* let rowData

fetch('https://jsonplaceholder.typicode.com/todos/').then(data => data.json()).then(data => findMthod(data))

import IRepoData from './Iglobal'

function findMthod(data: IRepoData) {
    let dataEntries = data
    console.log(dataEntries);
}
 */

/* let values = [10, 5, 2, 5, 3, 6, 7, 42, 1, 6, 2, 13, -2, 3, 4, -1, -33, -42]
let activated = 0;
let activated2 = 0;
values.sort((a: number, b: number) => {
    activated = activated + 1
    console.log(activated);
    return a - b
}) */




/* let values2 = Array(100).fill(null)
console.log(values2); */
/* 
function QuickSort(List: Array<number>): Array<any> {
    if (List.length <= 1) {
        return List;
    }

    const pivot = List[List.length - 1];

    const leftList = [];
    const rightList = [];
    for (let i = 0; i < List.length - 1; i++) {
        activated2 = activated2 + 1

        if (List[i] <= pivot) {
            leftList.push(List[i]);
        }
        else {
            rightList.push(List[i])
        }
    }
    console.log(activated2);
    return [...QuickSort(leftList), pivot, ...QuickSort(rightList)];
} */

/* let array = [3, 2, 5, -4, 8, 9, 22, 3, 1, 4, 11, 1, -1, 6]
let targetSum = 10

function twoNumberSum(array: Array<number>, targetSum: number): Array<any> {
    const nums: any = {};
    for (const currentNum of array) {
        const potentialMatch = targetSum - currentNum;
        
        if (potentialMatch in nums) {
            console.log('vbyecjdjt', potentialMatch);
            return [currentNum, potentialMatch];
        } else {
            nums[currentNum] = true;
            console.log(nums);

        }
    }
    return [];
}


console.log(twoNumberSum(array, targetSum)); */


