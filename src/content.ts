const hideAds = () => {
  const ads = document.querySelectorAll('div[data-text-ad="1"]');
  ads.forEach((ad) => {
    if (ad instanceof HTMLElement) {
      ad.style.display = "none";
    }
  });
};

hideAds();

chrome.runtime.onMessage.addListener((message) => {
  const ads = document.querySelectorAll('div[data-text-ad="1"]');
  if (message.action === "toggleAds") {
    if (message.hide) {
      hideAds();
    } else {
      ads.forEach((ad) => {
        if (ad instanceof HTMLElement) {
          ad.style.display = "";
        }
      });
    }
  }
});
