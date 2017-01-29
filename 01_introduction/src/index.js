((scope) => {
  const element = document.querySelector('.square')

  let currentColor = 'red'
  let animation = null

  const timing = {
    duration: 1000,
    fill: 'forwards',
    easing: 'ease-in-out'
  }

  scope.changeColor = (color) => {
    const keyframes = [
      {
        backgroundColor: currentColor
      },
      {
        backgroundColor: color
      }
    ]

    currentColor = color

    const effect = new scope.KeyframeEffect(element, keyframes, timing)

    animation = new scope.Animation(effect, document.timeline)

    animation.onfinish = () => {
      console.log(`the square is now ${color}`)
    }

    animation.play()
  }

  scope.changeToCustomColor = () => {
    scope.changeColor(`#${document.getElementById('custom').value}`)
  }

  const range = document.querySelector('#range')

  range.addEventListener('input', () => {
    if (animation) {
      animation.pause()
      animation.currentTime = 1000 * range.value / 100
    }
  }, false)
})(window)
