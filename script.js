"use strict";
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const number = document.querySelector(".number");
const slider = document.querySelector(".slider");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const heroImg1 = document.querySelector(".hero-img-1");
const heroImg2 = document.querySelector(".hero-img-2");
const heroImg3 = document.querySelector(".hero-img-3");
const heroImg4 = document.querySelector(".hero-img-4");
const tumbnailImage1 = document.querySelector(".tumbnail-1");
const tumbnailImage2 = document.querySelector(".tumbnail-2");
const tumbnailImage3 = document.querySelector(".tumbnail-3");
const tumbnailImage4 = document.querySelector(".tumbnail-4");
const cartNum = document.querySelector(".cart-num");
const emptyCart = document.querySelector(".empty-cart");
const cartItem = document.querySelector(".cart-item");
const deleteBtn = document.querySelector(".delete-btn");
const addToCart = document.querySelector(".add-to-cart");
const checkOut = document.querySelector(".checkout-btn");
const cart = document.querySelector(".cart");
const cartContainer = document.querySelector(".cart-container");
const itemsNum = document.querySelector(".items-no");
const total = document.querySelector(".total");
const price = document.querySelector(".price");

let increse = 0;
plus.addEventListener("click", function (e) {
  e.preventDefault();
  increse++;
  number.textContent = increse;
  valueChange(increse);
});
minus.addEventListener("click", function (e) {
  e.preventDefault();
  if (number.textContent > 0) {
    increse--;
    valueChange(increse);
  }
  number.textContent = increse;
});
function valueChange(newValue) {
  cartNum.textContent = newValue;
  itemsNum.textContent = newValue;
  const totalValue = newValue * price.textContent;
  total.textContent = `$${totalValue}`;
  if (newValue > 0) {
    addToCart.addEventListener("click", (e) => {
      cartItem.classList.remove("hidden");
      checkOut.classList.remove("hidden");
      emptyCart.classList.add("hidden");
      cartNum.classList.remove("hidden");
    });
  }
  if (newValue === 0) {
    cartItem.classList.add("hidden");
    checkOut.classList.add("hidden");
    emptyCart.classList.remove("hidden");
    cartNum.classList.add("hidden");
  }
}
cart.addEventListener("click", (e) => {
  cartContainer.classList.toggle("hidden");
});
deleteBtn.addEventListener("click", (e) => {
  window.location.reload();
});
checkOut.addEventListener("click", (e) => {
  window.location.reload();
});
menu.addEventListener("click", (e) => {
  slider.classList.remove("hidden");
});
close.addEventListener("click", (e) => {
  slider.classList.add("hidden");
});

tumbnailImage4.addEventListener("click", (e) => {
  e.preventDefault();
  tumbnailImage1.classList.remove("active");
  tumbnailImage2.classList.remove("active");
  tumbnailImage3.classList.remove("active");
  tumbnailImage4.classList.add("active");
  heroImg1.classList.add("md:hidden");
  heroImg2.classList.add("md:hidden");
  heroImg3.classList.add("md:hidden");
  heroImg4.classList.remove("md:hidden");
});
tumbnailImage1.addEventListener("click", (e) => {
  e.preventDefault();

  tumbnailImage1.classList.add("active");
  tumbnailImage2.classList.remove("active");
  tumbnailImage3.classList.remove("active");
  tumbnailImage4.classList.remove("active");
  heroImg1.classList.remove("md:hidden");
  heroImg2.classList.add("md:hidden");
  heroImg3.classList.add("md:hidden");
  heroImg4.classList.add("md:hidden");
});
tumbnailImage2.addEventListener("click", (e) => {
  e.preventDefault();

  tumbnailImage1.classList.remove("active");
  tumbnailImage2.classList.add("active");
  tumbnailImage3.classList.remove("active");
  tumbnailImage4.classList.remove("active");
  heroImg1.classList.add("md:hidden");
  heroImg2.classList.remove("md:hidden");
  heroImg3.classList.add("md:hidden");
  heroImg4.classList.add("md:hidden");
});
tumbnailImage3.addEventListener("click", (e) => {
  e.preventDefault();

  tumbnailImage1.classList.remove("active");
  tumbnailImage2.classList.remove("active");
  tumbnailImage3.classList.add("active");
  tumbnailImage4.classList.remove("active");
  heroImg1.classList.add("md:hidden");
  heroImg2.classList.add("md:hidden");
  heroImg3.classList.remove("md:hidden");
  heroImg4.classList.add("md:hidden");
});

const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
let curSlide = 0;
const maxSlide = slides.length - 1;

slides.forEach((s, i) => {
  s.style.transform = `translateX(${100 * i}%)`;
});

// Next Slide
btnRight.addEventListener("click", function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  updateSlides();
});

// Previous Slide
btnLeft.addEventListener("click", function () {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }
  updateSlides();
});

function updateSlides() {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - curSlide)}%)`;
  });
}

const slidess = document.querySelectorAll(".slidees");
const btnLeftt = document.querySelector(".btn-left-slide");
const btnRightt = document.querySelector(".btn-right-slide");
let curSlidee = 0;
const maxSlidee = slidess.length - 1;
slidess.forEach((s, i) => {
  s.style.transform = `translateX(${100 * i}%)`;
});

// Next Slide
btnRightt.addEventListener("click", function () {
  if (curSlidee === maxSlidee) {
    curSlidee = 0;
  } else {
    curSlidee++;
  }
  updateSlidess();
});

// Previous Slide
btnLeftt.addEventListener("click", function () {
  if (curSlidee === 0) {
    curSlidee = maxSlidee;
  } else {
    curSlidee--;
  }
  updateSlidess();
});

function updateSlidess() {
  slidess.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - curSlidee)}%)`;
  });
}
const heroImgs = document.querySelectorAll(".hero");
const lightBox = document.querySelector(".light-box");
const closeBtn = document.querySelector(".close-btn");

lightBox.classList.add("hidden");
heroImgs.forEach((img) => {
  img.addEventListener("click", () => {
    lightBox.classList.remove("hidden");
  });
});
closeBtn.addEventListener("click", (e) => {
  window.location.reload();
});
