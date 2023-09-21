let travelButtonPara = document.createElement("p");
travelButtonPara.classList.add("travelButtonPara");
let travelButtonNode = document.createTextNode("Fast Travel Enabled");
travelButtonPara.appendChild(travelButtonNode);

function changeText() {
  const travelButton = window.parent.document.querySelector(".travel-button--infobar");
  travelButton.appendChild(travelButtonPara);
};

setTimeout(() => {
  changeText()
}, "2000");