import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function servicesScripts() {
  gsap.registerPlugin(ScrollTrigger)
  gsap.timeline({
    scrollTrigger: {
      trigger: '.services',
      start: 'top center',
      end: '+=25%',
      once: true
    }
  })
    .from('.services__list li', {
      duration: 0.3,
      y: 30,
      opacity: 0,
      stagger: 0.2
    })
}
