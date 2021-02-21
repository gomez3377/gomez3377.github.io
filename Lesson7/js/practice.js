const pic = document.querySelectorAll("[data-src]");

const callbackFunction = function (entries) {
  console.log(entries[0]);
};

const observer = new IntersectionObserver(callbackFunction, {
  threshold: 0.4,
});

observer.observe(pic);
