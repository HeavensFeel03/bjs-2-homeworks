function getArrayParams(...arr) {
 let min = arr[0];
 let max = arr[0];
 let avg = 0;
 let sum = 0;

 for ( let i = 0; i < arr.length; i++ ){
  if ( arr[i] <= min ){
    min = arr[i];
    }}
  for ( let i = 0; i < arr.length; i++ ){
    if (arr[i]>= max){
      max = arr[i];
    }} 

    for ( let i = 0; i < arr.length; i++ ){
      sum = sum + arr[i];
    } 
  
  avg = +((sum / arr.length).toFixed(2)) ;
 
  return { min: min, max: max, avg: avg };
}

getArrayParams(-99, 99, 10) // { min: -99, max: 99, avg: 3.33 }
getArrayParams(1, 2, 3, -100, 10)  // { min: -100, max: 10, avg: -16.80 }
getArrayParams(5)  // { min: 5, max: 5, avg: 5 }


function summElementsWorker(...arr) {
  let summa = 0;

  if (!arr.length){
    return 0;
  } 

  for ( let i = 0; i < arr.length; i++ ){
    summa = summa + arr[i];
  } 
return summa;

}

function differenceMaxMinWorker(...arr) {
  let min = arr[0];
  let max = arr[0];

  if (!arr.length){
    return 0;
  } 

  for ( let i = 0; i < arr.length; i++ ){
    if ( arr[i] <= min ){
      min = arr[i];
      }}
    for ( let i = 0; i < arr.length; i++ ){
      if (arr[i]>= max){
        max = arr[i];
      }} 
    let difference = max - min;   
  return difference;
}

function differenceEvenOddWorker(...arr) {
let sumEvenElement = 0;
let sumOddElement = 0;

if (!arr.length){
  return 0;
} 

for ( let i = 0; i < arr.length; i++ ){
  if ((arr[i] % 1 == 0 && arr[i] % 2 != 0))(
    sumOddElement = sumOddElement + arr[i])
  else (sumEvenElement = sumEvenElement + arr[i]);
}
let differenceEvenOdd = sumEvenElement - sumOddElement;
return differenceEvenOdd;
}



function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let averageEvenElements = 0;

  if (!arr.length){
    return 0;
  } 
  
  for ( let i = 0; i < arr.length; i++ ){
    if (( arr[i] % 2 === 0 )){
      sumEvenElement = sumEvenElement + arr[i];
      countEvenElement++;
    }
  averageEvenElements = sumEvenElement / countEvenElement;
   } 
  return averageEvenElements;
}

// summElementsWorker
console.log(summElementsWorker()); // 0
console.log(summElementsWorker(10, 10, 11, 20, 10)); // 61

// differenceMaxMinWorker
console.log(differenceMaxMinWorker()); // 0
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10)); // 20 - 10 => 10

// differenceEvenOddWorker
console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)); // 266 - 213 => 53
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // 114 - 383 => -269

// averageEvenElementsWorker
console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); // [2, 4, 6, 8] => 5
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // [64, 10, 40] => 38

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for ( let i = 0; i < arrOfArr.length; i++ ) {
    const workerResult = func(...arrOfArr[i]);
    if ( workerResult > maxWorkerResult ) {
      maxWorkerResult = workerResult;
    }
  }
  return maxWorkerResult;
}

const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
console.log(makeWork(arr, summElementsWorker)); // максимум из 61, 206, 328, 284 => 328
console.log(makeWork(arr, differenceMaxMinWorker)); // максимум из 10, 86, 44, 66 => 86
console.log(makeWork(arr, differenceEvenOddWorker)); // максимум из 39, -6, -184, 92 => 92
console.log(makeWork(arr, averageEvenElementsWorker)); // максимум из 12.5, 33.333, 72, 62.666 => 72


