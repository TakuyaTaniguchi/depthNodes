chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if( request.message === "active" ) {
            active();
        }else if(request.message === 'inactive'){
            inactive();
        }
    }
  );


function active(){

    chrome.runtime.sendMessage(
        { value: { contents: "test value from contents" } }
    );

    const head = document.getElementsByTagName('head').item(0);
    const style = document.createElement('style');
    const text = `
        * { background-color: rgba(255,0,0,.2); }
        * * { background-color: rgba(0,255,0,.2); }
        * * * { background-color: rgba(0,0,255,.2); }
        * * * * { background-color: rgba(255,0,255,.2); }
        * * * * * { background-color: rgba(0,255,255,.2); }
        * * * * * * { background-color: rgba(255,255,0,.2); }
        * * * * * * * { background-color: rgba(255,0,0,.2); }
        * * * * * * * * { background-color: rgba(0,255,0,.2); }
        * * * * * * * * * { background-color: rgba(0,0,255,.2); }
    `;
    const rule = document.createTextNode(text);
    style.media = 'screen';
    style.type = 'text/css';
    style.id = 'depthNodes';
    style.appendChild(rule);
    head.appendChild(style);
}

function inactive(){
    const target = document.querySelector('#depthNodes');
    target.parentNode.removeChild(target)
}

