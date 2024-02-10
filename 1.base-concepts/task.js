"use strict"
function solveEquation ( a, b, c ) {
  let arr = [];
  let disc = b * b - 4 * a * c;
  if ( disc > 0 ){
    arr.push(( -b + Math.sqrt(disc) )/ 2 / a );
    arr.push(( -b - Math.sqrt(disc) )/ 2 / a );
    }
  else if  (disc == 0 ){
    arr.push (-b /( 2 * a ));
  }
  
  return arr;
}

function calculateTotalMortgage( percent, contribution, amount, countMonths ) {
  let interestRate = percent / 100 / 12;
  let loanBody = amount - contribution;
  let monthlyFee = loanBody * ( interestRate + ( interestRate /(( Math.pow(1 + interestRate,countMonths )) - 1)))
  let total = (monthlyFee * countMonths).toFixed(2);
  return +(total);

  
}