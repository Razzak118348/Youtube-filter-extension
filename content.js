function filterVideosAndHideSearch() {
    chrome.storage.sync.get(["youtubeCategory", "extensionOn"], ({ youtubeCategory, extensionOn }) => {

        // Show everything if extension is OFF
        if (!extensionOn) {
            const videos = document.querySelectorAll("ytd-rich-item-renderer, ytd-video-renderer");
            videos.forEach(video => video.style.display = "");
            const searchBar = document.querySelector("ytd-masthead #search") || document.querySelector("ytd-masthead #search-form");
            if (searchBar) searchBar.style.display = "";
            return;
        }

        // Hide search bar (try multiple possible selectors)
        const searchBarSelectors = [
            "ytSearchboxComponentHost",
            "ytSearchboxComponentDesktop",
            "yt-searchbox-filled-query",
            "ytd-masthead",
            "ytSearchboxComponentHostDark",
            "ytd-masthead #search",
            "ytd-masthead #search-form",
            "ytd-masthead input#search"
        ];
        searchBarSelectors.forEach(sel => {
            const bar = document.querySelector(sel);
            if (bar) bar.style.display = "none";
        });

        // Filter videos
        const videos = document.querySelectorAll("ytd-rich-item-renderer, ytd-video-renderer");
        videos.forEach(video => {
            const titleEl = video.querySelector("#video-title");
            if (titleEl) {
                const title = titleEl.textContent.toLowerCase();
                if (!title.includes(youtubeCategory.toLowerCase())) {
                    video.style.display = "none";
                } else {
                    video.style.display = "";
                }
            }
        });
         // Hide Shorts
        const shortsContainer = document.getElementById("shorts-container");
        if (shortsContainer) shortsContainer.style.display = "none";

         // Hide grid shelves (Recommended, Trending, etc.)
        const gridShelves = document.querySelectorAll("grid-shelf-view-model");
        gridShelves.forEach(grid => grid.style.display = "none");

        //suggestion icon hide
        const suggestionIcons=document.getElementsByClassName("ytChipShapeButtonReset");
        Array.from(suggestionIcons).forEach(icon => icon.style.display = "none");

        //subscription shorts hide
        const subscriptionShorts = document.getElementsByClassName("ytd-rich-grid-renderer");
        Array.from(subscriptionShorts).forEach(short => short.style.display = "none");
    });
}

// Run every 1 second to hide new videos and search bar reliably
setInterval(filterVideosAndHideSearch, 2000);