let travelButtonPara = document.createElement("p");
travelButtonPara.classList.add("travelButtonPara");
let travelButtonNode = document.createTextNode("Fast Travel Enabled");
travelButtonPara.appendChild(travelButtonNode);
let previousUrl = "";
const urlChangeConfig = {subtree: true, childList: true};
const storyPage = "https://www.fallenlondon.com/";

const urlChangeChecker = new MutationObserver( function() {
  // alternative if null travelbutton catch doesnt work: or || (&& is and) smth else
  if (window.location.href !== previousUrl) {
    previousUrl = window.location.href;
    changeText();
  }
});

//todo: run query selector as long as travelbutton query is not null then clear interval

function changeText() {
  console.log("starting changetext function");
  const travelButton = window.document.querySelector(".travel-button--infobar");
  const storyButton =  window.document.querySelector('[data-name="story"] a');
  const perhapsNotButton = window.document.querySelector(".buttons--storylet-exit-options button");
  //todo: use an if or trycatch to append if travelbutton is not null
  travelButton.appendChild(travelButtonPara);
  travelButton.disabled = false;
  travelButton.addEventListener("click", function () {
    if (window.location.href != storyPage) {
     storyButton.click();
      console.log("ran thru the redirect if");
    }
    if ( perhapsNotButton != null)
    console.log("found the perhaps not button");
    perhapsNotButton.click();

  }
  )
};




urlChangeChecker.observe(document, urlChangeConfig);


/* 
if travelbutton queryselector is null
try finding it again and add all the functionality to it

functionality should be to redirect to storypage, wait a bit; check to see it perhapsnot button exists and click it: then travel


*/



