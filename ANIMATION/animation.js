(function () {
  const animation_observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.setAttribute("data-reveal", "revealed");
        }
      });
    },
    { threshold: 1 }
  );

  const items = document.querySelectorAll("[data-reveal]");
  items.forEach((item) => {
    animation_observer.observe(item);
  });
})();
