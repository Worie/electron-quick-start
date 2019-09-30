chrome.runtime.onConnect.addListener(async function (port) {
  port.onMessage.addListener(async function handler(msg, obj) {
    port.postMessage({
      playing: JSON.stringify(obj.sender.tab),
    });
  });
});
