// //! 혼자하는 자바스크립트 

// // * error 종류
// 1. ReferenceError = OO is not defined
// → OO부분을 잘못 입력했을때 발생함.
// ex) alert를 alrt로 잘못입력

// //* 구문 오류
// 2. Uncaught syntaxError : Invalid or unexpected token
// → 토큰(기호)을 잘못 입력했을 때의 오류
// ex) alert('Hello World) 따옴표(')를 열고서 닫지 않는 경우

// 3. Uncaught SyntaxError: missing ) after argument list 
// → 토큰(기호)을 잘못 입력했다는 오류
// ex) alert('Hello World' 괄호를 열고서 닫지 않은 경우

// //! 표현식
// 표현식 : 값을 만들어 내는 간단한 코드
// 문장 : 표현식이 하나 이상 모인 것
// 프로그램 : 문장이 모인 것

// //! 식별자
// 식별자: 프로그래밍 언어에서 이름을 붙일 때 사용하는 단어
// 1. 키워드를 사용하면 안된다.
// 2. 숫자로 시작하면 안된다.
// 3. 특수 문자는 _와 $만 허용
// 4. 공백 문자를 포함 할 수 없다.

// 식별자의 종류
// 식별자 뒤에 괄호 없음(단독) = 변수
// 식별자 뒤에 괄호 없음(다른 식별자와 사용)  = 속성
// 식별자 뒤에 괄호 있음(단독) = 함수
// 식별자 뒤에 괄호 있음(다른 식별자와 사용) = 메소드

// ex) alert('Hello World')    =       함수
//     Array.length            =       속성
//     input                   =       변수
//     prompt('Message', 'Defstr')  =  함수
//     Math.PI                 =       속성
//     Math.abs(-273)          =       메소드

// // * inch 단위를 cm 단위로 변경하기
// const rawInput = Number(prompt('inch 단위의 숫자를 입력하시오'));
// const inch = (rawInput);
// const cm = inch * 2.54

// console.log(`${inch}inch는 ${cm}cm 입니다.`)

// //* 원의 반지름을 입력받아 원의 넓이와 둘레 구하기
// const number1 = Number(prompt('숫자를 입력하시오'));
// const 넓이 = 3.14 * number1 * number1;
// const 둘레 = 2 * 3.14 * number1;

// console.log(`원의 넓이${넓이},원의둘레${둘레}`);

// const 숫자 = Number(prompt('달러 단위의 금액을 입력해주세요'));
// const 원화 = 1207;

// let output = ''
// output += `달러: ${숫자}\n`
// output += `→원화환전: ${숫자 * 원화}`
// alert(output);