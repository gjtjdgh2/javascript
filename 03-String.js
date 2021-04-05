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

console.log("================== Search");
console.log("원본: ",s1);

let position =s1.indexOf("Java");
console.log("1st search:",position );
// 검색 시작 위치 조정
position +=4;
position = s1.indexOf("Java",position);
console.log("2nd search: ",position);

position=s1.indexOf("java");
console.log("없는 키워드",position);
console.log("뒤쪽으로 부터 검색 ",s1.lastIndexOf("Script"));

console.log("================= 치환");
console.log("replace JavaScript -> JS",s1.replace("JavaScript","JS"));
console.log("원본:",s1);

console.log("TRIM:","                 Hello,JavaScript             ".trim());//좌우 공백 제거
//String 추가 내용
/* 이스케이프 문자:xmrtn answk qndu gkftn dlTek
 \n:줄 바꿈
 \t:탭
 \':작은 따움표
 \":큰 따움표
 \`:백틱(ES6)
 \$: 달러 기호(ES6)
 */

 //JavaScript의 문자열은 ""or ''
 let message="He said, \"Hello\"";
 message = 'he said, \'Hellow\'';
 console.log(message);

 //템플릿 문자열
 console.log("=================== Template String");
 let temp =24;
 //현재 실내 온도는 24도 입니다

 //ES5 방식
 message="현재 실내 온도 "+temp+"도 입니다";
 console.log("ES5:",message);
 //ES6 방식
 //백틱(`)와 ${} 로 쉽게 가능
 message =`현재 실내 온도는 ${temp} 입니다`;
 console.log("ES6",message);

 //여러 줄 문자열을 만들때
 message = "예전에는 여러줄 문자열 만드는게 \n쉽지 않았어요";
 console.log(message);

 message=`하지만 ES6에서는
 쉽다`;
 console.log(message);