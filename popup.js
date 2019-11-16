'use strict';


function onClickButton() {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "active"});
     });
}


document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("button").addEventListener("click", onClickButton);
});