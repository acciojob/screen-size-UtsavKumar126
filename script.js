//your JS code here. If required.
let hEle=document.querySelector("h1");
window.addEventListener("resize",resiz);
function resiz() {
	hEle.textContent=`Width: ${window.outerWidth} and Height : ${window.outerHeight}`;
}
resiz();