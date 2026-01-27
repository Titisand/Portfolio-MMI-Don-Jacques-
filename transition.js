
document.documentElement.classList.add("js");

window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("is-ready");

  document.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (!a) return;

    const href = a.getAttribute("href");
    if (!href) return;

    if (href.startsWith("#")) return;
    if (a.target === "_blank") return;
    if (href.startsWith("http")) return;
    if (href.startsWith("mailto:") || href.startsWith("tel:")) return;

    e.preventDefault();
    document.body.classList.remove("is-ready");
    document.body.classList.add("is-leaving");

    setTimeout(() => {
      window.location.href = href;
    }, 280);
  });
});