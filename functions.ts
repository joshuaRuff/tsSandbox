// receive numbers and return numbers
function getSum(x: number, y: number):number {
  return x + y;
}

// receive any type but return number
let mySum = function(num1: any, num2: any): number {
  if(typeof num1 == 'string') {
    num1 = parseInt(num1);
  }
  if(typeof num2 == 'string') {
    num2 = parseInt(num2);
  }
  return num1 + num2;
}

// optional param ?
function getName(first: string, last?: string):string {
  if(last == undefined) {
    return first; 
  }
  return first + ' ' + last;
}

// return void
function myVoid(): void {
  // ...side effects withouta return
}