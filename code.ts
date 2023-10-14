figma.showUI(__html__);

figma.ui.onmessage = msg => {
  if (msg.type === 'submit-urls') {
    const flow1URL = encodeURIComponent(msg.flow1URL);
    const flow2URL = encodeURIComponent(msg.flow2URL);

    const baseURL = "http://127.0.0.1:5500/index.html";
    const completeURL = `${baseURL}?flow1=${flow1URL}&flow2=${flow2URL}`;

    // Mettre à jour l'interface utilisateur avec l'URL générée
    figma.ui.postMessage({ type: 'display-url', url: completeURL });
    
  } else if (msg.type === 'cancel') {
    figma.closePlugin();
  }
};