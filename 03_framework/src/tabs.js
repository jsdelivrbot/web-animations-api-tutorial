export default element => {
  const links = element.querySelectorAll('.tablinks')
  const tabContents = element.querySelectorAll('.tabcontent')

  const animationDuration = element.dataset.animationDuration ? parseInt(element.dataset.animationDuration) : 150
  const startIndex = element.dataset.startIndex ? parseInt(element.dataset.startIndex) : 0

  let activeIndex = -1
  const changeListners = []

  const timing = {
    duration: animationDuration,
    fill: 'forwards',
    easing: 'ease-in-out'
  }

  const showKeyframes = [
    {
      opacity: 0
    },
    {
      opacity: 1
    }
  ]

  const hideKeyframes = [...showKeyframes].reverse()

  const setActiveTab = indexToShow => {
    if (indexToShow !== activeIndex) {
      links.forEach((link, index) => {
        if (index === indexToShow) {
          link.classList.add('active')
        } else {
          link.classList.remove('active')
        }
      })

      showTab(activeIndex, indexToShow)

      activeIndex = indexToShow
    }
  }

  const showTab = (indexToHide, indexToShow) => {
    const sequenceEffects = []
    if (indexToHide > -1) {
      sequenceEffects.push(new KeyframeEffect(tabContents[indexToHide], hideKeyframes, timing))
    }

    sequenceEffects.push(new KeyframeEffect(tabContents[indexToShow], showKeyframes, timing))

    const effect = new SequenceEffect(sequenceEffects)

    const animation = new Animation(effect, document.timeline)

    animation.onfinish = () => {
      changeListners.forEach(cb => cb(indexToShow))
    }

    animation.play()
  }

  setActiveTab(startIndex)

  links.forEach((link, index) => {
    link.addEventListener('click', () => setActiveTab(index))
  })

  const addChangeListener = cb => {
    changeListners.push(cb)
  }

  return {
    setActiveTab,
    addChangeListener
  }
}
