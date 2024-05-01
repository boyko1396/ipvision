// TabsDocument.js
export default class TabsDocument {
  constructor() {
    this.tabNavItems = document.querySelectorAll('.js-tab-nav .document-section__nav-link');
    this.tabContentItems = document.querySelectorAll('.js-tab-content .document-section__content-item');

    this.tabNavItems.forEach((item, index) => {
      item.addEventListener('click', (event) => {
        event.preventDefault();
        this.setActiveTab(index);
      });
    });

    this.setActiveTab(0);
  }

  setActiveTab(index) {
    this.tabContentItems.forEach(item => {
      item.classList.remove('is-show');
    });
    this.tabContentItems[index].classList.add('is-show');
    this.tabNavItems.forEach(item => {
      item.classList.remove('is-active');
    });
    this.tabNavItems[index].classList.add('is-active');
  }
}