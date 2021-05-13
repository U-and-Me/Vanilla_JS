// 1일차
//console.log('Im Working. Im JS. Im Beautiful. Im worth it');

// 3일차
// HTML을 DOM형태로 바꾸기

//const title = document.getElementById("title");
const title = document.querySelector("#title"); // id 찾기
title.innerHTML = "Hi! From JS";
title.style.color = "blue";

// console.dir(title);

document.title = "Title";

// #2.4 이벤트
function handleResize(){
    title.style.color = "green";
}
title.addEventListener("click", handleResize);
//handleResize => 윈도우 사이즈가 변경될 때 호출
// handleResize => 지금 호출
