//1. make a string out of an array
{
    const fruits = ['apple', 'banana','orange'];
    console.log(fruits[0]+fruits[1]+fruits[2]);
    console.log(fruits.join('#')); // () 안에는 구분자를 넣음, 넣지 않으면 ,으로 구분함
}

//2. make an array out of a string
{
    const fruits = 'apple, banana, cherry';
    const aryFruits = fruits.split(', '); // 두개의 인자 (구분자, 리미티드)를 받는다. 만약 리미티드가 1이면 하나의 문자만 출력 'apple'
    console.log(aryFruits);
}

//3. make this array look like this: [5,4,3,2,1]
{
    const array = [1,2,3,4,5];
    console.log(`reverse: ${array.reverse()}`);
    console.log(array); // reverse() 는 원본 array 배열 까지도 깨트림
}

