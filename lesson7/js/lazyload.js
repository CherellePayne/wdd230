const images = document.querySelectorAll("[data-src]");


function preloadImage(img) {
   const src = img.getAttribute ("data-src");
   if(!src) {
       return;
   }
  
   img.scr = src;
}

const imgOptions = {
    threshold: 0,
    rootMargin: "0px Opx 300px 0px"
};


const imgObserver = new IntersectionObserver((entries,
    ImageObserver) => {
   entries.forEach(entry => {
    if (!entry.isIntersecting) {
       return;
   } else {
preloadImage(entry.target);
imgObserver.unobserved(entry.target);   
}
});
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
});
