import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function benefitsScripts() {
  gsap.registerPlugin(ScrollTrigger)
  gsap.timeline({
    scrollTrigger: {
      trigger: '.benefits',
      start: 'top center',
      end: '+=25%',
      once: true
    }
  })
    .from('.benefits__item', {
      duration: 0.4,
      y: 40,
      opacity: 0,
      stagger: 0.4
    })
}
