import copyToClipboard from './Click-copy.js'
import calculate from './calculate.js'
import { handleButtonPress, handleClear, handleTyping } from './key-handlers.js'
import switchTheme from './theme-switcher.js'

document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener('click', handleButtonPress)
})

document.querySelector('#clear').addEventListener('click', handleClear)
document.querySelector('#input').addEventListener('keydown', handleTyping)
document.querySelector('#equal').addEventListener('click', calculate)
document
  .querySelector('#copyToClipboard')
  .addEventListener('click', copyToClipboard)
document.querySelector('#themeSwitcher').addEventListener('click', switchTheme)
