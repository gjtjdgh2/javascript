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

//splice:요소의 삭제와 추가
fruits =[`Banana`,`Orange`,`Apple`,`Mango`];
console.log("원본:",fruits);
//인수가 1개 일때 해당 인덱스 부터 끝까지 추출후 삭제
console.log("splice(2)",fruits.splice(2));
console.log("원본:",fruits);

fruits =[`Banana`,`Orange`,`Apple`,`Mango`];
console.log("원본:",fruits);
//인수가 2개  시작 인덱스 ,갯수  추출 후 삭제
console.log("splice(2,1)",fruits.splice(2,1));
console.log("원본:",fruits);
console.log("-----");
fruits =[`Banana`,`Orange`,`Apple`,`Mango`];
console.log("원본:",fruits);
//인수가 3개 이상  시작 인덱스  갯수 추가할것
console.log("splice(2,1items..)",fruits.splice(2,1,"Kiwi","Melon"));
console.log("원본:",fruits);
console.log("-----");

//reverse,slice
console.log("원본:",fruits);
fruits.reverse(); //순버 반대로
console.log("원본:",fruits);
let slices =fruits.slice(1,2); //slice 는 삭제 하지 않는다
console.log("slice:",slices);
console.log("원본:",fruits);
console.log("-----");

//sort
fruits =[`Banana`,`Orange`,`Apple`,`Mango`];
console.log("원본:",fruits);
console.log(fruits.sort());//기본적으로 오름 차순 정렬


//내림차순 혹은 사용자 정의 기준으로 정렬 -> 정렬 기준 함수를 전달
fruits.sort(function(v1,v2){
    /*return 값
    0:두값은 같은 순번
    음수: v1이 앞이다
    양수:v2가 앞이다
    */
   //내림차순 정렬
   if(v1 ==v2)return 0;
    if(v1 <v2) return 1;
    if(v1>v2)return-1;

});
console.log("내림차순 정렬:",fruits);

//split (String의 매서드): 문자열을 특정 구분자를 기준으로 분리,배열로 변환
const str = "JavaScript is something strange than other languages";
let chunks =str.split(" ");

console.log("SPLIT:",chunks);
for(let i=0;i<chunks.length;i++){
    console.log("chunks:",chunks[i]);
}