import progressBarFactory from './progressBar'
import snackbarFactory from './snackbar'
import tabsFactory from './tabs'

const progressBar = progressBarFactory(document.querySelector('.progress-bar'))
const snackbar = snackbarFactory(document.querySelector('.snackbar'))
const tabs = tabsFactory(document.querySelector('.tabs'))

const messageInput = document.getElementById('message')
const progressInput = document.getElementById('progress')
const tabsAnimationTypeInput = document.getElementById('tabs-animation-type')

tabsAnimationTypeInput.addEventListener('change', event => {
  tabs.setAnimationType(event.target.value)
})

snackbar.addHideListener(() => {
  console.log('snackbar closed')
})

tabs.addChangeListener(index => {
  snackbar.show(`Tab ${index} is now visible`)
})

window.show = () => {
  snackbar.show(messageInput.value)
}

window.setProgress = () => {
  progressBar.changeValue(progressInput.value)
}

