const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add('scroll-animation-on');
      } else {
        entry.target.classList.remove('scroll-animation-on');
      }
    });
  },
  {
    threshold: [0.4],
  }
);

const elementsToAnimate = document.querySelectorAll('.scroll-animation');
elementsToAnimate.forEach((element) => observer.observe(element));
