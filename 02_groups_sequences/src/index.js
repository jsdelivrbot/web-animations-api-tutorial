import group from './group'

const topLeft = document.querySelector('.square.top-left')
const topRight = document.querySelector('.square.top-right')
const bottomLeft = document.querySelector('.square.bottom-left')
const bottomRight = document.querySelector('.square.bottom-right')

const ANIMATION_DURATION = 4000
let animation

window.group = () => {
  animation = group(topLeft, topRight, bottomLeft, bottomRight, ANIMATION_DURATION)

  animation.play()
}
