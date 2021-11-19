//! 연산자
// * 산술연산자
let a = 1 + 2;
console.log(a); //? 결과값: 3

let a = 1 + 2 - (3 * 4) / 4;
console.log(a); //? 결과값: 0

// * 증감 연산자
let a = 1;
console.log(a++); //? 결과값: 1
console.log(++a); //? 결과값: 3

let a = 3;
console.log(a--); //? 결과값: 3
console.log(--a); //? 결과값: 1

// //* 대입 연산자
let value = 1 //? 변수 선언
value = 2; //?  = 대입 연산자
//* ex)
let a = 1; //? 변수 선언
a += 3; //? a값은 1이고 1에 3을 더한 값 : 4 
a -= 3; //? a값은 4이고 4에 3을 뺀값 : 1
a *= 3; //? a값은 1이고 1에 3을 곱함 : 3
a /= 3; //? a값은 3이고 3에 3을 나눔: 1
console.log(a); //? 결과값: 1

// * 논리 연산자
// * !:NOT
const a = !true;
console.log(a); //? 결과값: false

const a = !false;
console.log(a); //? 결과값: true

//* &&: AND
const a = true && true;
console.log(a); //? 결과값 : true

const a = true && false;
console.log(a); //? 결과값 : false

const a = false && false;
console.log(a); //? 결과값 : false

//* ||: OR
const a = true || true;
console.log(a) //? 결과값: true

const a = true || false;
console.log(a) //? 결과값: true

const a = false || false;
console.log(a) //? 결과값: false

//* 논리 연산자 순서
const a = !((true && false) || (true && false) || !false); //? 괄호안에 NOT 연산자 먼저 바뀜
          !((true && false) || (true && false) || !true);  //? AND 연산자 바뀜
          !((false) || (false) || !true); //? OR 연산자 바뀜
          !true; //? NOT 연산자
          console.log(a); //? 결과값 : false

//* 비교 연산자
const a = 1;
const b = 1;
const result = a === b; //? a(1)값과 b(1)값이 같으면 
console.log(result); //? 결과값 true

//* 조건비교연산자
const a = 1;
const b = 2;

console.log(a > b) //? 결과값 : false
console.log(a >= b) //? 결과값 : false
console.log(a <= b) //? 결과값 : false
console.log(a < b)  //? 결과값 : trued

 //* == 과 === 차이점(type까지 검사하지 않음.)
const a = 1; //? 숫자
const b = '1'; //? 문자
const reslt = a == b;
console.log(result); //? 결과값 : true

const a = 0; //? 숫자
const b = false; //? 불린
const result = a == b;
console.log(result); //? 결과값 : true

const a = null;
const b = undefined; 
const result = a == b;
console.log(result); //? 결과값 : true

// //* 문자열 붙이기
const fisrtName = 'Lee';
const LastName = 'Haemun';
console.log(fisrtName + LastName); //? 결과값 : LeeHaemun

// *case.1 10이 저장된 변수a, 숫자 20, 그리고 30을 더해서 result 변수에 저장 후 출력.
const num1 = function() {
  let a = 10;
  let result = a + 20 + 30;
  console.log(result);
}

// *case.2 50이 저장된 변수a, 20이 저장된 변수 b를 곱한 값을 10으로 나누어 result 변수에 저장 후 출력.
const num2 = function() {
  let a = 50;
  b = 20;
  result = a * b / 10;
  console.log(result);
}


// todo.1 숫자 5를 2로 나누었을 때 나머지 값이 몇인지 result 변수에 저장후 출력.
const num3 = function() {
  let a = 5%2;
  console.log(a);
}


// todo.2 'hi'가 담긴 변수 a 와 'WEB'이 담긴 변수 b 를 합쳐 'hiWEB' 을 출력.
const stringop = function() {
  let a = 'hi';
  let b = 'web';
  console.log(a + b);
}

// *case.3 ul, li 구조의 tag를 html page에 삽입 후 출력.
function operatorEx() {
  let list = '';
  list += '<ul>';
  list += '<li>Hello</li>'
  list += '<li>JS</li>'
  list += '</ul>';
  document.body.innerHTML = list;
}
operatorEx();


// *case.4 연산자가 뒤로 올경우 engine처럼 생각하기.
const numberplus = function() {
  let number = 10;
  alert(number++); //? 결과값: 10
  alert(number++); //? 결과값: 11
  alert(number++); //? 결과값: 12
  console.log(number);
} 
// todo. 증감연산자복합.

 //? 변수 선언 및 초기화
const number2 = function() { 
  let number = 10;
  alert(number++); //?출력 : 10 현재 : 11  10출력후 더하기(11). 다시 number로.
  alert(--number); //?출력 : 10 현재 : 10  11에서 1빼고 10 출력후. 다시 number로
  alert(++number); //?출력 : 11 현재 : 11  10에서 1더하고 11 출력후. 다시 number로
  alert(number--); //?출력 : 11 현재 : 10  11출력후 1빼서 다시 number로. 출력: 11, 최종 10.
  console.log(number); //? 최종확인
}
// *case. 5 숫자 10이 담긴 변수 a 와 숫자 20 이 담긴 변수 b 의 크기를 비교하고 결과출력.
const num1 = function() {
  let a = 10;
  b = 20;
  result = a > b;
  console.log(result);
}

// todo.5 숫자 10이 담긴 변수a 와 숫자 20이 담긴 변수b 가 다른지 비교하여 결과를 출력.
const num2 = function() {
  let a = 10;
  b = 20;
  result = a === b;
  console.log(result);
}

/* 
  *case.6 a변수에는 '여자', b변수에는 '웹디자이너'라는 값이 저장되어 있다.
  *담겨있는 두 값 모두 맞는지 result변수에 저장 후 출력.
*/
const design = function() {
  let a ='여자';
  b = '웹디자이너';
  result = (a ==='남자') || (b === '웹디자이너');
  console.log(result);
}

/*
  todo. a변수에는 '남자', b변수에는 '웹퍼블리셔' 라는 값이 저장되어 있다.
  todo. 둘중 하나라도 맞는지 result 변수에 저장 후 출력.
*/
const design1 = function() {
  let a = '남자';
  b = '웹퍼블리셔';
  result = (a === '여자') && (b === '웹퍼블리셔');
  console.log(result);
}

// todo. 다음 코드를 작성 후 결과를 예상한 다음 출력하라.
const compare = function() {
  console.log(30 > 20 > 10); //? false.
}

// todo. 해결하기.
const compare1 = function() {
  console.log(30 > 20, 20 > 10);  //?true 반환받기.
}

// todo.1 자신의 이름을 한 글자씩 나누어 변수에 담은 후, 다시 하나의 변수에 담아 출력.
const userName = function() {
  let first = 'LEE'
  last = 'Haemun'
  console.log(first + last);
}
  
  
  // todo.2 다음 숫자가 출력 되도록 연산자를 활용하여 코드를 작성.
  
const numberoperator = function() {
  let number = 10;
  alert(number++);//? - 10
  alert(++number);//? - 12
  alert(number--);//? - 12
  alert(--number);//? - 10
  console.log(number);
}
