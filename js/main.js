document.addEventListener("DOMContentLoaded", () => {
  const c = window.PAKU_CONFIG;

  document.querySelectorAll("[data-download]").forEach(a => {
    a.href = c.DOWNLOAD_URL;
    if (c.DOWNLOAD_URL === "YOUR_DIRECT_DOWNLOAD_URL") {
      a.addEventListener("click", e => {
        e.preventDefault();
        alert("Add your direct GitHub Release .exe link in js/config.js ♡");
      });
    }
  });

  document.querySelectorAll("[data-github]").forEach(a => {
    a.href = c.GITHUB_URL;
    if (c.GITHUB_URL === "YOUR_GITHUB_REPOSITORY_URL") {
      a.addEventListener("click", e => {
        e.preventDefault();
        alert("Add your GitHub repository link in js/config.js ♡");
      });
    }
  });

  const lightbox = document.getElementById("lightbox");
  const large = document.getElementById("large");
  document.querySelectorAll("[data-image]").forEach(btn => {
    btn.addEventListener("click", () => {
      large.src = btn.dataset.image;
      lightbox.classList.add("open");
    });
  });
  document.getElementById("close").addEventListener("click", () => lightbox.classList.remove("open"));
  lightbox.addEventListener("click", e => { if (e.target === lightbox) lightbox.classList.remove("open"); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") lightbox.classList.remove("open"); });
});
