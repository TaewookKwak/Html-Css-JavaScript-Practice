console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

class person{
    constructor(name, age ){
        this.name = name;
        this.age = age;
    }
    speak(){
        console.log(`${this.name} : hello`);
    }
}

const ellie = new person('taewook, 20');
console.log(`${}`)