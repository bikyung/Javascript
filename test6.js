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

const score = Number(prompt('학점을 입력해주세요.','학점'))
if (score === 4.5){
  alert('신')
} else if (4.2 <= score) {
  alert('교수님의 사랑')
} else if (3.5 <= score) {
  alert('현 체제의 수호자')
} else if (2.8 <= score) {
  alert('일반인')
} else if (2.3 <= score) {
  alert('일탈을 꿈꾸는 소시민')
} else if (1.75 <= score) {
  alert('오락문화의 선구자')
} else if (1.0 <= score) {
  alert('불가촉천민')
} else if (0.5<= score) {
  alert('자벌레')
} else if (0 <= score) {
  alert('플랑크톤')
} else {
  alert('시대를 앞서가는 혁명의 씨앗')
}

const 입력 = Number(prompt('태어난 해를 입력해 주세요'))
      const tti = '원숭이,닭,개,돼지,쥐,소,호랑이,토끼,용,뱀,말,양'.split(',')

      alert(`${입력}년에 태어났다면 ${tti[입력 % 12]} 입니다.`)

      
      const rawinput = prompt('태어난 해를 입력하세요');
      const year = Number(rawinput);

      let 간
      const e1 = year % 10
      if(e1 == 0) {간 = '경'}
      if(e1 == 1) {간 = '신'}
      if(e1 == 2) {간 = '임'}
      if(e1 == 3) {간 = '계'}
      if(e1 == 4) {간 = '갑'}
      if(e1 == 5) {간 = '을'}
      if(e1 == 6) {간 = '병'}
      if(e1 == 7) {간 = '정'}
      if(e1 == 8) {간 = '무'}
      if(e1 == 9) {간 = '기'}

      let 띠
      const e2 = year % 12
      if(e2 == 0) {띠 = '신'} 
      if(e2 == 1) {띠 = '유'} 
      if(e2 == 2) {띠 = '술'} 
      if(e2 == 3) {띠 = '해'} 
      if(e2 == 4) {띠 = '자'} 
      if(e2 == 5) {띠 = '축'} 
      if(e2 == 6) {띠 = '인'} 
      if(e2 == 7) {띠 = '묘'} 
      if(e2 == 8) {띠 = '진'} 
      if(e2 == 9) {띠 = '사'} 
      if(e2 == 10) {띠 = '오'} 
      if(e2 == 11) {띠 = '미'} 

      alert(`${year}년은 ${간}${띠}입니다`);