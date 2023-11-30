const checkerConfig = { subtree: true, childList: true };
const storyPage = "https://www.fallenlondon.com/";

let travelButtonDisabledChecker = new MutationObserver(function () {
    let travelButton = window.document.querySelector(".travel-button--infobar");
    if (travelButton != null) {
        travelButton.disabled = false;
        travelButton.innerText = "Fast Travel";
        travelButton.addEventListener("click", function ()  {
            if (window.location.href != storyPage) {
                window.document.querySelector('[data-name="story"] a').click();
            }
        })
    }

    // if (perhapsNotButton != null) {
    //         perhapsNotButton.click();

    // }
});

travelButtonDisabledChecker.observe(document, checkerConfig);
