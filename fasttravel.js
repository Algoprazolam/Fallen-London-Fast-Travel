
const checkerConfig = { subtree: true, childList: true };
let interval;
let fastTravelling = false;
const storyPage = "https://www.fallenlondon.com/";

function startFastTravel() {
    //when function is called set fastTravelling to true.
    fastTravelling = true;
    //if youre not on the story page it will go there by clicking the button on the page
    //its a SPA so doing a normal redirect refreshes everything
    if (window.location.href != storyPage) {
        window.document.querySelector('[data-name="story"] a').click();
    }
};

//clear the interval that runs the look for travel function
function stopLookForTravel() {
    clearInterval(interval);
    interval = null;
};
// When the page changes
const travelButtonDisabledChecker = new MutationObserver(function () {
    // If not already looking for controls to modify, start lookin
    if (interval == null) {
        lookForTravel()
    }
});



function lookForTravel() {
    // Check every few ms for...
    interval = setInterval(function () {
        // ... the travel button
        let travelButton = window.document.querySelector(".travel-button--infobar");
        let perhapsNotButton = window.document.querySelector(".buttons--storylet-exit-options button");
        if (travelButton == null) {
            travelButton = window.document.querySelector(".travel-button--infobar");
        }
        else {
            // So it can be modified to say "fast travel" and a different event
            //stopLookForTravel()
            if (travelButton.disabled) {
                travelButton.addEventListener("click", startFastTravel);
                travelButton.disabled = false;
                travelButton.innerText = "Fast Travel";
            }          
        }
        // ... perhaps not button
        //if it is null loook for it
        if (perhapsNotButton == null) {
            perhapsNotButton = window.document.querySelector(".buttons--storylet-exit-options button");
        } else {
            // if there is a perhapsnotbutton
            function removeListener() {
                travelButton.removeEventListener("click", startFastTravel);   
                travelButton.innerText="Travel";
            };
            perhapsNotButton.addEventListener("click", removeListener);
            // and you are fast travelling, click it
            if (fastTravelling) {
                perhapsNotButton.click(); 
            }
        }

        // ... if the url is storyPage AND you are fastTravelling AND there is no perhapsbutton
        if (window.location.href == storyPage && fastTravelling && perhapsNotButton == null) {
            // Click the travel button
            fastTravelling = false;
            travelButton.removeEventListener("click", startFastTravel);           
            stopLookForTravel();
            travelButton.click();


        }


    }, 500);
};



travelButtonDisabledChecker.observe(document, checkerConfig);
