'use strict';


function onClickButton() {
    const data = document.getElementById("button").value;
    if(data === 'active'){
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
            var activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id, {"message": data});
         });
         document.getElementById("button").value = 'inactive';
    }else if(data === 'inactive'){
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
            var activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id, {"message": data});
         });
         document.getElementById("button").value = 'active';
    }

}


document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("button").addEventListener("click", onClickButton);
});