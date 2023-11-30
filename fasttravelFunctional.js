
const checkerConfig = { subtree: true, childList: true };
let interval;
let fastTravelling = false;
const storyPage = "https://www.fallenlondon.com/";


function lookForTravel() {
    // Check every few ms for...
    interval = setInterval(function () {
        // ... the travel button
        let travelButton = window.document.querySelector(".travel-button--infobar");
        if (travelButton == null) {
            travelButton = window.document.querySelector(".travel-button--infobar");
        }
        else {
            // So it can be modified to say "fast travel" and a different event
            //stopLookForTravel()
            travelButton.disabled = false;
            travelButton.innerText = "Fast Travel";
            travelButton.addeventlistener("click", function () {
                fastTravelling = true;
                if (window.location.href != storyPage) {
                    window.document.querySelector('[data-name="story"] a').click();
                }
            });
        }

        // ... perhaps not button
        let perhapsNotButton = window.document.querySelector(".buttons--storylet-exit-options button");
        if (perhapsNotButton == null) {
            perhapsNotButton = window.document.querySelector(".buttons--storylet-exit-options button");
        } else {
            // if there is a perhapsnotbutton
            // and you are fast travelling, click it
            if (fastTravelling) {
                perhapsNotButton.click();
            }
        }

        // ... if the url is storyPage AND you are fastTravelling AND there is no perhap sbutton
        if (window.location.href == storyPage && fastTravelling && perhapsNotButton == null) {
            // Click the travel button
            fastTravelling = false;
            stopLookForTravel()
            travelButton.click();


        }


    }, 500);
};

function stopLookForTravel() {
    clearInterval(interval);
    interval = null;
}
// When the page changes
const travelButtonDisabledChecker = new MutationObserver(function () {
    // If not already looking for controls to modify, start lookin
    if (interval == null) {
        lookForTravel()
    }
});

travelButtonDisabledChecker.observe(document, checkerConfig);
