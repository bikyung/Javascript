//! 변수

//! 재사용이 가능(let)

//* 변수 선언!
let a = 2;
let b = 5;

console.log(a + b) //? 7
console.log(a - b) //? -3
console.log(a * b) //? 10
console.log(a / b) //? 0.4

//* 값(데이터)의 재할당 가능! (let)
let a = 12;
console.log(a); //? 12

a = 999;
console.log(a); //? 999

//* 값(데이터)의 재할당 불가! (const)
const a = 12;
console.log(a); //? 12

a = 999;
console.log(a); //? TypeError 발생