* HTML 요소(Element) 1개 검색/찾기
Const boxEl = document.querySelector('.box');

//* HTML 요소에 적용할 수 있는 메소드!
boxEl.addEventListener();

//* 인수(Arguments)를 추가 가능!
boxEl.addEventListener(1, 2);

//* 1- 이벤트(Event, 상황)
boxEl.addEventListener('click', 2);

//* 2- 핸들러(Handler, 실행할 함수)
boxEl.addEventListener('click', function() {
  console.log('Click~!');
});

let boxEl = document.querySelector('.box');

console.log(boxEl); //? <div class="box">box!!</div>

boxEl.addEventListener('click', function() {
  console.log('click!!'); //? 웹페이지에서 box!! div 클릭한만큼 횟수 나옴
  boxEl.classList.add('active');
  console.log(
    boxEl.classList.contains('active') //? true
    );
    boxEl.classList.remove('active');
    console.log(
      boxEl.classList.contains('active') //? false
    );
});


! html 요소에 class 추가 및 삭제
// * HTML 요소(Element) 검색/찾기
const boxEl1 = document.querySelector('.box');

//* 요소의 클래스 정보 객체 활용!
boxEl1.classList.add('active');
let isContains = boxEl1.classList.contains('active');
console.log(isContains); //* true

boxEl1.classList.remove('active');
isContains = boxEl1.classList.contains('active');
console.log(isContains); //* false


//! html에 자바스크립트를 통한 class 부여하기
//* HTML 요소(Element) 모두 검색/찾기
const boxEls = document.querySelectorAll('.box');
console.log(boxEls);

// //* 찾은 요소들 반복해서 함수 실행!
// //* 익명 함수를 인수로 추가!
boxEls.forEach(function() {});

// //*첫 번째 매개변수(boxEl): 반복 중인 요소.
// //*두 번째 매개변수(index): 반복중인 번호.
boxEls.forEach(function(boxEl, index) {});

//*출력
boxEls.forEach(function(boxEl, index) {
  boxEl.classList.add(`order-${index + 1}`);
  console.log(index, boxEl);
});

const boxEl2 = document.querySelector('.box');

//* Getter, 값을 얻는 용도 
console.log(boxEl2.textContent);  //? 1 (.box내용 html값 = 1)

//* Setter, 값을 지정하는 용도
boxEl2.textContent = 'Haemun?!';
console.log(boxEl2.textContent); //? Haemun?!


//! 메소드 체이닝

const a = 'Hello~';
//* split: 문자를 인수 기준으로 쪼개서 배열로 반환.
//* reverse: 배열을 뒤집기.
//* join: 배열을 인수 기준으로 문자로 병합해 반환.


const b = a.split('').reverse().join(''); //* 메소드 체이닝.

console.log(a); //? Hello~
console.log(b); //? ~olleH



