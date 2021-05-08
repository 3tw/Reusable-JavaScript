/**
 * Example of main.js file with its dependencies (GSAP, GSAP plugins, Swiper, imagesLoaded),
 * helper functions
 * and menu object
 */

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollAnimations from './scrollAnimations'
import imagesLoaded from 'imagesloaded'

import Swiper from 'swiper/bundle'
import exampleProps from './swiperProps'

import Menu from './menu'
import { createCallbackFunction, triggerOnWindowBreak, appendUploadName } from './helpers'

// Register plugins
gsap.registerPlugin(ScrollTrigger)

// Wait for images to load
const preloadedImages = new Promise((resolve, reject) => {
  imagesLoaded(document.querySelectorAll('img'), { background: true }, resolve)
})

preloadedImages.then(() => {
  const scrollAnimations = new ScrollAnimations()
  const menu = new Menu()

  const exampleSlider = new Swiper('.swiper-example-container', exampleProps)

  // Loading complete
  document.body.classList.remove('loading')

  // Refresh ScrollTrigger
  ScrollTrigger.refresh()
})
