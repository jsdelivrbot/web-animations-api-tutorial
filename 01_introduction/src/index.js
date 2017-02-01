((scope) => {
  const element = document.querySelector('.square')

  const ANIMATION_DURATION = 2000

  let currentColor = 'red'
  let animation = null

  const timing = {
    duration: ANIMATION_DURATION,
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

  const range = document.querySelector('#range')

  range.addEventListener('input', () => {
    if (animation) {
      animation.pause()
      animation.currentTime = ANIMATION_DURATION * range.value / 100
    }
  }, false)
})(window)
