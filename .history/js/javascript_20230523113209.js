const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabActive = $('.tab__item.tab__item--active');
// const tabContentActive = $('.tab__content-item.tab__content-item--active');
const tabs = $$('.tab__item');
const tabContents = $$('.tab__content-item');

tabs.forEach((tab, index) => {
  const tabContent = tabContents[index];
  tab.onclick = function () {
    $('.tab__item.tab__item--active').classList.remove('tab__item--active')
    $('.tab__content-item.tab__content-item--active').classList.remove('tab__content-item--active');
    this.classList.add('tab__item--active');
    tabContent.classList.add('tab__content-item--active');
  }
});
// Review
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = $('.review-item');
  let dots = $('.review__dot');
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += "active";