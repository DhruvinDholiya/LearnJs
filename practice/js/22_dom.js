let demoDiv = document.getElementById("demo");
// Make h1 ==================
let h1Ele = document.createElement("h1");
let makeH1Txt = document.createTextNode("Hello");

h1Ele.appendChild(makeH1Txt);

demoDiv.appendChild(h1Ele);

// Make a ================== 
let aEle = document.createElement("a");
aEle.setAttribute("href", "#");
aEle.setAttribute("onclick", "handleClick()");
let aEleTxt = document.createTextNode("HOME");

aEle.appendChild(aEleTxt);

demoDiv.appendChild(aEle);

const handleClick = () => {
    console.log(aEle);
}