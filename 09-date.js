//Date 날짜 시간을 다루는 객체
let now = new Date(); //현재 시간
console.log("현재시간:",now);

let past = new Date(1999,11,31);//1999년 12월 31일
console.log("과거:",past);
past = new Date(1999,11,31,12,30,30);//년 월,일,시,분 ,초
console.log("과거:",past);
console.log("년도:",now.getFullYear()+1900);
console.log("년도:",now.getFullYear());
console.log("월:",now.getMonth());
console.log("일:",now.getDate());
console.log("요일",now.getDay());
