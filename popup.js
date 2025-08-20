// ON / Save button
document.getElementById("save").addEventListener("click", async () => {
    const category = document.getElementById("category").value.trim();
    if (!category) return;

    // Save category and turn extension ON
    chrome.storage.sync.set({ youtubeCategory: category, extensionOn: true });

    // Redirect current YouTube tab
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab.url.includes("youtube.com")) {
        chrome.tabs.update(tab.id, { url: `https://www.youtube.com/results?search_query=${encodeURIComponent(category)}` });
    }
});

// OFF button
document.getElementById("off").addEventListener("click", async () => {
    // Turn extension OFF
    chrome.storage.sync.set({ extensionOn: false });

    // Reload YouTube tab to show normal homepage
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab.url.includes("youtube.com")) {
        chrome.tabs.update(tab.id, { url: "https://www.youtube.com/" });
    }
});
