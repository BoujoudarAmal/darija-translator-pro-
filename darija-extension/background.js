chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true });

// Hada kiy-akhod l-text mn l-page w kiy-dowzo l-sidepanel
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "UPDATE_TEXT") {
    chrome.runtime.sendMessage(request);
  }
});