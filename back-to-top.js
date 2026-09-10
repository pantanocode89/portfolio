(() => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "back-to-top-button";
  button.setAttribute("aria-label", "Back to top");
  button.setAttribute("title", "Back to top");
  button.innerHTML = '<span aria-hidden="true">↑</span>';
  document.body.appendChild(button);
  const footer = document.querySelector(".site-footer");

  let scrolling = false;
  let idleTimer;
  const updateVisibility = () => {
    const footerVisible = footer && footer.getBoundingClientRect().top <= window.innerHeight;
    const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8;
    const visible = scrolling && window.scrollY > 80 && !footerVisible && !atBottom && !document.body.classList.contains("intro-active");
    button.classList.toggle("is-visible", visible);
    button.disabled = !visible;
    button.setAttribute("aria-hidden", String(!visible));
  };

  button.addEventListener("click", () => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? "instant" : "smooth" });
  });

  window.addEventListener("scroll", () => {
    scrolling = true;
    updateVisibility();
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => { scrolling = false; updateVisibility(); }, 1200);
  }, { passive: true });
  window.addEventListener("resize", updateVisibility);
  window.addEventListener("load", updateVisibility);
  if (footer) new IntersectionObserver(updateVisibility).observe(footer);
  updateVisibility();
})();