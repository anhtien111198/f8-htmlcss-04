const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabActive = $('.tab__item.tab__item--active');
// const tabContentActive = $('.tab__content-item.tab__content-item--active');
const tabs = $$('.tab__item');
const tabContents = $$('.tab__content-item');
console.log(tabContents)

tabs.forEach((tab, index) => {
  const tabContent = tabContents[index];
  tab.onclick = function () {
    $('.tab__item.tab__item--active').classList.remove('tab__item--active')
    $('.tab__content-item.tab__content-item--active').classList.remove('tab__content-item--active');
    this.classList.add('tab__item--active');
    tabContent.classList.add('tab__content-item--active');
  }
});