//javascript의 문자열

let s1="Modern JavaScript and Java";
let s2=String("Modern JavaScript");

console.log(s1,s2);
console.log(typeof s1, typeof s2);

console.log("s1 == s2 ?",s1==s2);

//문자가 여러 개 연결된 타입: 길이를 잡을수 있다
console.log("String: ",s1,",length: ",s1.length);

//문자열 추출 메서드 인덱스 이용하여 내용에 접근
console.log(s1);
console.log("7th chae:" ,s1.charAt(7));//7번 인덱스 추출
//그 자체로 배열처럼 접근 할수 있다
console.log("7th char:",s1[7]);
console.log(s1.substr(7,10) );//7번 인덱스~10글자 추출
console.log(s1.substr(7));//끝까지
console.log(s1.substring(7,17)); //7~16까지 추출
console.log(s1.substring(7));//7~끝까지