((scope) => {
  const element = document.querySelector('.square')

  const keyframes = [
    {
      backgroundColor: 'red'
    },
    {
      backgroundColor: 'yellow'
    }
  ]

  const timing = {
    duration: 2000,
    fill: 'forwards',
    easing: 'ease-in-out'
  }

  const effect = new scope.KeyframeEffect(element, keyframes, timing)

  const animation = new scope.Animation(effect, document.timeline)

  scope.toYellow = () => {
    animation.play()
  }

  const range = document.querySelector('#range')

  range.addEventListener('input', () => {
    animation.currentTime = 2000 * range.value / 100
  }, false)
})(window)
