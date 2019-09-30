const startDetection = () => {

  return new Promise(async (res, reject) => {
    var port = chrome.runtime.connect({ name: "requestAudioState" });

    setInterval(() => {
        port.postMessage({});
    }, 250);

    port.onMessage.addListener(function requestAudio(msg) {
      
      var elt = document.createElement("script");
      elt.innerHTML = `
        console.log('${msg.playing}');
        window.audioState = Boolean(${msg.playing});
      `;
      document.head.appendChild(elt);
      elt.remove();
    });
  });
};

startDetection();