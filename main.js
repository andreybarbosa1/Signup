const swiper = new Swiper(".swiper", {
  speed: 500,
  allowTouchMove: false,
});

const gotoSlide = (index) => {
  swiper.slideTo(index);
};

const restart = () => {
  const inputs = document.querySelectorAll("input");
  const buttons = document.querySelectorAll("button[type=button]");

  buttons.forEach((button) => {
    button.disabled = true;
  });

  gotoSlide(0);
};

const checkValid = (event) => {
  event.target.nextElementSibling.disabled = !event.target.value.length;
};
