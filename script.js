var images, carousel, item;

// Describe this function...
function display_carousel_image() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  if (!carousel.length) {
    images.forEach((item) => {
      carousel.unshift(item);
    });
  }
  let element_image = document.getElementById('image');
  element_image.setAttribute("src", carousel.pop());
}


images = ['https://www.w3schools.com/howto/img_nature_wide.jpg', 'https://www.w3schools.com/howto/img_snow_wide.jpg', 'https://www.w3schools.com/howto/img_lights_wide.jpg'];
carousel = [];
display_carousel_image();


document.getElementById('next').addEventListener('click', (event) => {
  display_carousel_image();

});

document.getElementById('pervious').addEventListener('click', (event) => {
  display_carousel_image();

});
