console.log("------------배열 전개 연산");

//ES5 way 배열 합치기
let arr1=[`홍길동`,`정산`];
let arr2=[`임꺽정`,`전우치`];

console.log("arr1:",arr1);
console.log("arr2:",arr2);
let combined=[];

//ES5 방법1 각 요소를 꺼내서 새 배열에 할당
combined = [arr1[0],arr1[1],arr2[0],arr2[1]];
console.log("combined m1:",combined);

//ES5 방법 concat 매서드 사용
combined = arr1.concat(arr2);//arr1에 arr2를 연결
console.log("combined m2",combined);

//Es5 방법3 빈 배열에 concat 메서드 사용
combined =[].concat(arr1,arr2);
console.log("combined m3:",combined);

//ES6 방법 
combined = [...arr1,...arr2]; //... -> 전개 연산자: 각 요소를 풀어 낸다는 연산자
console.log("ES6 combined:",combined);

//배열의 전개
console.log("원본 배열:",combined);

let [first,second,third ="empty",...others] =arr1;
console.log("arr1:",arr1);
console.log("전개:",first,second,third,others);
console.log("combined:",combined);
[first,second,third="empty",others]=combined;
console.log("전개:",first,second,third,others);

console.log("----------------객체 전개 연산");
let obj1={one: 1, two: 2 ,other:0};
let obj2={three:3,four:4,other:-1};
//ES5 방식으로 두 객체 합치기
//방법 1 수작업 풀어내기
combined ={
    one:obj1.one,
    two:obj1.two,
    three:obj2.three,
    four:obj2.four,
    other:obj1.other
};
console.log("object1",obj1);
console.log("object2",obj2);

console.log("obj combined m1:",combined);

//ES5방법 Object.assign
combined=Object.assign({},obj1,obj2);
console.log("obj combined m2:",combined);
//assign 순서를 바꿔 봅니다
combined=Object.assign({},obj2,obj1);
console.log("obj combined m3:",combined);

//ES6방식 
combined={
    ...obj1,
    ...obj2
}
console.log("ES6 방식:",combined);

//속성 전개
console.log("obj combined:",combined);
let {one,two,other,...otrs}=combined;
console.log("전개:",one,two,other,otrs);