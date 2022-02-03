import { gsap } from 'gsap'

export default function mainBanScripts() {
  gsap.timeline()
    .from('.main-ban__benefit svg .circle', {
      opacity: 0,
      scale: 0,
      stagger: 0.3,
      duration: 0.4,
      transformOrigin: 'center'
    })
    .from('.main-ban__benefit svg .star', {
      opacity: 0,
      scale: 0,
      stagger: 0.3,
      duration: 0.4,
      transformOrigin: 'center'
    })
    .from('.main-ban__benefit-item', {
      opacity: 0,
      stagger: 0.4,
      duration: 0.5
    })
}
