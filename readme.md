# 🎬 YouTube Category Redirect Extension

A simple Chrome extension that:
- Redirects YouTube to a specific category or search term.
- Hides YouTube Shorts for a cleaner browsing experience.

---

## 🚀 Features
- Enter a category/search term in the extension popup.
- Automatically redirect YouTube to show only that category.
- Hide YouTube Shorts from the homepage and search results.
- Lightweight and easy to use.

---

## 📂 Project Structure

```plaintext
youtube-category-redirect/
│── icons/
│   └── icon16.png
│
│── manifest.json      # Extension configuration
│── background.js      # Background script (redirect logic)
│── content.js         # Injected script (hide Shorts & elements)
│── popup.html         # Popup UI
│── popup.js           # Popup logic (save & redirect)
│── styles.css         # Styles for popup UI
│── README.md          # Documentation
```

## 🛠️ Installation
1. Clone or download this repository to your computer.
2. Open **Google Chrome** and navigate to:
chrome://extensions/

markdown
Copy
Edit
3. Enable **Developer mode** (toggle on the top right).
4. Click **Load unpacked**.
5. Select the project folder (`youtube-category-redirect/`).
6. The extension will now appear in your extensions bar.

---

## 📖 Usage
1. Click on the extension icon in Chrome.
2. Enter a category (e.g., `music`, `gaming`, `news`) in the popup search box.
3. YouTube will automatically redirect to show content from that category.
4. Shorts will be hidden from the homepage and results.

---

## 🧩 Files Explained
- **manifest.json** → Extension configuration file.
- **background.js** → Handles redirect logic in the background.
- **content.js** → Modifies YouTube UI (hides Shorts).
- **popup.html** → The popup UI for user input.
- **popup.js** → Logic for the popup search and redirect.
- **styles.css** → Styles for popup UI.
- **icons/** → Folder for extension icons.
- **README.md** → Documentation for the project.

---

## 📌 Example
If you enter **"music"** in the popup, the extension will redirect YouTube to:  
https://www.youtube.com/results?search_query=music