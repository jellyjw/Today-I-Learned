const obj = {
    name: "jiwoo",
    age: 26,
    job: "developer",
    sayHello: function () {
        console.log(`Hi, I'm ${this.name} and ${this.age} years old.`);
    },
};

obj.sayHello()

// 결과 : Hi, I'm jiwoo and 26 years old
//this.name은 속해있는 객체 안의 name값을 의미한다.


const myFriend = {
    name: 'minji',
    age: 26,
    job: '백수',
    introduceMyFriend: function () {
        console.log(`안녕하세요. 저는 jiwoo의 친구인 ${this.name}라고 하고 나이는 ${this.age}입니다. 직업은 ${this.job} 입니다.`);
    },
};

myFriend.introduceMyFriend();


// 결과 : 안녕하세요.저는 jiwoo의 친구인 minji라고 하고 나이는 26입니다.직업은 백수 입니다. 
