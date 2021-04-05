
let v1;//선언은 했으나 할당되지 않은 변수
let v2=null;//개발자가 비어있느 상태로 할당

console.log("v1",v1);
console.log("v2",v2);

//undefind 체크 ->체크에 유의
console.log(v1,typeof v1,v1===undefined);
//임의로 개발자에 의해 할당 될수도 있다
v2 = undefined;
console.log(v2,typeof v2,v2===undefined);

//== vs ===
console.log(123 == "123"); // number == String
console.log(123 === "123"); // 타입도 비교

// number, String 이 비어있으면  Boolean은 false , 내용이 있으면 true
console.log(Boolean("String"),Boolean(""));
console.log(Boolean(123),Boolean(0)); //!=0.==0