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

