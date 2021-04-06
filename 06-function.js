//함수 선언문 :function
function sum(a,b){//매개변수 a,b 를 받아서
return a+b; //return 문 만나면 종료
}
console.log(sum(10,20)); //호출

//함수 표현식: 이름 없는 함수->익명 함수
//함수는 객체이므로 변수로 할당 될수 이거
//다른 함수의 매개 변수로 전달 될수 있다
const asum=function(a,b){
    return a+b;

};

console.log(typeof asum,asum(10,20));

let initText;
(function(number){
    let textList=["홀수","짝수"]; //함수 내부에서만 사용하고 버릴 값
    if(number %2 ==0){
        initText=textList[1];
    }else{
        initText=textList[0];
    }
    console.log(`매개변수 ${number}를 이룔해서 즉시 실행 `);
})(5);
//console.log("textlist",textList); textList 는 함수 내부에 있어서 외부에서 사용 못함

console.log("초기화 진행후 initText",initText);

//함수 매게 변수의 이해
//자바스크립트는 매게변수 선언 하지 않아도 전달되는 모든 인수가 arguments 배열로 전달
function getNumberTotal(){
    //console.log("매개변수:",arguments);
//전달 받은 모근 매개 변수 를 합산 출력
let result=0;
for(let i=0;i<arguments.length;i++){
    //전달 받은 매개 변수가 산술연산 가능?
    if(typeof arguments[i] =="number"){
    result +=arguments[i];//인덱스 접근
    }
}
return result;
}

console.log("getNumberTotal",getNumberTotal(1,2,3,4,5));
console.log("getNumberTotal",getNumberTotal(1,2,"3",4,5));

//javascript의 함수는 객체: 변수에 참조 되거나 다른 함수의 매개 변수로 전달될수 있다
function calUsingCallback(val1,val2,func){
    //내부 실행 로직을 외부 에서 전달 받는다
    if(typeof func == "function"){
        func(val1,val2); //외부로 부터 전달 받은 함수를 내부에서 거꾸로 실행
    }

}
calUsingCallback(3,4,function(v1,v2){
    console.log(v1+v2);
}
);

calUsingCallback(3,4,function(v1,v2){
    console.log(v1*v2);
}
);

console.log("====================  화살표 함수")
//ES6에서 등장한 함수 화살표 함수 =>
const f1=function(){ return "Hellow"};
const f1Arrow = () => "Hellow"; //매개 변수가 없는 화살표 함수
console.log(f1());
console.log(f1Arrow());
const f2= function(name) { return "Hello"+name};
const f2Arrow =(name) => "Hello, "+name;
console.log(f2("gjtjdgh"),f2Arrow("gjtjdgh2"));
const f3 = function(a,b){return a+b};
const f3Arrow=(a,b)=>a+b;
console.log(f3(4,5),f3Arrow(6,7));
//화살표 함수는 함수에 콜백 함수에 유용 하다

calUsingCallback(3,4,(a,b)=> console.log(a+b));