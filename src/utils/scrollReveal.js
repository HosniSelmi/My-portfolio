export function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
  );

  const elements = document.querySelectorAll('.reveal');
  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}
