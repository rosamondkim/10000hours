// js file
const excBtn = document.querySelector(".btn-exc");

const input = document.querySelector(".cont-inp");
const wannabe = document.querySelector(".txt-wannabe");
const inpWannabe = document.querySelector(".input-wannabe");
const inpTime = document.querySelector(".input-time");

const result = document.getElementById("result");
const wannabeResult = document.querySelector(".result-wannabe");
const timeResult = document.querySelector(".result-time");
const goBtn = document.querySelector(".btn-go");
const modal = document.querySelector(".cont-modal");

function calc10000hours(e){
    const userTime = parseInt(e.value);
    if (isNaN(userTime)){
        alert("제대로 입력하시오");
        // 다시 입력하라고 하고싶다.
    } else {
        timeResult.innerText= Math.ceil(10000/userTime);
    }
}

function showResult(e){
    e.preventDefault();
    result.classList.remove("hidden");
    wannabeResult.innerText = inpWannabe.value;
    calc10000hours(inpTime);
    inpWannabe.value="";
    inpTime.value="";
}
excBtn.addEventListener("click",showResult);


// 문제점 1) 빈칸 입력했을때에 계산이 안되게 해야함
// 문제점 2) 숫자가 아닌 문자 입력했을때에도 계산이 안되게 해야함
// 문제점 3) css -> 모달창 전체화면으로 변경하기

goBtn.addEventListener("click",()=>{
    modal.classList.remove("hidden");
});