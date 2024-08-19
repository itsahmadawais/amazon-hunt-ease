
const el = document.getElementById("delete");
el.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: function(){
        var elements = document.querySelectorAll('[data-cel-widget^="MAIN-FEATURED_ASINS_LIST"]');
        var amazon_choice = document.getElementsByClassName('s-shopping-adviser');
        elements[0].innerHTML = '';
        try{
          amazon_choice[0].innerHTML = '';
        } catch(e){
          
        }
      },
    });
});

s