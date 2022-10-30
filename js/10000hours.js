// js file
const excBtn = document.querySelector(".btn-exc");

const input = document.querySelector(".cont-inp");
const wannabe = document.querySelector(".txt-wannabe");
//첫번재인풋 wannabe
const inpWannabe = document.querySelector(".input-wannabe");
// wannabe 내의 인풋
const inpTime = document.querySelector(".input-time");
// time 인풋

const result = document.getElementById("result");
const wannabeResult = document.querySelector(".result-wannabe");
const timeResult = document.querySelector(".result-time");
const goBtn = document.querySelector(".btn-go");
const modal = document.querySelector(".cont-modal");


function calc10000hours(){
    const userTime = parseInt(inpTime.value);
    timeResult.innerText= Math.ceil(10000/userTime);
}

function showResult(){
    // input 의 유효성검사
    if(inpTime.value<=0||inpTime.value>24||isNaN(inpTime.value-1)||inpWannabe.value===" "){
        alert('제대로 입력하세요!!');
        return
    }
    result.classList.remove("hidden");
    wannabeResult.innerText = inpWannabe.value;
    calc10000hours(inpTime);
    inpWannabe.value="";
    inpTime.value="";
}
excBtn.addEventListener("click",showResult);


// 문제점 3) css -> 모달창 전체화면으로 변경하기

goBtn.addEventListener("click",()=>{
    modal.classList.remove("hidden");
});



// 1)    if (inpTime.value === NaN || inpWannabe.value ===""){
//     return false;
//     // 궁금함 1) return 이 뭔지?
//     // 문제점 1) 하나만 입력했을때에 결과 나와버림
// }