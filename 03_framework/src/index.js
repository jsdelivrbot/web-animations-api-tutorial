import snackbarFactory from './snackbar'
import progressBarFactory from './progressBar'
import tabsFactory from './tabs'

const snackbar = snackbarFactory(document.querySelector('.snackbar'))
const progressBar = progressBarFactory(document.querySelector('.progress-bar'))
const tabs = tabsFactory(document.querySelector('.tabs'))

const messageInput = document.getElementById('message')
const progressInput = document.getElementById('progress')

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

