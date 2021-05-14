// 4일차

const title = document.querySelector("#title"); // id 찾기

/*
const BASE_COLOR = "rgb(52, 73, 94)"
const OTHER_COLOR = "#7f8c8d"

function handleClick(){
    const currentColor = title.style.color;
    if(currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    }else{
        title.style.color = BASE_COLOR;
    }
}
*/

const CLICKED_CLASS = "clicked";

function handleClick(){
    /*
    const hasClass = title.classList.contains(CLICKED_CLASS); // true / false 반환
    //const currentClass = title.className;
    if(hasClass){ //currentClass !== CLICKED_CLASS와 같다
        //title.className = CLICKED_CLASS;
        title.classList.remove(CLICKED_CLASS);
        
    }else{
        title.classList.add(CLICKED_CLASS);
        //title.className = "";
    }
    */
   // => 간단하게
   title.classList.toggle(CLICKED_CLASS);
   // 클래스가 있는지 체크해서 있으며 add, 없으면 remove
}

function init(){
    title.style.BASE_COLOR;
    title.addEventListener("click", handleClick);  //=> 클릭할 때
    //title.addEventListener("mouseenter", handleClick); // => 마우스를 갖다놓을 때
}
init();

/*
function handleOffline(){
    console.log("bye bye");
}
function handleOnline(){
    console.log("Welcome back");
}
window.addEventListener("offline",handleOffline);
window.addEventListener("online", handleOnline);
*/
