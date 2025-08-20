chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete" && tab.url.includes("youtube.com")) {
        chrome.storage.sync.get(["youtubeCategory", "extensionOn"], ({ youtubeCategory, extensionOn }) => {

            // Only redirect if extension is ON
            if (!extensionOn) return;

            // Redirect homepage to category search
            if (youtubeCategory && (tab.url === "https://www.youtube.com/" || tab.url === "https://www.youtube.com")) {
                chrome.tabs.update(tabId, {
                    url: `https://www.youtube.com/results?search_query=${encodeURIComponent(youtubeCategory)}`
                });
            }

            // If user manually navigates to a search page, update stored category
            else if (tab.url.includes("youtube.com/results?search_query=")) {
                const urlParams = new URLSearchParams(tab.url.split('?')[1]);
                const searchQuery = urlParams.get('search_query');
                if (searchQuery) {
                    chrome.storage.sync.set({ youtubeCategory: searchQuery });
                }
            }

        });
    }
});
