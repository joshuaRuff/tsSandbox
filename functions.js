// receive numbers and return numbers
function getSum(x, y) {
    return x + y;
}
// receive any type but return number
var mySum = function (num1, num2) {
    if (typeof num1 == 'string') {
        num1 = parseInt(num1);
    }
    if (typeof num2 == 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
// optional param ?
function getName(first, last) {
    if (last == undefined) {
        return first;
    }
    return first + ' ' + last;
}
// return void
function myVoid() {
    // ...side effects withouta return
}
