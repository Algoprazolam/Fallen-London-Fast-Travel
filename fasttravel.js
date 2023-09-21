const travelButtonPara = document.createElement("p");
  travelButtonPara.classList.add("travelButtonPara");
  const travelButtonNode = document.createTextNode("Fast Travel Enabled");
  travelButtonPara.appendChild(travelButtonNode);

setTimeout(() => {
  console.log("calling changetext function")
  changeText()
}, "2000");

function changeText() {
  console.log("starting changetext function");
  const travelButton = window.parent.document.querySelector(".travel-button--infobar");
  console.log(travelButton);  
  travelButton.appendChild(travelButtonPara);
  console.log("changetext function ended ");
};