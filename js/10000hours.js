const excBtn = document.querySelector(".btn-exc");

const input = document.querySelector(".cont-inp");
//폼
const wannabe = input.querySelector(".txt-wannabe");
//첫번째 인풋 wannabe
const inpWannabe = input.querySelector(".input-wannabe");
// wannabe 내의 인풋
const inpTime = input.querySelector(".input-time");
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
    // 유효성검사
    let timeValue = inpTime.value;
    let wannabeValue = inpWannabe.value;
    // isNaN -1
    if (timeValue > 24 || timeValue <= 0 || isNaN(timeValue) || !(wannabeValue) || wannabeValue==" "
    ) {
        alert('올바르게 입력해주세요!')
        return;
    }
    result.classList.remove("hidden");
    wannabeResult.innerText = inpWannabe.value;
    calc10000hours();
    inpWannabe.value="";
    inpTime.value="";
}
excBtn.addEventListener("click",showResult);


goBtn.addEventListener("click",()=>{
    modal.classList.remove("hidden");
    document.body.classList.add("stop-scroll");
});


// 추가기능: 공유하기 버튼 눌렀을때 링크 복사되도록
// 추가기능: 모달창 바깥 누르면, 모달창 닫히고 새로고침되게

// 문제 1 : 제대로 입력해도, input창에 제대로 입력하라는 required
