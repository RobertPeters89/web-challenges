console.clear();

const progressBar = document.querySelector('[data-js="progress-bar"]');

function calculateScrollPercentage() {
  const scrollPosition = window.scrollY;
  const innerHeigt = window.innerHeight;
  const clientHeight = document.body.clientHeight;
  return (scrollPosition / (clientHeight - innerHeight)) * 100;
}

document.addEventListener("scroll", () => {
  const percentege = calculateScrollPercentage();
  progressBar.style.width = `${percentege}%`;
});
