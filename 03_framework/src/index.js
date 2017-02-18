import snackbarFactory from './snackbar'

const snackbar = snackbarFactory(document.querySelector('.snackbar'))
const messageInput = document.getElementById('message')

snackbar.addHideListener(() => {
  console.log('snackbar closed')
})

window.show = () => {
  snackbar.show(messageInput.value)
}

