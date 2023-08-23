let adsAreHidden = true;

chrome.action.onClicked.addListener((tab) => {
  adsAreHidden = !adsAreHidden;
  chrome.tabs.sendMessage(tab.id!, { action: "toggleAds", hide: adsAreHidden });
  const iconPath = adsAreHidden ? "/active.png" : "/disabled.png";
  chrome.action.setIcon({ path: iconPath, tabId: tab.id! });
});
