//C Java와 거의 비슷한 조건 분기,반복문 활용
//연습문제1: 
//for문과 while문을 이용,구구단 출력(각각)
for(let i=2;i<10;i++){
    console.log(" ");
    for(let j=1;j<10;j++){
        result=i+"x"+j+"="+(i*j);
        console.log(result);
    }
}

console.log("while");
let a=2;
while(a<10){
    console.log(" ");
    let b=1;
    while(b<10){
        result=a+"x"+b+"="+(a*b);
        console.log(result);
        b++;
    }
    a++;
}
//연습문제2
//for문과 while문을 이용아래 문구 출력
/*

*****
****
***
**
*

*/
let s="*****";
for(let i=5;i>0;i--){
    console.log(s.substr(0,i));
}