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

  scope.play = () => {
    animation.play()
  }
})(window)
