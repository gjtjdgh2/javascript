//javascript 의 숫자
//산술연산 가능
let n1=5;
let n2=Number(5);

console.log(n1,"==",n2,"?",n1==n2);
console.log(typeof n1,typeof n2);

//Math 내장 객체의 활용: 각종 수학 상수,함수들을 가진 내장 객체
console.log(Math.min(2,5,4,6,87,9,123),Math.max(54,9,8,5,31,2,45,489));
let n3=3.567;
//round 반올림, floor 버림
console.log(n3,"=>",Math.round(n3),", ",Math.trunc(n3),", ",Math.floor(n3));

//그외 number  객체가 가진 상수들
console.log("표현할 수 있는 최대 정수: " ,Number.MAX_SAFE_INTEGER);
console.log("표현 할수 있는 가장 큰수: ",Number.MAX_VALUE);
console.log("표현할수있는 최소 정수: ",Number.MIN_SAFE_INTEGER);
console.log("표현할수있는 가장 작은 수: ",Number.MIN_VALUE);

//Casting
//자바스크립트는 문자열로 전달 받은 수치 데이터를 Number로 변환해야 하는 경우가 많다
console.log("===================== Casting")
//parseInt,parseFlost
console.log(parseInt("011"));//10진수 int 로 변환  11
console.log(parseInt("011",2));//2진수로 표현
console.log(parseInt("123.456"));// 정수 123
console.log(parseFloat("123.456"));// 그대로 123.456 

//parseInt: float->int 변활할때도 사용
console.log(Math.PI,parseInt(Math.PI));

let n4=parseInt("abvc123");//숫자 변환할 수 형태의 Casting
console.log(n4,typeof n4);//nan ->number 이지만 산술 연산이 불가능
console.log(n4 +10);//nan 가 포함된 산술 연산식은 항상 nan
//nan인지 확인 하려면 isNan함수 사용
console.log(n4,"is Nan?",isNaN(n4));

let result= 1/0; //Infinity
console.log(result,"is", typeof result);

//Infinity 가 포함된 산술식은 할상 Infinity
console.log(result+10);
//number 객체가 산술연산 가능한 데이터인지 확인 isFinite() 함수 사용
console.log(result,"is finite",isFinite(result));