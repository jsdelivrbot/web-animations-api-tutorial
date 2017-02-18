import progressBarFactory from './progressBar'

const progressBar = progressBarFactory(document.querySelector('.progress-bar'))

const progressInput = document.getElementById('progress')

window.setProgress = () => {
  progressBar.changeValue(progressInput.value)
}

