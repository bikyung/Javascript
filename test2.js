//! 함수

//* 함수 선언
function helloFunc() {
  //*실행코드
  console.log(1234);
}

//*함수 호출
helloFunc(); //? 1234

//! Return

function returnFunc() {
  return 123;
}

// let a = returnFunc();

// console.log(a) //? 123

//* 함수 선언!

function sum(a, b) { //* a와 b는 매개변수(Parameters)
  return a + b;
}

//* 재사용!
let a = sum(1, 2); //* 1과 2는 인수(argument)
let b = sum(7, 12);
let c = sum(2, 4);

console.log(a, b, c); //? 3, 19, 6

//* 기명(이름이있는)함수
//* 함수선언식
function hello() {
  console.log('Hello~');
}

//* 익명(이름이 없는)함수
//* 함수 표현식!
let world = function() {
  console.log('World~');
}
//* 함수 호출
hello(); //? Hello~
world(); //? World~

// * 객체 데이터
const hero = {
  name: 'Thor',
  age: 36,
  //* 매소드(Method)
  getName: function() {
    return this.name;
  }
}

const hisName = hero.getName();
console.log(hisName); //? Thor
//* 또는
console.log(hero.getName()); //? Thor