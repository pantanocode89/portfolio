(() => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "back-to-top-button";
  button.setAttribute("aria-label", "Back to top");
  button.setAttribute("title", "Back to top");
  button.innerHTML = '<span aria-hidden="true">↑</span>';
  document.body.appendChild(button);
  const footer = document.querySelector(".site-footer");

  const updateVisibility = () => {
    const footerVisible = footer && footer.getBoundingClientRect().top <= window.innerHeight;
    const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8;
    const visible = window.scrollY > 80 && !footerVisible && !atBottom;
    button.classList.toggle("is-visible", visible);
    button.disabled = !visible;
    button.setAttribute("aria-hidden", String(!visible));
  };

  button.addEventListener("click", () => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? "instant" : "smooth" });
  });

  window.addEventListener("scroll", updateVisibility, { passive: true });
  window.addEventListener("resize", updateVisibility);
  window.addEventListener("load", updateVisibility);
  if (footer) new IntersectionObserver(updateVisibility).observe(footer);
  updateVisibility();
})();