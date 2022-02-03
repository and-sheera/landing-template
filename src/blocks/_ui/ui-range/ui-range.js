import noUiSlider from 'nouislider'

export default function uiRange() {
  const ranges = document.querySelectorAll('.ui-range')

  for (const range of ranges) {
    const itemRange = range.querySelector('.ui-range-body')
    const minValue = Number.parseInt(range.dataset.min, 10)
    const maxValue = Number.parseInt(range.dataset.max, 10)
    const startValue = Number.parseInt(range.dataset.start, 10)

    noUiSlider.create(itemRange, {
      start: startValue,
      step: 5,
      connect: 'lower',
      range: {
        min: minValue,
        max: maxValue
      },
      tooltips: [
        true
      ],
      format: {
        to: function (value) {
          return Math.round(value)
        },
        from: function (value) {
          return Number(value.replace(',-', ''))
        }
      }
    })

    range.querySelector('.ui-range__value--min .value').innerHTML = minValue.toLocaleString()
    range.querySelector('.ui-range__value--max .value').innerHTML = maxValue.toLocaleString()
  }
}
