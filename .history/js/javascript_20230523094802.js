const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabActive = $('.tab__item.tab__item--active');
// console.log(tabActive)
const tabs = $$('.tab__item');
// console.log(tabs);
const tabContent = $$('.tab__content-item');

tabs.forEach((tab, index) => {
  tab.onclick = function () {
    console.log(this)
  }
});