//your JS code here. If required.
let body=document.getElementsByTagName("BODY")[0];
window.addEventListener("resize",resize);
function resize() {
	body.textContent=`Width: ${window.outerWidth} and Height : ${window.outerHeight}`;
}
resize();