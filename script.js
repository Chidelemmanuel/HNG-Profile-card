(function () {
  // Elements
  const timeEl = document.querySelector('[data-testid="test-user-time"]');
  const avatarImg = document.querySelector('[data-testid="test-user-avatar"]');
  const fileInput = document.getElementById("avatarFileInput");
  const urlInput = document.getElementById("avatarUrlInput");
  const applyUrlButton = document.getElementById("avatarApplyUrl");

  if (!timeEl || !avatarImg) {
    console.warn("Essential elements missing. Make sure data-testids match.");
    return;
  }

  // Set initial time (Date.now()) and update every 1s.
  function renderTime() {
    const now = Date.now();
    timeEl.textContent = String(now);
  }

  renderTime();
  setInterval(renderTime, 1000);

  // Avatar file upload: read file and set as data URL
  fileInput.addEventListener("change", (ev) => {
    const file = ev.target.files && ev.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file.");
      return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
      avatarImg.src = e.target.result;
      avatarImg.alt = "User avatar (uploaded)";
    };
    reader.readAsDataURL(file);

    // Clear the URL input
    urlInput.value = "";
  });

  // Avatar URL apply
  applyUrlButton.addEventListener("click", () => {
    const url = (urlInput.value || "").trim();
    if (!url) {
      alert("Please provide an image URL.");
      return;
    }

    try {
      const parsed = new URL(url);
      if (!/^https?:$/.test(parsed.protocol)) {
        alert("Please use a http or https image URL.");
        return;
      }
    } catch (e) {
      alert("Invalid URL.");
      return;
    }

    // Set the image src.
    avatarImg.src = url;
    avatarImg.alt = "User avatar (from URL)";

    //  clear file input
    fileInput.value = "";
  });

  // If avatar image fails to load,
  avatarImg.addEventListener("error", () => {
    avatarImg.src = "assets/default-avatar.svg";
    avatarImg.alt = "Default avatar";
  });

  //  allow pressing Enter on URL input to apply
  urlInput.addEventListener("keydown", (ev) => {
    if (ev.key === "Enter") {
      ev.preventDefault();
      applyUrlButton.click();
    }
  });
})();