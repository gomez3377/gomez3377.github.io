const images = document.querySelectorAll('[data-src]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };  
};

const imgOptions = {
  threshold: 0.3,
  rootMargin: "-50px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
entries.forEach((entry) => {
  if (!entry.isIntersecting) {
    return;
  } else {
    loadImages(entry.target);
    imgObserver.unobserve(entry.target);
  }
});
}, imgOptions);

images.forEach((image) => {
imgObserver.observe(image);
});
