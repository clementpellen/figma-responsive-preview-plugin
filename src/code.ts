const baseURL = process.env.BASE_URL;

figma.showUI(__html__);

figma.ui.onmessage = msg => {
  if (msg.type === 'submit-urls') {
    const flow1URL = encodeURIComponent(msg.flow1URL);
    const flow2URL = encodeURIComponent(msg.flow2URL);

    const baseURL = process.env.BASE_URL || "https://responsivepreview.github.io/webapp/index.html";
    const completeURL = `${baseURL}?flow1=${flow1URL}&flow2=${flow2URL}`;

    figma.ui.postMessage({ type: 'display-url', url: completeURL });
  }
};