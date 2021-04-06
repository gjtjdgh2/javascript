//배열의 생성 방법1. Array 객체 이용
const v1= new Array(10);//10개 배열
const v2 = new Array();//빈 배열
const v3=new Array(1,"JavaScript",true);//어떤 것이든 들어간다

//길이를 측정 할수 있다
console.log(v1.length,v2.length,v3.length);//.length 속성

//배열의 생성 방법 2 [] 리터럴(추천)
const v4=[];
const colors=['red','green','blue','yellow'];

//배열의 타임 체크
console.log(typeof v4,typeof colors);
//배열 타입을 체크 하는 좀더 추천 하는 방법
console.log("배열체크:",Array.isArray(v4),Array.isArray(colors)); //.isArray  배열이면
                                                                //true 값
//배열을 기본 값으로 채우기 .fill()
const v5 = new Array(10).fill(1);//배열을 10개 짜리 만들고1로 채우기
console.log("v5:",v5);
v5.fill(`change`);
console.log("v5:",v5);

//객체와 배열의 관계
//객체의 속성들도 배열 인덱스 처럼 접근 할수 있다
const person={
    name:"홀길골",
    age:28
};

console.log("속성 접근:",person.name,person.age);
console.log("속성 접근:",person[`name`],person[`age`]);

//자바스크립트 배열은 인덱스를 엄격하게 체크하지 않는다
const arr=[];
console.log("length of arr:" ,arr.length);
arr[10] = 2021;
console.log("length of arr:",arr.length);
console.log("arr:",arr);

//배열 합치기: concat
const veges=[`배추`,`무`,`쪽파`];
const soures = [`소금`,`고춧가루`,`새우젓`];
const ingr = veges.concat(soures);
console.log("CONCAT:",veges,soures,ingr);

//배열 요소를 문자열로 합침: join
console.log("JOIN:",ingr,`=>`,ingr.join(","));//요소를 , 기준으로 합친다

//push pop -> stack(LIFO)처럼 사용 가능  뒤에서 부터 빠짐
let fruits =[`Banana`,`Orange`,`Apple`,`Mango`];
console.log("STACK:",fruits);
fruits.push("Kiwi");
console.log("STACK:",fruits);
fruits.pop(); //추출후 삭제
console.log("STACK:",fruits.pop());
console.log("STACK:",fruits);

//push shift -> Queue(FIFO) 처럼 사용 가능  앞에서 부터 빠짐
fruits =[`Banana`,`Orange`,`Apple`,`Mango`];
console.log("Queue:",fruits);
console.log("shift:",fruits.shift());
console.log("shift:",fruits.shift());
console.log("shift:",fruits.shift());
console.log("Queue:",fruits);
