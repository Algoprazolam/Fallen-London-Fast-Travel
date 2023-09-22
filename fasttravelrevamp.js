const checkerConfig = { subtree: true, childList: true };
const storyPage = "https://www.fallenlondon.com/";
let perhapsNotCheck = false;

let travelButtonDisabledChecker = new MutationObserver(function () {
        let travelButtonGlobal = window.document.querySelector(".travel-button--infobar");
        if (travelButtonGlobal.disabled) {
            console.log("Disabled")
            travelButtonGlobal.disabled = false;
            travelButtonGlobal.innerText = "Fast Travel";
            travelButtonGlobal.addEventListener("click", function ()  {
                if (window.location.href != storyPage) {
                    window.document.querySelector('[data-name="story"] a').click();
                    perhapsNotCheck = true;
                }
            })
        }
        if (perhapsNotCheck) {
            let perhapsNotButton = window.document.querySelector(".buttons--storylet-exit-options button");
            if (perhapsNotButton != null) {
                perhapsNotButton.click();
                perhapsNotCheck = false;
            }
        }
});     
        
    
travelButtonDisabledChecker.observe(document, checkerConfig);
