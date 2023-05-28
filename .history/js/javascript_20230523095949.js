const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabActive = $('.tab__item.tab__item--active');
// const line = $('.tab__item--active::after');
// console.log(line)
const tabs = $$('.tab__item');
// console.log(tabs);
const tabContent = $$('.tab__content-item');

tabs.forEach((tab, index) => {
  tab.onclick = function () {
    $('.tab__item.tab__item--active').classList.remove('tab__item--active')
    this.classList.add('tab__item--active');
  }
});