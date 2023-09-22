const checkerConfig = { subtree: true, childList: true };
const travelButtonDisabledChecker = new MutationObserver(function () {
    const travelButton = window.document.querySelector(".travel-button--infobar");
    if (travelButton.disabled) {
        travelButton.disabled = false;
        travelButton.innerText = "Fast Travel";
    }
    if (travelButton != null) {
        addEventListener("click", function () {
            
        })
    }
});

travelButtonDisabledChecker.observe(document, checkerConfig);
