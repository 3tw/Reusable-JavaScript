export function Menu() {
  this.el = {
    body: document.getElementsByTagName('body')[0],
    menu: document.querySelector('.menu'),
    menuBtn: document.getElementById('menu-btn'),
    menuBtnClose: document.getElementById('menu-close-btn')
  }

  this.init = function() {
    this.attachListeners()
  }

  this.attachListeners = function() {
    this.el.menuBtn.addEventListener('click', () => this.openMenu())
    this.el.menuBtnClose.addEventListener('click', () => this.closeMenu())
  }

  this.openMenu = function() {
    this.el.menu.classList.add('menu-is-active')
    this.el.menuBtn.classList.add('menu-is-active')
    this.el.body.classList.add('overflow-hidden')
  }

  this.closeMenu = function() {
    this.el.menu.classList.remove('menu-is-active')
    this.el.menuBtn.classList.remove('menu-is-active')
    this.el.body.classList.remove('overflow-hidden')
  }

  this.init()
}
