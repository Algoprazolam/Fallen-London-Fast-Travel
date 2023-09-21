let travelButtonPara = document.createElement("p");
travelButtonPara.classList.add("travelButtonPara");
let travelButtonNode = document.createTextNode("Fast Travel Enabled");
travelButtonPara.appendChild(travelButtonNode);
let previousUrl = "";
const urlChangeConfig = {subtree: true, childList: true};

const urlChangeChecker = new MutationObserver( function() {
  console.log("mutenobserv does coco");
  // or || (&& is and) smth else
  if (window.location.href !== previousUrl) {
    previousUrl = window.location.href;
    changeText();
  }
});

function changeText() {
  console.log("starting changetext function");
  const travelButton = window.document.querySelector(".travel-button--infobar");
  travelButton.appendChild(travelButtonPara);
  travelButton.disabled = false;
};

urlChangeChecker.observe(document, urlChangeConfig);

//setinterval
//setTimeout(() => {
//  changeText()
//}, "2000");



