//한줄 주석
/*
여
러
줄
주석 C Java 등과 유사*/
//내장 객체 console : 콘솔에 출력 하는 객체
console.info("정보 메세지");
console.debug("디버그 메세지");
console.warn("경고 메세지");
console.error("에러 메세지");

console.log("가장 일반적인 로그 메세지");
//내용을 연속으로 출력할떄는 , 로 구별
console.log("String",201);

//객체의 속성, 메서드에 접근할때는  .로 접근
console.log(Math.PI);
console.log(Math.max(1,2,3,4,58,9));

console.log("-----------------");

//var ,let, const
var testVar =2021;//var es6 이전 방식 -> web에서는 아직 사용한다

//ES6이후
let testLet = "let"; //let 재활당 가능 변수
const testConst = "const";
console.log(testVar,testLet,testConst);

testVar ="var changed";
//testConst ="const changed"; 재할당 불가
//ES6가 지원되는 환경에서는 먼저 const로 할수 있는지 먼저 생각
// ->값이 바뀌는 것이 자연스럽다고 생각하면 let
testLet="let changed";

console.log(testVar,testLet,testConst);

//자바스크립트는 동적 타이핑 언어
//변수 선언시는 데이터 타입이 정해지지 않고
//데이터가 할당될때 그 타입이 결정
let v="this is String";
//데이터 타입 확인 -> typeof
//인터프리터 방식이어서 실행시에만 오류 확인 -> 주의 
console.log(v,"->",typeof v);
v=2021;
console.log(v,"->",typeof v);

