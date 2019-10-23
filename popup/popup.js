//'use strict';
//alert("Сделай зарядку-v1");

document.querySelector('#start').addEventListener('click', () => {
    chrome.runtime.sendMessage('start');
});

document.querySelector('#stop').addEventListener('click', () => {
    chrome.runtime.sendMessage('stop');
});

// Запрос значения таймера. Можно выполнять по-необходимости
setInterval(() => {
    chrome.runtime.sendMessage('get_time', time => {
        document.querySelector('#time').value = time;
    });
},1);

/* let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function(element) {
  let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style.backgroundColor = "' + color + '";'});
  });
}; 
		<button id="chekPage"> Open page </button>
*/

