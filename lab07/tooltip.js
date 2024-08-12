/* write functions that define the action for each event */
function showTip (elementID) {
	console.log("Show Tip")
	var sidTip = document.getElementById(elementID); //obtain access to the HTML tool tip element using id "sidTip" and link it a varialbe named sidTip
	sidTip.style.display = "inline"; //display the HTML tool tip element sidTip bying change the value of its CSS property "display" to "inline"
}

function hideTip (elementID) {  //this function hides the tool tip
	console.log("Hide Tip")
	var sidTip = document.getElementById(elementID);				//first, get access to the tool tip HTML element
	sidTip.style.display = "none";				//then, hide the tool tip HTML element by changing its CSS property "display" to "none"
}

function init () {	/* the init function links functions to appropriate events of corresponding HTML elements */
	var sid = document.getElementById("sid");				/* create a variable named sid */ /* get access to the HTML element by its id "sid" and link it to sid */
	// event listeners for sid
	sid.addEventListener("mouseover", () => showTip("sidTip"));				/* link function showTip to the onmouseover event of sid */
	sid.addEventListener("mouseout", () => hideTip("sidTip"));				/* link function hideTip to the onmouseout event of sid  */
	sid.addEventListener("focus", () => showTip("sidTip"));
	sid.addEventListener("blur",  () => hideTip("sidTip"));

	// Password input listeners
	var pwd1 = document.getElementById("pwd1");
	pwd1.addEventListener("mouseover", () => showTip("pwd1Tip"));
	pwd1.addEventListener("mouseout", () => hideTip("pwd1Tip"));
	pwd1.addEventListener("focus", () => showTip("pwd1Tip"));
	pwd1.addEventListener("blur",  () => hideTip("pwd1Tip"));
	var pwd2 = document.getElementById("pwd2");
	pwd2.addEventListener("mouseover", () => showTip("pwd2Tip"));
	pwd2.addEventListener("mouseout", () => hideTip("pwd2Tip"));
	pwd2.addEventListener("focus", () => showTip("pwd2Tip"));
	pwd2.addEventListener("blur",  () => hideTip("pwd2Tip"));
}

window.onload = init;				/* link function init to the onload event of the window so that function init will be called when the page is loaded */