//! 반복문
// //* for 반복문
// for(let i = 0; i < 10; i++) {
//   //* 반복할 코드
//   console.log(i+1);
// }

//* while 반복문

// let i = 0;
// while(i < 10) {
//   i++
//   console.log(i); 
// }

//* do.. while

// let i = 0;
// do {
//   //*코드
//   i++;
// }while(i< 10)

//*break : 만나는순간 코드실행을 멈추고 빠져나옴
//* continue : 코드실행을 멈추고 다음반복으로 진행

// while(true) { //* true값 계속 반복
//   let answer = confirm('계속 할까요?');
//   if(!answer) {
//     break; 
//   } //? confirm창에 확인 btn 클릭 시 계속 confirm창 띄움(true값이 계속 반복) 
//     //? confirm창에 취소 btn 클릭이 false가 동작하여 break 실행
// }

// for(let i = 0; i < 10; i++) { 
//   if(i%2) {
//     continue;
//   }
//   console.log(i); //? 결과값 : 0 2 4 6 8
// }


  
  function main_function() {
    //* 초기 변수 선언 실시 
    var int_sum = 0;
    var int_data = 1;
    
    //* while 문 동작 정의 
    while(true) {
      if(int_data >= 6){
        //* int_data 값이 6이되면 break 탈출 실시 
        break;
      }
      console.log(int_sum);
      //* 합계 더하기 수행 
      int_sum += Number.parseInt(int_data);
      console.log(int_sum)
      
      //* 변수값 증감 실시
      int_data ++;
    }
            
    //* 결과 출력
    console.log("while 문 합계 : " + int_sum);    		
  };   	    	