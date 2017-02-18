import progressBarFactory from './progressBar'
import snackbarFactory from './snackbar'

const progressBar = progressBarFactory(document.querySelector('.progress-bar'))
const snackbar = snackbarFactory(document.querySelector('.snackbar'))

const progressInput = document.getElementById('progress')
const messageInput = document.getElementById('message')

window.setProgress = () => {
  progressBar.changeValue(progressInput.value)
}

snackbar.addHideListener(() => {
  console.log('snackbar closed')
})

window.show = () => {
  snackbar.show(messageInput.value)
}
