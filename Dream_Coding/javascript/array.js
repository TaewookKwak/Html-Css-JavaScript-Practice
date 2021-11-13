// Array
// 자료구조 vs 오브젝트
// 토끼 : 동물, 먹는다, 뛴다
// 당근 : 주황색, 비타민c 
// 이런 비슷한 타입의 오브젝트를 담는 것을 자료구조
// javascript = dynamically typed language

'use strict';

//1. Declaration
const arr1 = new Array();
const arr2 = [1,2]; 

//2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

//3. Looping over an array

// a. for
for (let i = 0 ; i < fruits.length; i++){
    console.log(fruits[i]);
}

//b. for of
for(let fruit of fruits)
{
    console.log(fruit);
}
console.clear( );
//c. forEach
fruits.forEach(function(fruit, index, array){
    console.log(fruit);
})

fruits.forEach((fruit, index) => console.log(fruit));

//4. Add, deletion, copy
// push : add an item to the end
fruits.push('straberry');
console.log(fruits);

// pop : remove an item from the end
fruits.pop();
console.log(fruits);

// unshift : add an item to the beginning
fruits.unshift('lemon');
console.log(fruits);

// shift : remove an item to the beginning
fruits.shift();
console.log(fruits);

// splice : remove an item by index position
fruits.push('straberry', 'pitch');
console.log(fruits);
fruits.splice(1,1); // banana 만 지우기
console.log(fruits);
fruits.splice(1,1,'lemon', 'melon');
console.log(fruits);

// combine two arrays
const fruits2 = ['amond', 'mango'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//5, Searching 
// indexOf and include : find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('melon')); // 몇번째 인덱스에 있는지
console.log(fruits.indexOf('cherry')); // 없는 문자는 -1로 출력
console.log(fruits.includes('melon')); // 있는지 없는지

// lastIndexOf
console.clear(  );
fruits.push('apple');
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.lastIndexOf('apple'));