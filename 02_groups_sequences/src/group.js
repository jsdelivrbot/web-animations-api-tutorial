export default (topLeft, topRight, bottomLeft, bottomRight, duration) => {
  const topLeftKeyframes = [
    {
      top: 0,
      left: 0
    },
    {
      top: window.getComputedStyle(topLeft).bottom,
      left: window.getComputedStyle(topLeft).right
    },
    {
      top: 0,
      left: 0
    }
  ]

  const topRightKeyframes = [
    {
      top: 0,
      right: 0
    },
    {
      top: window.getComputedStyle(topRight).bottom,
      right: window.getComputedStyle(topRight).left
    },
    {
      top: 0,
      right: 0
    }
  ]

  const bottomLeftKeyframes = [
    {
      bottom: 0,
      left: 0
    },
    {
      bottom: window.getComputedStyle(bottomLeft).top,
      left: window.getComputedStyle(bottomLeft).right
    },
    {
      bottom: 0,
      left: 0
    }
  ]

  const bottomRightKeyframes = [
    {
      bottom: 0,
      right: 0
    },
    {
      bottom: window.getComputedStyle(bottomRight).top,
      right: window.getComputedStyle(bottomRight).left
    },
    {
      bottom: 0,
      right: 0
    }
  ]

  const timing = {
    duration: duration,
    fill: 'forwards',
    easing: 'ease'
  }

  const effects = [
    new KeyframeEffect(topLeft, topLeftKeyframes, timing),
    new KeyframeEffect(topRight, topRightKeyframes, timing),
    new KeyframeEffect(bottomLeft, bottomLeftKeyframes, timing),
    new KeyframeEffect(bottomRight, bottomRightKeyframes, timing)
  ]

  const group = new GroupEffect(effects)

  const animation = new Animation(group, document.timeline)

  return animation
}
