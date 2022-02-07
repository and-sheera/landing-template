import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function calcScripts() {
  if (document.querySelectorAll('.calc')) {
    const range = document.querySelector('.calc .ui-range-body')
    range.noUiSlider.on('update', updateTable)
    alignRows()
    animationCalc()
  }
}
function updateTable(values, handle) {
  const time = values[handle]

  const cahsRateStaff = 2000
  const cahsRateFreelance = 2500
  const cahsRateOur = 1000

  const salaryStaff = document.querySelector('#staff_salary')
  const vacationStaff = document.querySelector('#staff_vacation')
  const rentStaff = document.querySelector('#staff_rent')
  const salaryFreelance = document.querySelector('#freelance_salary')
  const salaryOur = document.querySelector('#our_salary')

  const totalStaff = document.querySelector('#staff_total')
  const totalFreelance = document.querySelector('#freelance_total')
  const totalOur = document.querySelector('#our_total')

  salaryStaff.innerHTML = toMoneyString(cahsRateStaff * time * 12)
  salaryFreelance.innerHTML = totalFreelance.innerHTML = toMoneyString(cahsRateFreelance * time * 12)
  salaryOur.innerHTML = totalOur.innerHTML = toMoneyString(cahsRateOur * time * 12)

  vacationStaff.innerHTML = toMoneyString(100 * time)
  rentStaff.innerHTML = toMoneyString(1200 * time)

  const costsItems = [...salaryStaff.closest('.calc__table-container').querySelectorAll('.calc__table-item')]
  let totalStaffNumber = toNumber(salaryStaff.innerHTML)
  for (const item of costsItems) {
    if (item !== salaryStaff) {
      totalStaffNumber += toNumber(item.innerHTML)
    }
  }

  totalStaff.innerHTML = toMoneyString(totalStaffNumber)
}

function toMoneyString(number) {
  return `${number.toString().replace(/(\d{1,3}(?=(?:\d{3})+(?!\d)))/g, '$1 ')} $`
}

function toNumber(string) {
  return +string.slice(0, -1).replace(/\s/g, '')
}

function alignRows() {
  if (window.innerWidth > 767) {
    const columnsTitle = [...document.querySelectorAll('.calc__table-head'), document.querySelector('.calc__table-title')]
    let maxHeight = 0
    for (const element of columnsTitle) {
      if (maxHeight < element.offsetHeight) {
        maxHeight = element.offsetHeight
      }
    }
    for (const element of columnsTitle) {
      element.style.height = `${maxHeight}px`
    }

    const headingTitles = [...document.querySelectorAll('.calc__table-subtitle')]
    const columns = [...document.querySelectorAll('.calc__table-column')]

    const ceils = []

    ceils.push(headingTitles)
    for (const column of columns) {
      const list = [...column.querySelectorAll('.calc__table-ceil')]
      ceils.push(list)
    }

    const numberRows = headingTitles.length

    for (let ceil = 0; ceil < numberRows; ceil++) {
      maxHeight = 0
      for (const column of ceils) {
        if (column[ceil] && maxHeight < column[ceil].offsetHeight) {
          maxHeight = column[ceil].offsetHeight
        }
      }
      for (const column of ceils) {
        if (column[ceil]) {
          column[ceil].style.height = `${maxHeight}px`
        }
      }
    }
  }
}

function animationCalc() {
  gsap.registerPlugin(ScrollTrigger)
  if (window.innerWidth > 767) {
    gsap.timeline({
      scrollTrigger: {
        trigger: '.calc',
        start: 'top top',
        end: '+=25%',
        once: true
      }
    }).from('.calc__table-column', {
      duration: 0.4,
      x: 80,
      opacity: 0,
      stagger: 0.4
    })
  }
}
