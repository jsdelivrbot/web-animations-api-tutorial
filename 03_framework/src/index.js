import snackbarFactory from './snackbar'
import progressBarFactory from './progressBar'

const snackbar = snackbarFactory(document.querySelector('.snackbar'))
const progressBar = progressBarFactory(document.querySelector('.progress-bar'))

const messageInput = document.getElementById('message')
const progressInput = document.getElementById('progress')

snackbar.addHideListener(() => {
  console.log('snackbar closed')
})

window.show = () => {
  snackbar.show(messageInput.value)
}

window.setProgress = () => {
  progressBar.changeValue(progressInput.value)
}

