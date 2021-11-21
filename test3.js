//! 조건문

//! if문

let isShow = true; //* 조건이 참인 경우
let checked = false; //* 조건이 거짓인 경우

if(isShow) { //* 참일때
  console.log('Show!'); //? Show!
}
if(checked) { //* 거짓일때
  console.log('Checked');
}

let isShow1 = true;

if(isShow1) { //* isShow1이 true(참) 일때
  console.log('Show!'); //? Show! 실행
}else { //* isShow1이 true가 아닐때
  console.log('Hide'); //? Hide 실행
}

// *case.1 현재시간이 오후인가 오전인가
function times() {
  let date = new Date;
  let hour = date.getHours();
  if (hour < 12) {
    console.log('오전입니다.');
  } else if (hour > 12) {
    console.log('오후입니다.');
  }
}

// *case.2 말일인가 아닌가?
function lastDay() {
  let day = new Date;
  let day1 = day.getDay();
  if(day1 < 30) {
    console.log('말일이아닙니다.');
  } else if(day1 >= 30) {
    console.log('말일입니다.');
  }
}
// *case.3 아침? 점심? 저녁?
function food() {
  let time = new Date;
  let hour = time.getHours();
  if(hour < 12) {
    console.log('아침입니다.');
  } else if(hour < 16) {
    console.log('점심입니다.');
  } else if(hour < 21) {
      console.log('저녁입니다.');
  }
}
// *case.4 숫자판별
function numbers() {
  let num = prompt('숫자를 입력하시오');
  if(num > 0) {
    console.log('양수입니다.');
  } else if(num < 0) {
    console.log('음수입니다.');
  } else {
    console.log('숫자가 아니거나 잘못입력하였습니다.');
  }
}

// *todo.1 홀수, 짝수 판별.
function numb() {
  let num = prompt('숫자를 입력하시오');
  if(num % 2 ===0) {
    console.log('짝수입니다.');
  } else {
    console.log('홀수입니다.');
  }
}

// *case.5 다음 세과목의 점수를 입력받고 평균을 구한 후 수,우,미,양,가를 출력하라.
function aver() {
  let eng = prompt('영어점수를 입력하시오');
  let math = prompt('수학점수를 입력하시오');
  let science = prompt('과학점수를 입력하시오');
  let aver1 = (Number(eng) + Number(math) + Number(science)) / 3;
  
  if(aver1 >= 90) {
    console.log('수 입니다.');
  }else if(aver1 >=80) {
    console.log('우 입니다.');
  }else if(aver1 >= 70) {
    console.log('미 입니다.');
  }else if(aver1 >= 60) {
    console.log('양 입니다.');
  }else {
    console.log('가 입니다.');
  }
}

// *todo.2 사용자 id(Mark)를 입력받아 맞다면 승인메시지(접속승인), 틀리면 거부메시지(잘못된ID) 출력.
function userNames() {
  let user = prompt('아이디를 입력하시오');
  if(user === 'Mark') {
    alert('접속승인');
  }else if(user !== 'Mark'){
    alert('잘못입력하셨습니다.');
  }
}
// todo.3 사용자 id "Mark"와 password "1234"를 입력받고 둘다 맞을 경우에만 승인 메시지 출력.
function userName1() {
  let user = prompt('아이디를 입력하시오');
  let pass = prompt('비밀번호를 입력하시오');
  if(user === 'Mark' && pass === '1234') {
    alert('접속승인');
  } else {
    alert('잘못 입력하였습니다.');
  }
}
// todo. HW 사용자 ID "Mark"와 PASSWORD "1234"의 정보가 틀릴경우. 틀린 것에 대한 오류메시지출력.
function login() {
  let user = prompt('아이디를 입력하세요');
  pass = prompt('pw를 입력하세요');
  if(user === 'Mark' && pass === '1234') {
    console.log('Mark님 환영합니다.');
  }else if(user !== 'Mark' && pass === '1234') {
    console.log('아이디가 잘못되었습니다.');
  }else if(user === 'Mark' && pass !== '1234') {
    console.log('비밀번호가 잘못되었습니다.');
  }
}
//   ? id가 틀린경우. (ID가존재하지않습니다.);

//   ? password가 틀린경우.(PASSWORD가 틀렸습니다.);

// todo hw.1 각 수를 입력 받아 해당하는 조건의 메시지를 출력하라.
// ? 1일 경우 "1등 10억", 2일 경우 "2등 5천만원", 3일 경우 "3등 300만원", 그외 수일 경우 "낙첨되었습니다."

function lotto() {
  let num1 = prompt('숫자를 입력하시오');
  if(num1 === '1'){
    console.log('1등 10억');
  }else if(num1 === '2') {
    console.log('2등 5천만원');
  }else if(num1 ==='3') {
    console.log('3등 300만원');
  }else {
    console.log('낙첨되었습니다.');
  }

}

//! switch문

switch(평가) {
  case A:
    //* A일때 코드
  case B:
    //* B일때 코드
}


// todo.
// *사과 : 100원
// *바나나 : 200원
// *키위 : 300원
// *멜론 : 400원
// *수박 : 500원
// *사과싶은과일을 물어보고 가격알려주기

let fruits = prompt('어떤 과일이 주문?')
  switch(fruits) {
    case'사과' :
    console.log('100원 입니다.');
    break;
    case '바나나' :
    console.log('200원 입니다.');
    break;
    case '키위' :
    console.log('300원 입니다.');
    break;
    default: 
    console.log('없는과일입니다.');
  }

  function calc() {
    let first = prompt('숫자를 입력하시오');
    operator = prompt('연산자를 입력하시오');
    last = prompt('숫자를 입력하시오');

    switch(operator) {
      case '+':
        alert(Number(first) + Number(last));
        break;
      case '-':
        alert(Number(first) - Number(last));
        break;
      case '*':
        alert(Number(first) * Number(last));
        break;
      case '/':
        alert(Number(first) / Number(last));
        break;
        default:
          alert('잘못된 값이 입력되었습니다.');
    }
  }
