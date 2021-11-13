//OBJECT
//Object = {key : value}:

//1.lterals and property
const name = 'taewook';
const age = 4;
print(name, age);
function print(name, age){
    console.log(name);
    console.log(age);
}

// 개선 후
const obj1={}; // 오브젝트 리터럴
const obj2 = new Object(); // 오브젝트 컨스트럭터


function print(person){
    console.log(person.name);
    console.log(person.age);
}

const ellie = {name : 'ellie', age : 4};
print(ellie);
ellie.hasJob=true;
console.log(ellie.hasJob);
delete ellie.hasJob;
console.log(ellie.hasJob);

//2. Computed properties
// key should be string type
console.log(ellie.name);
console.log(ellie['name']);
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key){
    console.log(obj[key]);
}
printValue(ellie, 'name');

//3. Property value shorthand
const person1 = {name : 'bob', age: 2};
const person2 = {name : 'steve', age: 3};
const person3 = {name : 'tae', age: 4};
const person4 = {name : 'ww', age: 5};
const person5 = new Person('ellie',30);
console.log(Person);

//Constructor Function
function Person(name, age){
    this.name = name;
    this.age = age;
}

//5. in operator: property existance check (key in obj)
console.log(`in operator : ${'name' in Person}`);

// 6. for..in vs for..of
// for (key in obj)

for(key in ellie){
    console.log(key);
}

//for (value of iterable)
const array = [1, 2, 3, 4];
for (value of array){
    console.log(value);
}

// 7. Fun Cloning
const user = { name : 'ellie' , age : 2};
const user2 = user;
user2.age = 20;
console.log(user2);

//old way
const user3 = {};
for (key in user){
    user3[key] = user[key];
}
console.clear();
console.log(user3);
//new way
const user4= {};
Object.assign(user4, user);
console.log(user4);
//example
const fruit1 = {color : 'red'};
const fruit2 = {color : 'blue' , size : 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed);
