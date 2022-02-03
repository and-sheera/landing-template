import $ from 'jquery'
import 'lazysizes'
import uiInput from '../blocks/_ui/ui-input/ui-input'
import uiRange from '../blocks/_ui/ui-range/ui-range'
import sliderInit from '../blocks/slider/slider'
import calcScripts from '../blocks/calc/calc'
import mainBanScripts from '../blocks/main-ban/main-ban'
import servicesScripts from '../blocks/services/services'
import benefitsScripts from '../blocks/benefits/benefits'
import './_backend'

document.addEventListener('DOMContentLoaded', function () {
  uiInput()
  uiRange()
  sliderInit()
  calcScripts()
  anchorScroll()
  mainBanScripts()
  servicesScripts()
  benefitsScripts()
})

function anchorScroll() {
  $('.js-anchor').on('click', function (event) {
    event.preventDefault()
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 400)
    return false
  })
}
