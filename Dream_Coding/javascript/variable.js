// use this for valina Javascript
'use strict';
// 2. variable rw(read and write)
// let (added in ES6)
let globalName = 'kwak';
{
let name = 'ellie';
console.log(name);
name = 'hello';
console.log(name);
}
console.log(name);
console.log(globalName);

// var hoisting : 밑에서부터 위로 선언을 끌어올리기
// var no block scope : 블럭(지역)을 무시해버림

// constant r(read only)
const daysinWeek = 7;
const daysinWeekDay = 5;