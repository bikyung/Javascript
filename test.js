const ironMan = {
  name : '토니스타크',
  actor: '로버트 다우니 주니어',
  alias: '아이언맨'
}

const captainAmerica = {
  name: '스티븐 로저스',
  actor: '크리스 에반스',
  alias: '캡틴아메리카'
}

function print({alias,name,actor}) {
  
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`
  console.log(text)
}

print(ironMan)
print(captainAmerica)

//! String(문자형)
let myName = "haemun"; // ?문자 큰따옴표
email = 'lhmun1129@naver.com' //? 문자 작은따옴표
hello = `Hello ${myName}`; //? 백틱 

console.log(myName); //? 결과값 : haemun
console.log(email); //? 결과값 :lhmun1129@naver.com
console.log(hello); //? 결과값 : Hello haemun

//! 숫자형(Number)
const age = 30; //? 숫자형 Number
const PI = 3.14; //* 소수점 가능

//* 1을 0으로 나눴을 경우
const x = 1 / 0; 
console.log(x); //? 결과값 : Infinity
//* 문자를 숫자로 나눴을 경우
const name = 'haemun';
const y = name / 2; 

console.log(y); //? 결과값 : NaN(Not a Number);

//! Boolean (true, false 두 가지 값밖에 없는 논리 데이터)
const a = true; //? 참
const b = false; //? 거짓

const name = 'haemun';
const age = 36;

console.log(name === 'haemun'); //? 결과값 : true
console.log(age > 40) //? 결과값 : false

//! null (어떤 값이 의도적으로 비어있음) 
let empty = null;
console.log(empty); //? 결과값 : null;
 
//! undefined (값이 할당되지 않은 상태를 나타냄)
let undef;
let obj = {abc: 123};

console.log(undef); //? 결과값 : undefined
console.log(obj.abc); //? 결과값 :123
console.log(obj.xyz); //? 결과값 : undefined

//! typeof 연산자
const name = 'haemun';

console.log(typeof 3); //? 결과값 : number
console.log(typeof name); //? 결과값 : string
console.log(typeof true); //? 결과값 :  boolean
console.log(typeof 'xxx'); //? 결과값 :  string
console.log(typeof null); //? 결과값 : object
console.log(typeof undefined); //? 결과값 : undefined

//! Object (여러 데이터를 Key:value 형태로 저장)
let user = {
  //* key : value
  name: 'haemun',
  age : 36,
  hobby : 'football'
}

console.log(user.name); //? 결과값 : haemun
console.log(user.age); //? 결과값 : 36
console.log(user.hobby); //? 결과값 : football